import { Fragment, useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IRadioInputProps } from './radioInput.types';
import { RadioGroupContainer } from './radioInput.styles';

const RadioInput = ({
  name,
  label,
  options,
  row = false,
  ...radioGroupProps
}: IRadioInputProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroupContainer>
          <FormLabel className="formLabel" component="legend">
            {localString[label]}
          </FormLabel>
          <RadioGroup
            {...field}
            className="radioGroup"
            row={row}
            data-testid={`${name}Input`}
            {...radioGroupProps}>
            {options &&
              options.map(({ label, value, displayIcon: Icon }, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={value}
                    control={<Radio />}
                    label={
                      <Fragment>
                        {localString[label]}
                        <span className="icon">{Icon}</span>
                      </Fragment>
                    }
                  />
                );
              })}
          </RadioGroup>
        </RadioGroupContainer>
      )}
    />
  );
};

export default RadioInput;
