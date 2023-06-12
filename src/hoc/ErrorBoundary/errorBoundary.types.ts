import { PropsWithChildren } from 'react';

export interface IErrorBoundaryProps extends PropsWithChildren {}

export interface IErrorBoundaryState {
  error: Error | null;
  errorInfo: any;
}
