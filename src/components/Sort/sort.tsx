import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FormInputCheckBox from '../FormInputCheckbox/formInputCheckbox';
import { ISortProps, ISortTypes } from './sort.types';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import RadioInput from '../RadioInput/radioInput';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { sortDataAction } from '../../context/actions/dashboardActions/dashboardActions';
import { MainContaiiner } from './sort.style';

const Sort = ({ navigateTo = '' }: ISortProps) => {
  const {
    dispatch,
    state: {
      dashboardState: {
        sortData: { isSorted, ...sort },
        searchFormData: { date, ...search },
        filterData: { isFiltered, ...filter },
      },
    },
    getSearchResults,
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();

  const methods = useForm<ISortTypes>({
    defaultValues: sort,
  });
  const { handleSubmit } = methods;

  const fareValue = [
    { label: 'fareLowToHigh', value: '1' },
    { label: 'fareHighToLow', value: '-1' },
  ];

  const nameValue = [
    {
      label: 'a-z',
      value: '1',
      displayIcon: <ArrowDownwardIcon fontSize="small" />,
    },
    {
      label: 'z-a',
      value: '-1',
      displayIcon: <ArrowUpwardIcon fontSize="small" />,
    },
  ];

  const ratingOption = [
    {
      label: 'aboveFour',
      value: 'aboveFour',
    },
    {
      label: 'threeToFour',
      value: 'threeToFour',
    },
    {
      label: 'belowThree',
      value: 'belowThree',
    },
  ];

  const epochDate = date.getTime();

  const submit = async (data: ISortTypes) => {
    dispatch(sortDataAction({ ...data, isSorted: true }));
    try {
      await getSearchResults({
        date: epochDate,
        ...search,
        filterBy: filter,
        sortBy: data,
      });
      if (navigateTo) navigate(navigateTo);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      <MainContaiiner data-testid="sort">
        <FormProvider {...methods}>
          <form
            data-testid="sortForm"
            onSubmit={handleSubmit(submit)}
            autoComplete="off"
            className="sortForm">
            <RadioInput label="fare" name="fixedFare" options={fareValue} />
            <RadioInput label="name" name="name" options={nameValue} />

            <FormInputCheckBox
              options={ratingOption}
              label={'ratings'}
              name="ratings"
            />
            <Button
              data-testid="sortButton"
              type="submit"
              fullWidth
              variant="contained">
              {localString['sort']}
            </Button>
          </form>
        </FormProvider>
      </MainContaiiner>
    </Fragment>
  );
};
export default Sort;
