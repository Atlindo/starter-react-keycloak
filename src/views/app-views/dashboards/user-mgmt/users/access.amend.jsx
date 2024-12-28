import React from 'react';
import { connect } from 'react-redux';

const Page = () => {
  return (
    <>
      <p>Amend Access</p>
    </>
  );
};

export default connect(state => {
  return {
    state,
  };
})(Page);
