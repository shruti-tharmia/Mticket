export interface ISignupProps {
  name: string;
  email: string;
  phone: number | string;
  gender: string;
  occupation: string;
  password: string;
  confirmPassword: string;
  securityQuestion: string;
  securityAnswer: string;
  captcha?: string;
}

export interface IQuestionProps {
  _id: number;
  question: string;
}
