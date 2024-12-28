import React, { useEffect, useState } from 'react';
import { Button, Card, Switch, Table, Flex, Input, Space, Form, Menu, Select, Tag } from 'antd';
import { EditOutlined, FilterOutlined, SaveOutlined } from '@ant-design/icons';
import ApiService from '../../../../../services/api.service';
import EllipsisDropdown from '../../../../../components/shared-components/EllipsisDropdown';

export const Page = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [editingKey, setEditingKey] = useState(null);
  const isEditing = record => record?.id === editingKey;
  const edit = record => {
    form.setFieldsValue({ ...record });
    setEditingKey(record?.id);
  };

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      editable: true,
      component: {
        render: () => {
          return null;
        },
      },
    },
    {
      width: '180px',
      key: 'username',
      title: 'Username',
      dataIndex: 'username',
      component: {
        render: () => {
          return <Input placeholder="Input your username" />;
        },
      },
      editable: true,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      component: {
        render: () => {
          return <Input placeholder="Input your name" />;
        },
      },
      editable: true,
    },
    {
      key: 'firstName',
      title: 'First Name',
      dataIndex: 'firstName',
      component: {
        render: () => {
          return <Input placeholder="Input your name" />;
        },
      },
      editable: true,
    },
    {
      key: 'lastName',
      title: 'Last Name',
      dataIndex: 'lastName',
      component: {
        render: () => {
          return <Input placeholder="Input your name" />;
        },
      },
      editable: true,
    },
    {
      key: 'requiredActions',
      width: '300px',
      title: 'Required Action',
      dataIndex: 'requiredActions',
      component: {
        render: () => {
          return (
            <Select
              mode="multiple"
              options={[
                {
                  key: 'update_user_locale',
                  value: 'update_user_locale',
                  label: 'Update User',
                },
                {
                  key: 'CONFIGURE_TOTP',
                  value: 'CONFIGURE_TOTP',
                  label: 'Configure TOTP',
                },
                {
                  key: 'VERIFY_EMAIL',
                  value: 'VERIFY_EMAIL',
                  label: 'Verify Email',
                },
                {
                  key: 'webauthn-register-passwordless',
                  value: 'webauthn-register-passwordless',
                  label: 'Register Passwordless',
                },
                {
                  key: 'webauthn-register',
                  value: 'webauthn-register',
                  label: 'Register',
                },
                {
                  key: 'VERIFY_PROFILE',
                  value: 'VERIFY_PROFILE',
                  label: 'Verify Profile',
                },
                {
                  key: 'delete_credential',
                  value: 'delete_credential',
                  label: 'Delete Credential',
                },
                {
                  key: 'UPDATE_PASSWORD',
                  value: 'UPDATE_PASSWORD',
                  label: 'Update Password',
                },
                {
                  key: 'UPDATE_PROFILE',
                  value: 'UPDATE_PROFILE',
                  label: 'Update Profile',
                },
              ]}
            />
          );
        },
      },
      render: _ => {
        return Array.isArray(_) && _.length > 0 ? (
          <div>
            {_.map(child => {
              return (
                <Tag color="cyan" className="mb-1">
                  {child}
                </Tag>
              );
            })}
          </div>
        ) : null;
      },
      editable: true,
    },
    {
      key: 'emailVerified',
      title: 'Verified',
      dataIndex: 'emailVerified',
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      key: 'totp',
      title: 'TOTP',
      dataIndex: 'totp',
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      key: 'enabled',
      title: 'Enabled',
      dataIndex: 'enabled',
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      width: '160px',
      key: 'access.manageGroupMembership',
      title: 'Manage Group Membership',
      dataIndex: ['access', 'manageGroupMembership'],
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      width: '160px',
      key: 'access.view',
      title: 'Access View',
      dataIndex: ['access', 'view'],
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      width: '160px',
      key: 'access.mapRoles',
      title: 'Map Roles',
      dataIndex: ['access', 'mapRoles'],
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      width: '160px',
      key: 'access.impersonate',
      title: 'Impersonate',
      dataIndex: ['access', 'impersonate'],
      component: {
        render: _ => {
          return <Switch />;
        },
      },
      render: _ => <Switch checked={_} disabled />,
      editable: true,
    },
    {
      width: '100px',
      title: 'Action',
      render: _ => {
        return _?.id === editingKey ? (
          <div>
            <Button type="primary" icon={<SaveOutlined />}>
              Save
            </Button>
          </div>
        ) : (
          <>
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item onClick={() => edit(_)}>
                    <Flex alignItems="center">
                      <EditOutlined />
                      <span className="ml-2">Edit</span>
                    </Flex>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
      editable: false,
    },
  ];

  useEffect(() => {
    setLoading(true);
    new ApiService({
      url: '/api/v1/user',
      config: {
        params: {},
      },
    })
      .get()
      .then(response => {
        setLoading(false);
        setData(response?.data ?? []);
      })
      .catch(err => {
        setLoading(false);
        setData([]);
      });
  }, []);

  const EditableCell = ({ editing, dataIndex, title, inputType, record, Component, index, children, ...restProps }) => {
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {Component ? Component?.render() : null}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => {
        return {
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          Component: col?.component ?? null,
          editing: isEditing(record),
        };
      },
    };
  });

  return (
    <Card>
      <Flex justify="space-between" className="mb-4">
        <Space>
          <Input placeholder="Input your name" />
          <Input placeholder="Input your name" />
        </Space>
        <div>
          <Button icon={<FilterOutlined />} type="primary">
            Filter
          </Button>
        </div>
      </Flex>
      <Form form={form} component={false}>
        <Table
          scroll={{
            y: 55 * 10,
            x: 1980,
          }}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowClassName="editable-row"
          loading={loading}
          columns={mergedColumns}
          dataSource={data}
          pagination={false}
        />
      </Form>
    </Card>
  );
};

export default Page;
