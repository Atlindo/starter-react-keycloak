import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Flex, Menu, Table } from 'antd';
import { EditOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import EllipsisDropdown from '../../../../../../components/shared-components/EllipsisDropdown';
import { APP_PREFIX_PATH } from '../../../../../../configs/AppConfig';
import KeycloakInterceptor from '../../../../../../auth/keycloak.interceptor';

function ClientIndex() {
  const navigate = useNavigate();
  const { keycloak, initialized } = useKeycloak();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    first: 0,
    max: 10,
  });

  const columns = [
    {
      visible: false,
      title: 'ID',
      dataIndex: 'id',
      width: '70px',
    },
    {
      fixed: 'left',
      width: '180px',
      visible: true,
      title: 'Client ID',
      dataIndex: 'clientId',
    },
    {
      width: '200px',
      visible: true,
      title: 'Name',
      dataIndex: 'name',
      /**
       * @param {string} _
       * @return {string}
       */
      render(_) {
        return _ ? _.replace(/\$\{|}/g, '') : '-';
      },
    },
    {
      width: '160px',
      visible: true,
      title: 'Type',
      dataIndex: 'protocol',
      /**
       * @param {string} _
       * @return {string}
       */
      render(_) {
        return _ === 'openid-connect' ? 'OpenID Connect' : _;
      },
    },
    {
      width: '200px',
      visible: true,
      title: 'Description',
      dataIndex: 'description',
      /**
       * @param {string} _
       * @return {string}
       */
      render(_) {
        return _ ?? '-';
      },
    },
    {
      width: '300px',
      visible: true,
      title: 'Home URL',
      dataIndex: 'baseUrl',
      /**
       * @param {string} item
       * @return {JSX.Element}
       */
      render(item) {
        return (
          <a
            target="_blank"
            href={
              item?.startsWith('/realms') || item?.startsWith('/admin')
                ? [keycloak.authServerUrl.slice(0, keycloak.authServerUrl.length - 1), item].join('')
                : item
            }
            rel="noreferrer"
          >
            {item?.startsWith('/realms') || item?.startsWith('/admin')
              ? [keycloak.authServerUrl.slice(0, keycloak.authServerUrl.length - 1), item].join('')
              : item}
          </a>
        );
      },
    },
    {
      width: '100px',
      visible: true,
      title: 'Enabled',
      dataIndex: 'enabled',
      /**
       *
       * @param {boolean} _
       * @return {JSX.Element}
       */
      render(_) {
        return <Checkbox defaultChecked={_} checked={_} />;
      },
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
                <Menu.Item
                  onClick={() => {
                    navigate(`${APP_PREFIX_PATH}/keycloak/clients/${_?.id}/setting`);
                  }}
                  icon={<EditOutlined />}
                >
                  Setting
                </Menu.Item>
              </Menu>
            }
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
    KeycloakInterceptor.get(`/admin/realms/${keycloak.realm}/clients`, {
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
          columns={columns.filter(item => item?.visible) ?? []}
          loading={loading}
          dataSource={data}
        />
      </Card>
    </>
  );
}

export default ClientIndex;
