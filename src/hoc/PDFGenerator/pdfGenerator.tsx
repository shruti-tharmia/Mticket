import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { Container } from './pdfGenerator.style';
import { IPDFGeneratorProps } from './pdfGenerator.types';
import useWindowSize from '../../hooks/useWindowSize';

const PDFGenerator = ({
  buttonText,
  component: ComponentToPrint,
  icon = false,
}: IPDFGeneratorProps) => {
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { width } = useWindowSize();
  const windowWidth = width <= 576;

  return (
    <Container>
      <Box className="hide">
        <ComponentToPrint ref={componentRef} />
      </Box>
      <Box className="download">
        {windowWidth && icon ? (
          <DownloadForOfflineOutlinedIcon
            className="icon"
            onClick={handlePrint}
            color="primary"
            fontSize="large"
          />
        ) : (
          <Button
            fullWidth
            size="small"
            color="primary"
            variant="contained"
            onClick={handlePrint}>
            {buttonText}
          </Button>
        )}
      </Box>
    </Container>
  );
};
export default PDFGenerator;
