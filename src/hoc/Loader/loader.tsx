import React from 'react';
import { LoaderContainer } from './loader.style';

const Loader = () => {
  return (
    <LoaderContainer>
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
