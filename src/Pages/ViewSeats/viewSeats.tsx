import { Fragment, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { vehicleTypeMap } from './viewSeats.data';
import { Container } from './viewSeats.style';

function ViewSeats() {
  const {
    state: { seatState },
  } = useContext(StoreContext) as IStoreContext;

  const vehicleType = seatState.selectedVehicleData.vehicleClassType as
    | 'SLEEPER'
    | 'SEATER';

  const ComponentToRender = vehicleTypeMap[vehicleType];

  return (
    <Fragment>
      <Container>
        <ComponentToRender />
      </Container>
    </Fragment>
  );
}

export default ViewSeats;
