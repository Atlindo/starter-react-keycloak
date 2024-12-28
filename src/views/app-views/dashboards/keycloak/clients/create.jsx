import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Switch,
  Tooltip,
  Typography,
} from 'antd';
import {
  ApiOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  GlobalOutlined,
  KeyOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PageHeaderAlt from '../../../../../components/layout-components/PageHeaderAlt';
import TheContainer from '../../../../../components/util-components/Container/TheContainer';
import { APP_PREFIX_PATH } from '../../../../../configs/AppConfig';
import KeycloakInterceptor from '../../../../../auth/keycloak.interceptor';

export default connect(() => {
  return {};
}, {})(function () {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const watchClientAuthentication = Form.useWatch(['client', 'authentication'], form);
  const initialValues = {
    valid_redirect_uri: [''],
    valid_post_logout_uri: [''],
    web_origins: [''],
  };
  function _onFinish() {
    form.validateFields().then(values => {
      setLoading(true);
      KeycloakInterceptor.post('/')
        .then(response => {
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
        });
    });
  }

  return (
    <>
      <>
        <PageHeaderAlt>
          <TheContainer fluid>
            <div className="pt-4">
              <Breadcrumb className="mb-4">
                <Breadcrumb.Item
                  className="cursor-pointer"
                  onClick={function () {
                    navigate(APP_PREFIX_PATH);
                  }}
                >
                  App
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <KeyOutlined /> <span>Keycloak</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  onClick={function () {
                    navigate(`${APP_PREFIX_PATH}/keycloak/clients`, { replace: true });
                  }}
                  className="cursor-pointer"
                >
                  <ApiOutlined /> <span>Clients</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span>Create</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Flex justify="space-between" align="start">
                <Typography.Title level={1} className="!m-0">
                  Create
                </Typography.Title>
                <Flex gap={10}>
                  <Popconfirm
                    title="Are you sure you want discard this fields?"
                    okButtonProps={{
                      shape: 'round',
                      size: 'small',
                    }}
                    cancelButtonProps={{
                      shape: 'round',
                      size: 'small',
                    }}
                    onConfirm={function () {
                      navigate(`${APP_PREFIX_PATH}/keycloak/clients`, { replace: true });
                    }}
                  >
                    <Button loading={loading} ghost type="primary" icon={<ArrowLeftOutlined />}>
                      Discard
                    </Button>
                  </Popconfirm>
                  <Button onClick={_onFinish} loading={loading} type="primary" icon={<SaveOutlined />}>
                    Save
                  </Button>
                </Flex>
              </Flex>
            </div>
          </TheContainer>
        </PageHeaderAlt>
        <div className="mt-6">
          <TheContainer fluid>
            <Form initialValues={initialValues} form={form} layout="vertical">
              <Row gutter={[24, 24]}>
                <Col xs={24} xl={14}>
                  <Card title="Capability Configuration">
                    <Form.Item name={['client', 'authentication']} label="Client authentication">
                      <Switch checkedChildren="Yes" unCheckedChildren="No" />
                    </Form.Item>
                    <Form.Item name={['client', 'authorization']} label="Authorization">
                      <Switch checkedChildren="Yes" unCheckedChildren="No" disabled={!watchClientAuthentication} />
                    </Form.Item>
                    <Form.Item name={['client', 'authentication_flow']} label="Authorization">
                      <Checkbox.Group className="w-full">
                        <Row gutter={[24, 12]}>
                          {[
                            {
                              value: 'standard-flow',
                              label: 'Standard Flow',
                            },
                            {
                              value: 'direct-access-grants',
                              label: 'Direct Access Grants',
                            },
                            {
                              disabled: !watchClientAuthentication,
                              value: 'services-accounts-roles',
                              label: 'Service accounts roles',
                            },
                            {
                              value: 'implicit-flow',
                              label: 'Implicit flow',
                            },
                            {
                              value: 'oauth2',
                              label: 'OAuth 2.0 Device Authorization Grant',
                            },
                            {
                              disabled: !watchClientAuthentication,
                              value: 'OIDC',
                              label: 'OIDC CIBA Grant',
                            },
                          ].map(child => {
                            return (
                              <Col xs={24} lg={12}>
                                <Checkbox {...child}>{child?.label}</Checkbox>
                              </Col>
                            );
                          })}
                        </Row>
                      </Checkbox.Group>
                    </Form.Item>
                  </Card>
                  <Card title="Login Settings">
                    <Form.Item name="root_url" label="Root URL">
                      <Input addonBefore={<GlobalOutlined />} placeholder="e.g https://domain.com" />
                    </Form.Item>
                    <Form.Item name="home_url" label="Home URL">
                      <Input addonBefore={<GlobalOutlined />} placeholder="e.g https://domain.com" />
                    </Form.Item>
                    <div className="w-full mb-2.5">
                      <Typography>Valid Redirect URIs</Typography>
                    </div>
                    <Form.List name="valid_redirect_uri">
                      {(fields, { add, remove }) => {
                        return (
                          <>
                            {fields.map((field, index) => {
                              return (
                                <div className="flex gap-2" key={`valid_redirect_uri-${field.name}`}>
                                  <Form.Item
                                    name={[field.name]}
                                    rules={[
                                      {
                                        required: fields.length > 1,
                                        message: 'URL Required',
                                      },
                                    ]}
                                    className="!w-full"
                                  >
                                    <Input addonBefore={<GlobalOutlined />} placeholder={'e.g https://domain.com/*'} />
                                  </Form.Item>
                                  <Tooltip title="Delete item">
                                    <Button
                                      disabled={fields.length === 1}
                                      danger
                                      ghost
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                      icon={<DeleteOutlined />}
                                      shape="circle"
                                      type="primary"
                                      htmlType="button"
                                    />
                                  </Tooltip>
                                  {index === fields.length - 1 && (
                                    <Tooltip title="Add item">
                                      <Button
                                        onClick={() => {
                                          add(null);
                                        }}
                                        icon={<PlusOutlined />}
                                        shape="circle"
                                        type="primary"
                                        htmlType="button"
                                      />
                                    </Tooltip>
                                  )}
                                </div>
                              );
                            })}
                          </>
                        );
                      }}
                    </Form.List>
                    <div className="w-full mb-2.5">
                      <Typography>Valid post logout redirect URIs</Typography>
                    </div>
                    <Form.List name="valid_post_logout_uri">
                      {(fields, { add, remove }) => {
                        return (
                          <>
                            {fields.map((field, index) => {
                              return (
                                <div className="flex gap-2" key={`valid_redirect_uri-${field.name}`}>
                                  <Form.Item
                                    name={[field.name]}
                                    rules={[
                                      {
                                        required: fields.length > 1,
                                        message: 'URL Required',
                                      },
                                    ]}
                                    className="!w-full"
                                  >
                                    <Input addonBefore={<GlobalOutlined />} placeholder={'e.g https://domain.com/*'} />
                                  </Form.Item>
                                  <Tooltip title="Delete item">
                                    <Button
                                      disabled={fields.length === 1}
                                      danger
                                      ghost
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                      icon={<DeleteOutlined />}
                                      shape="circle"
                                      type="primary"
                                      htmlType="button"
                                    />
                                  </Tooltip>
                                  {index === fields.length - 1 && (
                                    <Tooltip title="Add item">
                                      <Button
                                        onClick={() => {
                                          add(null);
                                        }}
                                        icon={<PlusOutlined />}
                                        shape="circle"
                                        type="primary"
                                        htmlType="button"
                                      />
                                    </Tooltip>
                                  )}
                                </div>
                              );
                            })}
                          </>
                        );
                      }}
                    </Form.List>

                    <div className="w-full mb-2.5">
                      <Typography>Web Origins</Typography>
                    </div>
                    <Form.List name="web_origins">
                      {(fields, { add, remove }) => {
                        return (
                          <>
                            {fields.map((field, index) => {
                              return (
                                <div className="flex gap-2" key={`valid_redirect_uri-${field.name}`}>
                                  <Form.Item
                                    name={[field.name]}
                                    rules={[
                                      {
                                        required: fields.length > 1,
                                        message: 'URL Required',
                                      },
                                    ]}
                                    className="!w-full"
                                  >
                                    <Input addonBefore={<GlobalOutlined />} placeholder={'e.g https://domain.com/*'} />
                                  </Form.Item>
                                  <Tooltip title="Delete item">
                                    <Button
                                      disabled={fields.length === 1}
                                      danger
                                      ghost
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                      icon={<DeleteOutlined />}
                                      shape="circle"
                                      type="primary"
                                      htmlType="button"
                                    />
                                  </Tooltip>
                                  {index === fields.length - 1 && (
                                    <Tooltip title="Add item">
                                      <Button
                                        onClick={() => {
                                          add(null);
                                        }}
                                        icon={<PlusOutlined />}
                                        shape="circle"
                                        type="primary"
                                        htmlType="button"
                                      />
                                    </Tooltip>
                                  )}
                                </div>
                              );
                            })}
                          </>
                        );
                      }}
                    </Form.List>
                  </Card>
                </Col>
                <Col xs={24} xl={10}>
                  <Card title="General Setting">
                    <Form.Item name={['client', 'type']} label="Client Type" rules={[{ required: true }]}>
                      <Select
                        loading={false}
                        defaultValue="openid-connect"
                        options={[
                          {
                            label: 'OpenID Connect',
                            value: 'openid-connect',
                          },
                          {
                            label: 'SAML',
                            value: 'saml',
                          },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item name={['client', 'clientId']} label="Client ID" rules={[{ required: true }]}>
                      <Input placeholder="Input your client ID" />
                    </Form.Item>
                    <Form.Item name={['client', 'name']} label="Name">
                      <Input placeholder="Input your client name" />
                    </Form.Item>
                    <Form.Item name={['client', 'description']} label="Description">
                      <Input.TextArea placeholder="Input your description" />
                    </Form.Item>
                    <Form.Item name={['client', 'display_ui']} label="Always display in UI?">
                      <Switch checkedChildren="Yes" unCheckedChildren="No" />
                    </Form.Item>
                  </Card>
                </Col>
              </Row>
            </Form>
          </TheContainer>
        </div>
      </>
    </>
  );
});
