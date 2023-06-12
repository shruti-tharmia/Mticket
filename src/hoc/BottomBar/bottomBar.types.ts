import { PropsWithChildren } from 'react';

export interface IBottomBarProps extends PropsWithChildren {
  text: string;
  height?: number;
  fare?: number;
}
