import { forwardRef, Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import success from '../../assets/images/success.gif';
import { Container } from './bookingSuccessful.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import PDFGenerator from '../../hoc/PDFGenerator/pdfGenerator';
import { routes } from '../../constants/route';
import Topbar from '../../components/Topbar/topbar';
import bookingDetails from '../../components/BookingDetails/bookingDetails';
import useWindowSize from '../../hooks/useWindowSize';

function BookingSuccessful(props: any, ref: any) {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const windowWidthCondition = width < 576;

  const handleViewBooking = () => {
    navigate(routes.ticket);
  };
  return (
    <Fragment>
      <Topbar />
      <Container>
        <Box className="contents">
          <img src={success} alt="success gif" />
          <h2 className="heading">{localString['bookingSuccessful']}</h2>

          <Box className="bookingDetails" onClick={handleViewBooking}>
            <span className="bookingId">
              {localString['viewBookingDetails']}
            </span>
            {!windowWidthCondition && (
              <span className="icon">
                <ArrowCircleRightTwoToneIcon fontSize="medium" />
              </span>
            )}
          </Box>

          <Box className="buttonGroup">
            {windowWidthCondition ? (
              <HomeOutlinedIcon
                fontSize="large"
                sx={{ color: '#175CD3' }}
                onClick={() => navigate(routes.homeRoute)}
              />
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate(routes.homeRoute)}>
                {localString['backToHome']}
              </Button>
            )}
            <PDFGenerator
              buttonText={localString['downloadTicket']}
              component={bookingDetails}
              icon
            />
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default forwardRef(BookingSuccessful);
