import React from 'react';
import styled from '@emotion/styled';

const AppLayout = styled.div(() => ({
  height: '100vh',
}));

export const LayoutDefault = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default LayoutDefault;
