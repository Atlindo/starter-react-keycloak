import React from 'react';
import { connect } from 'react-redux';
import PageHeaderAlt from '../../../../../../components/layout-components/PageHeaderAlt';

const Page = () => {
  return <PageHeaderAlt>Scope</PageHeaderAlt>;
};

export default connect(state => {
  return {};
})(Page);
