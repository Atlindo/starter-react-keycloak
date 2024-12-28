import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Switch,
  Table,
  Flex,
  Input,
  Space,
  Form,
  Menu,
  Select,
  Tag,
  Badge,
  Pagination,
  Row,
  Col,
  Divider,
} from 'antd';
import { CloseOutlined, EditOutlined, EyeOutlined, FilterOutlined, SaveOutlined } from '@ant-design/icons';
import moment from 'moment';
import { NavLink, useNavigate } from 'react-router-dom';
import EllipsisDropdown from '../../../../../components/shared-components/EllipsisDropdown';
import ApiService from '../../../../../services/api.service';
import { APP_PREFIX_PATH } from '../../../../../configs/AppConfig';

export const Page = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [colHidden] = useState(['id']);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [pagination, setPagination] = useState({
    page: params?.page,
    limit: params?.limit,
    total: 0,
  });
  const [editingKey, setEditingKey] = useState(null);

  const isEditing = record => record?.id === editingKey;
  const edit = record => {
    form.setFieldsValue({
      ...record,
      createdTimestamp: moment(record?.createdTimestamp),
    });
    setEditingKey(record?.id);
  };
  function _onUpdate() {
    form.validateFields().then(values => {
      console.log({ values });
    });
  }
  function _onChangePage(page, limit) {
    setParams(prevState => ({
      ...prevState,
      page,
      limit,
    }));
  }

  const columns = [
    {
      visible: true,
      key: 'no',
      width: '70px',
      title: 'No.',
      dataIndex: 'id',
      render(_, val, index) {
        return pagination?.page > 1 ? (index + 1) * params?.limit : index + 1;
      },
    },
    {
      visible: true,
      width: '180px',
      key: 'username',
      title: 'Username',
      dataIndex: 'username',
      render: (_, val) => <NavLink to={[APP_PREFIX_PATH, 'users', val?.id].join('/')}>{_}</NavLink>,
    },
    {
      visible: true,
      width: '220px',
      fixed: 'left',
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      visible: true,
      width: '220px',
      key: 'firstName',
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      visible: true,
      width: '220px',
      key: 'lastName',
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      visible: true,
      key: 'requiredActions',
      width: '200px',
      title: 'Required Action',
      dataIndex: 'requiredActions',
      render: _ => {
        return Array.isArray(_) && _.length > 0 ? (
          <div>
            {_.length > 1 ? (
              <Space>
                {_.slice(0, 1).map(child => {
                  return (
                    <Badge count={_.slice(1).length} showZero={false}>
                      <Tag color="cyan" className="mb-1">
                        {child}
                      </Tag>
                    </Badge>
                  );
                })}
              </Space>
            ) : (
              _.map(child => {
                return (
                  <Tag color="cyan" className="mb-1">
                    {child}
                  </Tag>
                );
              })
            )}
          </div>
        ) : null;
      },
    },
    {
      width: '160px',
      visible: true,
      key: 'emailVerified',
      title: 'Verified',
      dataIndex: 'emailVerified',
      render: _ => <Switch checked={_} disabled />,
    },
    {
      width: '160px',
      visible: true,
      key: 'totp',
      title: 'TOTP',
      dataIndex: 'totp',
      render: _ => <Switch checked={_} disabled />,
    },
    {
      width: '160px',
      visible: true,
      key: 'enabled',
      title: 'Enabled',
      dataIndex: 'enabled',
      render: _ => <Switch checked={_} disabled />,
    },

    {
      visible: true,
      width: '200px',
      key: 'createdTimestamp',
      title: 'Created At',
      dataIndex: 'createdTimestamp',
      render: _ => (moment(_).isValid() ? moment(_).format('DD/MM/YYYY HH:mm A') : '-'),
    },
    {
      fixed: 'right',
      visible: true,
      width: '100px',
      title: 'Action',
      render: _ => {
        return (
          <EllipsisDropdown
            placement="left"
            menu={
              <Menu>
                {_?.id === editingKey ? (
                  <>
                    <Menu.Item key="save" icon={<SaveOutlined />} onClick={_onUpdate}>
                      Save
                    </Menu.Item>
                    <Menu.Item
                      key="close"
                      icon={<CloseOutlined />}
                      danger
                      onClick={() => {
                        setEditingKey(null);
                      }}
                    >
                      Cancel
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item
                      onClick={() => {
                        navigate([APP_PREFIX_PATH, 'users', _?.id].join('/'));
                      }}
                      icon={<EyeOutlined />}
                    >
                      Detail
                    </Menu.Item>
                    <Divider className="m-0" />
                    <Menu.Item onClick={() => edit(_)} icon={<EditOutlined />}>
                      Amend Account
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => {
                        navigate([APP_PREFIX_PATH, 'users', _?.id, 'amend', 'access'].join('/'));
                      }}
                      icon={<EditOutlined />}
                    >
                      Access
                    </Menu.Item>
                  </>
                )}
              </Menu>
            }
          />
        );
      },
    },
  ];

  useEffect(() => {
    setLoading(true);
    new ApiService({
      url: '/api/v1/user',
      config: {
        params,
      },
    })
      .get()
      .then(response => {
        console.log({ response });
        setPagination(prevState => ({
          ...prevState,
          ...response?.pagination,
        }));
        setLoading(false);
        setData(response?.data ?? []);
      })
      .catch(err => {
        setLoading(false);
        setData([]);
      });
  }, [params]);

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
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Table
              bordered
              scroll={{
                // y: 50 * 9,
                x: 1980,
              }}
              rowClassName="editable-row"
              loading={loading}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Col>
          <Col xs={24}>
            <Pagination onChange={_onChangePage} simple total={pagination?.total ?? 0} />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Page;
