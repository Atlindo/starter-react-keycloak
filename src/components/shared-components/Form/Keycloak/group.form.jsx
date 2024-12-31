import React, {useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import {FormInstance, Form, Input} from 'antd';
import { FORM_CONSTANT } from '../../../../constants';

/**
 *
 * @param {FormInstance} form
 * @param {{name: string | null} | any} initialValues
 * @param {'UPDATE' | 'READONLY' | 'CREATE' }mode
 * @param {any} props
 * @return {JSX.Element}
 * @constructor
 */
// eslint-disable-next-line no-unused-vars
export default function KeycloakGroupForm({form , initialValues, mode, ...props}) {
  useEffect(() => {
    form.resetFields();
  });
  return (
    <React.Fragment>
      <Form
        form={form}
        initialValues={initialValues}
        layout="vertical"
      >
        <Form.Item name="name" label="Name" rules={[ {required: true} ]}>
          <Input placeholder="Input your name" disabled={mode === FORM_CONSTANT.READONLY}/>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
