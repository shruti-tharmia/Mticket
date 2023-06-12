import BookingDetails from '../../components/BookingDetails/bookingDetails';
import PDFGenerator from '../../hoc/PDFGenerator/pdfGenerator';
import { TicketContainer } from './ticket.styles';

const Ticket = () => {
  return (
    <TicketContainer>
      <BookingDetails />
      <div className="downloadButton">
        <PDFGenerator
          buttonText="Download Ticket"
          component={BookingDetails}
          icon
        />
      </div>
    </TicketContainer>
  );
};

export default Ticket;
