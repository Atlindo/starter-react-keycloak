import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react';
import { Button, Card, Flex, message, Table } from 'antd';
import moment from 'moment/moment';
import { DeleteOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import KeycloakInterceptor from '../../../../../../auth/keycloak.interceptor';
import { APP_PREFIX_PATH } from '../../../../../../configs/AppConfig';

function InitialAccessTokenIndex() {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState([]);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    first: 0,
    max: 10,
  });

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
      .then(response => {
        console.log({ response });
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

  const setIndexLoading = (index, value = true) => {
    setLoadings(prevLoadings => {
      prevLoadings[index] = value;
      return prevLoadings ?? [];
    });
  };

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
       * @param {Date|number} _
       */
      render(_) {
        return moment.unix(_).isValid() ? moment.unix(_).format('DD MMMM YYYY HH:mm A') : '-';
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
            icon={<DeleteOutlined />}
            ghost
            danger
            onClick={() => _onDelete(_, index)}
            loading={loadings[index] ?? val?.deletedAt ?? false}
          />
        );
      },
    },
  ];

  function _onRefresh() {
    setParams(prevState => ({ ...prevState }));
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
        console.log({ err });
        setData([]);
        setLoading(false);
      });
  }, [params]);

  return (
    <>
      <Card
        title="Overview"
        extra={
          <>
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
                onClick={function () {
                  navigate(`${APP_PREFIX_PATH}/keycloak/clients/create`);
                }}
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
              >
                Create
              </Button>
            </Flex>
          </>
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
    </>
  );
}

export default InitialAccessTokenIndex;
