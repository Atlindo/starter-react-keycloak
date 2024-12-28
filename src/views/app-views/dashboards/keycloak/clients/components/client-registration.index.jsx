import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react';
import {Button, Card, Drawer, Flex, message, Table} from 'antd';
import moment from 'moment/moment';
import {DeleteOutlined, EditOutlined, PlusOutlined, ReloadOutlined} from '@ant-design/icons';
import KeycloakInterceptor from '../../../../../../auth/keycloak.interceptor';
import { APP_PREFIX_PATH } from '../../../../../../configs/AppConfig';

function ClientRegistrationIndex() {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState([]);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    first: 0,
    max: 10,
    type: 'org.keycloak.services.clientregistration.policy.ClientRegistrationPolicy'
  });

  /**
   * @type {[{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string},{visible: boolean, dataIndex: string, title: string, render((Date|number)): *|string|string},{visible: boolean, dataIndex: string, title: string, render((Date|number)): *|string|string},null]}
   */
  const columns = [
    {
      visible: false,
      title: 'ID',
      dataIndex: 'id',
    },
    {
      visible: true,
      title: 'Name',
      dataIndex: 'name',
    },
    {
      visible: true,
      title: 'Provider ID',
      dataIndex: 'providerId',
    },
    {
      visible: true,
      width: '140px',
      dataIndex: 'id',
      /**
       * @param {Date|number} _
       * @param {any} val
       * @param {number} index
       */
      render(_, val, index) {
        return (
          <Flex align="center" gap={10}>
            <Button
              icon={<EditOutlined />}
              shape="circle"
              size="small"
              loading={loadings[index] ?? val?.deletedAt ?? false}
            />
            <Button
              icon={<DeleteOutlined />}
              ghost
              danger
              shape="circle"
              size="small"
              onClick={() => _onDelete(_, index)}
              loading={loadings[index] ?? val?.deletedAt ?? false}
            />
          </Flex>
        );
      },
    },
  ];

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
    KeycloakInterceptor.delete(`/admin/realms/${keycloak.realm}/components/${id}`)
      .then(response => {
        setIndexLoading(index, false);
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
              duration: 10,
            })
            .then(r => r);
        }, 1000);
      })
      .catch(err => {
        setIndexLoading(index, false);
        message
          .success({
            key: 'delete-item',
            content: 'Error while deleting item',
            duration: 10,
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
   * @private
   */
  function _onRefresh() {
    setParams(prevState => ({ ...prevState }));
  }

  function _onOpenCreate(){
    setVisible(true);
  }

  useEffect(() => {
    setLoading(true);
    KeycloakInterceptor.get(`/admin/realms/${keycloak.realm}/components`, {
      params,
    })
      .then(response => {
        setData(Array.isArray(response?.data) ? response?.data.filter((child)=> child?.subType === 'anonymous') : []);
        setLoading(false);
      })
      .catch(err => {
        setData([]);
        setLoading(false);
      });
  }, [params]);

  return (
    <React.Fragment>
      <Card
        title="Overview"
        extra={
          <React.Fragment>
            <Flex align="center" gap={10}>
              <Button
                loading={loading}
                ghost
                onClick={_onRefresh}
                type="primary"
                shape="round"
                icon={<ReloadOutlined />}
              >
                Refresh
              </Button>
              <Button
                onClick={_onOpenCreate}
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
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
        />
      </Card>

      <Drawer title="Create Client Registration">
        <p>testing</p>
      </Drawer>
    </React.Fragment>
  );
}

export default ClientRegistrationIndex;
