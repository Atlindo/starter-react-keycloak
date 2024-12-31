import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Col, Descriptions, Empty, Flex, Form, Input, Row} from 'antd';
import {first} from 'lodash';

export default connect(()=> {
  return {};
},{})(
  /**
   * @param {object} attributes
   * @return {JSX.Element}
   */
    // eslint-disable-next-line func-names,no-unused-vars
  function({ attributes }){

    const [initialValues] = useState(()=> {
      return Object.entries(attributes).map(([key, value])=> {
        return {
          key,
          value: Array.isArray(value) ? first(value) : value ?? null
        };
      });
    });

    return (
      <React.Fragment>
        <Row gutter={24}>
          <Col xs={16}>
            <Card title="Attributes">
              <Form
                layout="vertical"
                initialValues={{
                  attributes: initialValues
                }}
              >
                <Form.List name="attributes" >
                  {(fields, { add, remove }) => {
                    return (
                      <div className="!w-full">
                        {
                          fields.map((field)=> {
                            return (
                              <div>
                                <Row gutter={24}>
                                  <Col xs={24} lg={8}>
                                    <Form.Item name={[field.name, 'key']} label="key" rules={[{required: true}]}>
                                      <Input/>
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} lg={8}>
                                    <Form.Item name={[field.name, 'value']} label="Value" rules={[{required: true}]}>
                                      <Input/>
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} lg={8}>
                                    <Flex align="center" className="h-full">
                                      <Button danger>Delete</Button>
                                    </Flex>
                                  </Col>
                                </Row>
                              </div>
                            );
                          })
                        }
                      </div>
                    );
                  }}
                </Form.List>
              </Form>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
);
