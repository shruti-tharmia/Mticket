import { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import Slider from '@mui/material/Slider/Slider';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SliderContainer } from './slider.styles';
import { ISliderProps } from './slider.types';

const SliderInput = ({ data, name, label }: ISliderProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { control } = useFormContext();

  return (
    <SliderContainer>
      <FormLabel className="formLabel">{localString[label]}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <div className="slider">
            <Slider
              data-testid={`${name}Input`}
              value={value}
              step={null}
              marks={data}
              onChange={(event, data) => {
                onChange(data);
              }}
            />
          </div>
        )}
      />
    </SliderContainer>
  );
};

export default SliderInput;
