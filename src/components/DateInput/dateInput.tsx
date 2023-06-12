import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { IDatePickerProps } from './dateInput.types';
import { InputContainer } from '../FormInput/formInput.styles';

const DateInput = ({
  name,
  showErrorMessage = false,
  ...textFieldProps
}: IDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage =
    showErrorMessage && errors[name] ? (errors[name]?.message as string) : '';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <DesktopDatePicker
            minDate={new Date()}
            value={value}
            inputFormat="DD-MM-YY"
            renderInput={params => (
              <InputContainer>
                <TextField
                  data-testid={`${name}Input`}
                  required
                  {...params}
                  error={!!errors[name]}
                  helperText={errorMessage}
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    placeholder: textFieldProps.placeholder,
                  }}
                  {...textFieldProps}
                />
              </InputContainer>
            )}
            onChange={event => {
              onChange(event);
            }}
          />
        );
      }}
    />
  );
};

export default DateInput;
