import { PropsWithChildren } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface ILocalisationProviderProps extends PropsWithChildren {}

export interface ILocalisationState {
  language: string;
  localString: { [key: string]: string };
}

export interface ILocalisationContext {
  localisation: ILocalisationState;
  updateLocalisation: Dispatch<SetStateAction<ILocalisationState>>;
}
