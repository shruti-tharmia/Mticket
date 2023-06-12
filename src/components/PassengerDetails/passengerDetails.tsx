import { Fragment, useContext } from 'react';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IPassengerDetailsProps } from './passengerDetails.types';
import { IPassengerDetailsFormProps } from './passengerDetails.types';
import { IPassengerCountProps } from './passengerDetails.types';
import { IPassengerDetails } from './passengerDetails.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import FormInput from '../FormInput/formInput';
import RadioInput from '../RadioInput/radioInput';
import { Parent } from './passengerDetails.style';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { vehicleBooking } from '../../services/vehicle/vehicle.service';
import utility from '../../utils/utility';
import { paymentInfoAction } from '../../context/actions/bookingDetailsActions/bookingDetailsActions';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/route';

function PassengerDetails({
  passengerCount: count,
  showModal,
}: IPassengerCountProps) {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const {
    dispatch,
    state: {
      seatState: {
        selectedVehicleData: { _id, fixedFare, station },
      },
      dashboardState: {
        searchFormData: { from, to, date },
      },
    },
  } = useContext(StoreContext) as IStoreContext;

  const navigate = useNavigate();

  count.sort((a: any, b: any) => a.seatNo - b.seatNo);
  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPhone = localString?.minLengthTen;
  const maxLengthPhone = localString?.maxLengthTen;

  const passengerDetailsSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    phoneNumber: Yup.string()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
  });

  const genderOptions = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ];

  const methods = useForm<IPassengerDetailsProps>({
    resolver: yupResolver(passengerDetailsSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { dirtyFields },
  } = methods;

  const { fields } = useFieldArray<any>({
    name: 'passengerDetails',
    control,
  });

  const submit = async (data: IPassengerDetailsProps) => {
    const [departure, ...stations] = station;
    const arrival = station.slice(-1)[0];

    data.passengerDetails.forEach(
      (element: IPassengerDetailsFormProps, index: number) => {
        element.passengerSeat = count[index].seatNo;
        element.seatFare = count[index].seatFare;
        element.fixedFare = fixedFare;
        element.userId = utility.getStore('userId') as string;
        element.email = data.email;
        element.phoneNumber = data.phoneNumber;
        element.from = from;
        element.to = to;
        element.departureDate = date;
        element.departureTime = departure.sourceDepartureTime;
        element.arrivalDate = date;
        element.arrivalTime = arrival.sourceDepartureTime;
      },
    );
    try {
      const response = await vehicleBooking(
        {
          passengerDetails: [...data.passengerDetails],
        },
        _id,
      );
      console.log(response.data);
      dispatch(paymentInfoAction(response.data));
      showModal(false);
      navigate(routes.payment);
    } catch (error: any) {
      const message = error.response.data.error.message;
      throw error;
    }
  };

  return (
    <Fragment>
      <Parent>
        <h2 className="heading">{localString?.passengerDetails}</h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(submit)}
            autoComplete="off"
            data-testid="passengerDetailsForm">
            <Box className="container">
              <h4 className="subHeading">
                {localString?.passengerInformation}
              </h4>
              {count.length &&
                count.map((element: IPassengerDetails, index: number) => {
                  return (
                    <Box className="paper" key={index}>
                      <Box className="row" data-testid="details">
                        {localString?.passenger} {index + 1} &emsp;|
                        <Box>
                          {localString?.seat} {element.seatNo}
                        </Box>
                      </Box>
                      <Box className="inputs" data-testid="inputFields">
                        <Box>
                          <FormInput
                            name={`passengerDetails.${index}.passengerName`}
                            label={`*${localString['enterName']}`}
                            showErrorMessage
                            size="small"
                          />

                          <RadioInput
                            name={`passengerDetails.${index}.passengerGender`}
                            label={`*${localString['selectGender']}`}
                            options={genderOptions}
                            row
                          />
                          <FormInput
                            name={`passengerDetails.${index}.passengerAge`}
                            label={`*${localString['enterAge']}`}
                            showErrorMessage
                            size="small"
                            type="number"
                          />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <Box className="container">
              <h4 className="subHeading">{localString?.contactInformation}</h4>
              <p className="description">{localString?.sendTicketDetails}</p>
              <Box className="paper contactContainer">
                <Box className="column inputs" data-testid="contactContainer">
                  <FormInput
                    name="email"
                    label={`*${localString['enterEmail']}`}
                    showErrorMessage
                    size="small"
                  />

                  <FormInput
                    name="phoneNumber"
                    label={`*${localString['enterPhoneNumber']}`}
                    showErrorMessage
                    size="small"
                  />
                </Box>
              </Box>
              <Button
                data-testid="submitButton"
                disabled={!(Object.keys(dirtyFields).length >= 3)}
                type="submit"
                fullWidth
                className="button"
                variant="contained"
                size="small">
                {localString?.proceedToPayment}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Parent>
    </Fragment>
  );
}

export default PassengerDetails;
