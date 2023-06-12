import * as Yup from 'yup';
import { IPaymentDetailsInput } from './paymentDetails.types';

export const paymentDetailsSchema = (localString: any) => {
  const monthMessage = localString?.monthMessage;
  const yearMessage = localString?.yearMessage;
  const lengthSixteenMessage = localString?.lengthSixteen;
  const lengththreeMessage = localString?.lengththree;
  const emailMessage = localString?.emailMessage;
  const numberMessage = localString?.numberMessage;

  const date = new Date();
  const currentYear = date.getFullYear() - 2000;
  const currentMonth = date.getMonth();
  const numberRegex = /^[0-9]+$/;

  return Yup.object({
    cardNumber: Yup.string()
      .required('')
      .matches(numberRegex, numberMessage)
      .min(16, lengthSixteenMessage)
      .max(16, lengthSixteenMessage),
    cardName: Yup.string().required(''),
    cardExpMonth: Yup.number()
      .required('')
      .typeError(numberMessage)
      .min(2, monthMessage)
      .max(2, monthMessage)
      .lessThan(13, monthMessage)
      .moreThan(0, monthMessage),
    cardExpYear: Yup.number()
      .required('')
      .when('cardExpMonth', (cardExpMonth: number) => {
        if (cardExpMonth <= currentMonth + 1) {
          return Yup.number()
            .typeError(numberMessage)
            .moreThan(currentYear, yearMessage)
            .lessThan(currentYear + 10, yearMessage);
        } else
          return Yup.number()
            .typeError(numberMessage)
            .moreThan(currentYear - 1, yearMessage)
            .lessThan(currentYear + 10, yearMessage);
      }),
    cardCVC: Yup.string()
      .required('')
      .matches(numberRegex, numberMessage)
      .min(3, lengththreeMessage)
      .max(3, lengththreeMessage),
    email: Yup.string().email(emailMessage),
  });
};

export const paymentDetailsDefaultValues: IPaymentDetailsInput = {
  cardCVC: '',
  cardName: '',
  cardNumber: '',
  cardExpMonth: '',
  cardExpYear: '',
  email: '',
};
