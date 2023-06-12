import { styled } from '@mui/material/styles';
import paymentBackground from '../../assets/images/paymentBackground.jpeg';

export const PaymentContainer = styled('div')(
  ({ theme }: any) => `
display:flex;
height: 100vh;
justify-content: center;
background: url(${paymentBackground}) center/cover no-repeat;

.paymentWrapper {
  background-color: #FAF9F9;
  display: flex;
  width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
`,
);
