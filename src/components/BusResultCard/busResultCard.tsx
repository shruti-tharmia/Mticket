import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '@mui/material/Button/Button';
import { BusResultCardContainer } from './busResultCard.styles';
import { IBusResultCardProps } from './busResultCard.types';
import { iconMap } from '../BusResults/busResults.data';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { seatDataAction } from '../../context/actions/seatActions/seatActions';
import { ThreeDots } from 'react-loader-spinner';

const BusResultCard = ({ data }: IBusResultCardProps) => {
  const [selected, setSelected] = useState('');
  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();

  const { width } = useWindowSize();
  const windowWidth = width > 576;
  const {
    vehicleName,
    operatorName,
    vehicleClassType,
    vehicleType,
    station,
    ratings,
    amenities,
    fixedFare,
    TotalAvailableSeat,
    totalTravelTime,
  } = data;

  const [departure, ...stations] = station;
  const arrival = station.slice(-1)[0];

  const ratingClassName =
    ratings >= 4
      ? 'ratings green'
      : ratings >= 3 && ratings < 4
      ? 'ratings orange'
      : 'ratings red';

  const hourString = totalTravelTime > 1 ? localString?.hrs : localString?.hr;

  const handleActionClick = (type: string) => {
    if (selected === type) setSelected('');
    else setSelected(type);
  };
  const handleViewSeats = (data: any) => {
    dispatch(seatDataAction(data));
    navigate('/home/viewSeats');
  };

  return (
    <BusResultCardContainer
      onClick={!windowWidth ? () => handleViewSeats(data) : data => {}}
      data-testid="busResultCard">
      <div className="vehicleDetails" data-testid="vehicleDetails">
        <div className="vehicleName">
          <h3>
            {operatorName} {vehicleName}
          </h3>
        </div>
        <div className="busDetails" data-testid="busDetails">
          <div
            className="vehicleAndTimeDetails"
            data-testid="vehicleAndTimeDetails">
            <div className="vehicle" data-testid="vehicle">
              <p className="lightGrey">
                {vehicleType} {vehicleClassType}
              </p>
            </div>

            <div className="timeDetails" data-testid="timeDetails">
              <div className="departure time">
                <h3>{departure.sourceDepartureTime}</h3>

                {windowWidth && (
                  <p className="lightGrey">{departure.sourceName}</p>
                )}
              </div>

              <div className="totalDuration time">
                <p className="lightGrey">
                  {totalTravelTime} {hourString}
                </p>
              </div>

              <div className="arrival time">
                <p>{arrival.sourceDepartureTime}</p>
                {windowWidth && (
                  <p className="lightGrey">{arrival.sourceName}</p>
                )}
              </div>
            </div>
          </div>
          {ratings && (
            <div className="ratingDetails">
              <div className={ratingClassName}>
                <p>{ratings}</p>
              </div>
            </div>
          )}
          <div className="fareAndSeatsAvailabilty">
            <div className="fare" data-testid="fare">
              <p className="lightGrey">{localString?.startsFrom}</p>
              <h3>
                <span className="lightGrey fontWeightLight">
                  {localString?.rs}
                </span>
                {fixedFare}
              </h3>
            </div>

            <div className="seatsAvailability" data-testid="seatsAvailability">
              <p className="lightGrey">
                {TotalAvailableSeat} {localString?.seats}{' '}
                {localString?.available}
              </p>
            </div>
          </div>
          {windowWidth && (
            <div className="viewSeats">
              <Button
                data-testid="viewSeatsButton"
                variant="contained"
                size="small"
                onClick={() => handleViewSeats(data)}>
                {localString?.viewSeats}
              </Button>
            </div>
          )}
        </div>
      </div>

      {windowWidth && (
        <div className="actionsContainer lightGrey">
          <div
            className={
              selected === 'amenity'
                ? 'active amenities actions'
                : 'amenities actions'
            }
            onClick={() => handleActionClick('amenity')}
            data-testid="amenities">
            <p>{localString?.amenities}</p>
          </div>
        </div>
      )}
      {selected === 'amenity' && (
        <div className="amenitiesContainer" data-testid="amenitiesContainer">
          {amenities.map((amenity: string, index: number) => {
            const Icon = iconMap[amenity];
            return (
              <div className="amenity fontWeightLight" key={index}>
                <Icon color="primary" />
                <p>{amenity}</p>
              </div>
            );
          })}
        </div>
      )}
    </BusResultCardContainer>
  );
};

export default BusResultCard;
