import React from 'react';
import { connect } from 'react-redux';

const Page = () => {
  return (
    <>
      <p>show</p>
    </>
  );
};

export default connect(state => {
  return {
    state,
  };
})(Page);
