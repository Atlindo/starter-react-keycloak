import React, {useEffect, useState} from 'react';
import {useKeycloak} from '@react-keycloak/web';
import {
  Alert,
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  notification, Popconfirm,
  Row,
  Select,
  Table
} from 'antd';
import moment from 'moment/moment';
import {CopyOutlined, DeleteOutlined, PlusOutlined, ReloadOutlined} from '@ant-design/icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import KeycloakInterceptor from '../../../../../../auth/keycloak.interceptor';
import TheContainer from '../../../../../../components/util-components/Container/TheContainer';

function InitialAccessTokenIndex() {
  const {keycloak} = useKeycloak();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState([]);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    first: 0,
    max: 5,
  });
  const [token, setToken] = useState(null);

  /**
   * @param {string} id
   * @param {number} index
   * @private
   */
  function _onDelete(id, index) {
    setIndexLoading(index, true);
    message
      .loading({
        key: 'delete-item',
        content: 'Loading deleted item',
        duration: 10,
      })
      .then(r => r);
    KeycloakInterceptor.delete(`/admin/realms/${keycloak.realm}/clients-initial-access/${id}`)
      .then((response) => {
        if (response?.status === 204) {
          setData(prevState => [
            ...prevState.map(child => ({
              ...child,
              deletedAt: id === child?.id ? moment() : null,
            })),
          ]);
          setTimeout(() => {
            setIndexLoading(index, false);
            setData(prevState => [...prevState.filter(child => child?.id !== id)]);
            message
              .success({
                key: 'delete-item',
                content: 'Successfully deleted item',
                duration: 4,
              })
              .then(r => r);
          }, 1000);
        } else {
          setTimeout(() => {
            setIndexLoading(index, false);
            setData(prevState => [...prevState.filter(child => child?.id !== id)]);
            message
              .error({
                key: 'delete-item',
                content: 'Error while deleting item',
                duration: 4,
              })
              .then(r => r);
          }, 1000);
        }
      })
      .catch(() => {
        setIndexLoading(index, false);
        message
          .success({
            key: 'delete-item',
            content: 'Error while deleting item',
            duration: 4,
          })
          .then(r => r);
      });
  }

  /**
   * @param {number} index
   * @param {boolean} value
   */
  const setIndexLoading = (index, value = true) => {
    setLoadings(prevLoadings => {
      prevLoadings[index] = value;
      return prevLoadings ?? [];
    });
  };

  /**
   * @type {[{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string, render((Date|number)): *|string|string},{visible: boolean, dataIndex: string, title: string, render((Date|number)): *|string|string},null]}
   */
  const columns = [
    {
      visible: true,
      title: 'ID',
      dataIndex: 'id',
    },
    {
      visible: true,
      title: 'Count',
      dataIndex: 'count',
    },
    {
      visible: true,
      title: 'Remaining',
      dataIndex: 'remainingCount',
    },
    {
      visible: true,
      title: 'Created At',
      dataIndex: 'timestamp',
      /**
       * @param {Date|number} _
       */
      render(_) {
        return moment.unix(_).isValid() ? moment.unix(_).format('DD MMMM YYYY HH:mm A') : '-';
      },
    },
    {
      visible: true,
      title: 'Expiration',
      dataIndex: 'expiration',

      /**
       * @param {number|Date} _
       * @param {number} timestamp
       * @return {string|string}
       */
      render(_, {timestamp}) {
        return moment.unix(timestamp).isValid() ? moment.unix(timestamp).add(_, 'seconds').format('DD MMMM YYYY HH:mm A') : '-';
      },
    },
    {
      visible: true,
      title: 'Action',
      dataIndex: 'id',
      /**
       * @param {Date|number} _
       * @param {any} val
       * @param {number} index
       */
      render(_, val, index) {
        return (
          <Button
            icon={<DeleteOutlined/>}
            ghost
            danger
            onClick={() => _onDelete(_, index)}
            loading={loadings[index] ?? val?.deletedAt ?? false}
          />
        );
      },
    },
  ];

  /**
   * @private
   */
  function _onRefresh() {
    setParams(prevState => ({...prevState}));
  }

  /**
   * @private
   */
  function _onOpenCreate() {
    setOpen(true);
  }

  /**
   * @private
   */
  function _onCancelCreate() {
    setOpen(false);
    form.resetFields();
  }

  function _onOkCreate() {
    form.validateFields()
      .then((values) => {
        const dto = {};
        Reflect.set(dto, 'expiration', moment.duration(values?.expiration, values?.expiration_uom).asSeconds());
        Reflect.set(dto, 'count', values?.count);
        setLoading(true);
        message.loading({
          key: 'create-token',
          content: 'Loading...',
          duration: 10,
        }).then(r => r);
        KeycloakInterceptor.post(`/admin/realms/${keycloak.realm}/clients-initial-access/`, dto)
          .then((response) => {

            if (response?.status === 200) {

              message.success({
                key: 'create-token',
                content: 'Successfully created',
                duration: 4,
              }).then(r => r);
              setOpen(false);
              form.resetFields();
              setToken(response?.data?.token);
            } else {
              message.error({
                key: 'create-token',
                content: 'Error while creating token',
                duration: 4,
              }).then(r => r);

            }

            setLoading(false);
            setParams((prevState) => ({...prevState}));
          })
          .catch((err) => {
            message.error({
              key: 'create-token',
              content: err?.message ?? 'Error while creating token',
              duration: 4,
            }).then(r => r);
            setLoading(false);
          });
      });
  }

  useEffect(() => {
    setLoading(true);
    KeycloakInterceptor.get(`/admin/realms/${keycloak.realm}/clients-initial-access`, {
      params,
    })
      .then(response => {
        setData(Array.isArray(response?.data) ? response?.data : []);
        setLoading(false);
      })
      .catch(err => {
        console.log({err});
        setData([]);
        setLoading(false);
      });
  }, [params]);

  return (
    <React.Fragment>
      <Card
        title="Access Token"
        extra={
          <React.Fragment>
            <Flex align="center" gap={10}>
              <Button
                loading={loading}
                ghost
                onClick={_onRefresh}
                type="primary"
                shape="round"
                icon={<ReloadOutlined/>}
              >
                Refresh
              </Button>
              <Button
                onClick={_onOpenCreate}
                type="primary"
                shape="round"
                icon={<PlusOutlined/>}
              >
                Create
              </Button>
            </Flex>
          </React.Fragment>
        }
      >
        <Table
          scroll={{
            x: 768,
          }}
          rowClassName={record => (record?.deletedAt ? '!bg-red-500 !bg-opacity-20' : '')}
          columns={columns.filter(item => item?.visible) ?? []}
          loading={loading}
          dataSource={data}
          pagination={{
            responsive: true,
            size: 'small',
            pageSizeOptions: [5, 10, 25, 50, 75, 100]
          }}
        />
      </Card>
      <Modal
        maskClosable={false}
        closable={false}
        open={token !== null}
        footer={[
          <Popconfirm title="Are you sure?" onConfirm={() => {
            setToken(null);
          }}>
            <Button>Close</Button>
          </Popconfirm>
        ]} destroyOnClose>
        <div className="!space-y-4">
          <Alert
           message="Initial access token details."
           description="Please copy and paste the initial access token before closing as it can not be retrieved later"
           type="warning"
           showIcon
         />
          <div className="!cursor-pointer">
            <CopyToClipboard text={token} onCopy={() => {
              message.success('Successfully copied!').then(r => r);
            }}>
              <div className="w-full truncate space-x-2 p-2 bg-slate-50 border border-slate-100 px-3 rounded-full">
                <CopyOutlined/>
                <span>{token}</span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </Modal>

      <Modal
        destroyOnClose
        title={
          <TheContainer fluid>
            Client | Create Access Token
          </TheContainer>
        }
        placement="bottom"
        open={open}
        closable={false}
        onOk={_onOkCreate}
        onCancel={_onCancelCreate}
      >
        <TheContainer fluid>
          <Form
            form={form}
            initialValues={{
              expiration_uom: 'days'
            }}
            layout="vertical"
          >
            <Row gutter={24} className="!mt-8">
              <Col xs={18}>
                <Form.Item
                  name="expiration"
                  label="Expiration"
                  rules={[{required: true}, {min: 1, type: 'number'}]}
                  extra="Sets the expiration for tokens. Expired tokens are periodically deleted from the database."
                >
                  <InputNumber controls={false} placeholder="Input your expiration number" className="!w-full" min={1}/>
                </Form.Item>
              </Col>
              <Col xs={6}>
                <Form.Item name="expiration_uom" label=" " initialValue="day">
                  <Select
                    options={[
                      {
                        key: 'seconds',
                        value: 'seconds',
                        label: 'Seconds'
                      },
                      {
                        key: 'minutes',
                        value: 'minutes',
                        label: 'Minutes'
                      },
                      {
                        key: 'hours',
                        value: 'hours',
                        label: 'Hours'
                      },
                      {
                        key: 'days',
                        value: 'days',
                        label: 'Days'
                      },
                    ]}/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  name="count"
                  label="Count"
                  rules={[{required: true}, {min: 1, type: 'number'}]}
                  extra="Specifies how many clients can be created using the token"
                >
                  <InputNumber className="!w-full" min={1}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </TheContainer>
      </Modal>
    </React.Fragment>
  );
}

export default InitialAccessTokenIndex;
