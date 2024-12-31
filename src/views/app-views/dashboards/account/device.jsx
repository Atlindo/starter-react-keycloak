import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';
import { Button, Descriptions, Divider, Empty, Flex, Tag, Typography } from 'antd';
import { DesktopOutlined, FieldTimeOutlined, GlobalOutlined } from '@ant-design/icons';
import moment from 'moment';
import KeycloakInterceptor from '../../../../auth/keycloak.interceptor';
import PageHeaderAlt from '../../../../components/layout-components/PageHeaderAlt';
import TheContainer from '../../../../components/util-components/Container/TheContainer';
import Loading from '../../../../components/shared-components/Loading';
import AccountKeycloakService from '../../../../services/keycloak/account.keycloak.service';

const Page = () => {
  const { keycloak, initialized } = useKeycloak();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (keycloak?.authenticated && initialized) {
      setLoading(true);
      new AccountKeycloakService()
        .getSessionDevice({})
        .then((response)=> {
          setData(response ?? []);
          setLoading(false);
        })
        .catch(()=> {
          setLoading(false);
          setData([]);
        });
    }
  }, [initialized, keycloak]);
  return (
    <>
      <PageHeaderAlt>
        <TheContainer fluid>
          <div className="py-4">
            <Typography.Title level={1} className="!m-0">
              Devices
            </Typography.Title>
          </div>
        </TheContainer>
      </PageHeaderAlt>
      <TheContainer fluid className="my-4">
        {loading ? (
          <Loading />
        ) : Array.isArray(data) && data.length > 0 ? (
          <div className="!space-y-6">
            {data.map(child => {
              return (
                <div
                  key={`${child?.os}-device`}
                  className={[
                    'w-full bg-white rounded-xl p-4',
                    child?.current ? '!border !border-[--ant-color-primary]' : '!border',
                  ].join(' ')}
                >
                  <div className="!flex items-center justify-between !gap-4">
                    <Flex align="center" gap={10}>
                      <DesktopOutlined className="!text-2xl" />
                      <Typography.Title level={3} className="!m-0">
                        {child?.os}
                      </Typography.Title>
                      {child?.current && <Tag color="cyan">Current</Tag>}
                    </Flex>
                    <Flex align="center" gap={10}>
                      {moment(child?.lastAccess).isValid() && (
                        <Flex align="center" gap={5}>
                          <FieldTimeOutlined />
                          <Typography>{moment.unix(child?.lastAccess).format('DD MMMM YYYY HH:mm A')}</Typography>
                        </Flex>
                      )}

                      <Tag>{child?.osVersion}</Tag>
                    </Flex>
                  </div>
                  <Divider />
                  <div>
                    {Array.isArray(child?.sessions) && child?.sessions.length > 0 ? (
                      <div className="!space-y-4">
                        {child?.sessions.map(item => {
                          return (
                            <div key={`session-${item?.id}`} className="p-4 !border rounded-xl space-y-4">
                              <Flex align="center" justify="space-between">
                                <Flex gap={10} align="center">
                                  <GlobalOutlined className="!text-2xl" />
                                  <Typography.Title level={4} className="!m-0">
                                    {item?.browser}
                                  </Typography.Title>
                                </Flex>
                                <Button type="primary">Sign Out</Button>
                              </Flex>
                              <Descriptions>
                                <Descriptions.Item label="IP Address" span={1}>
                                  {item?.ipAddress}
                                </Descriptions.Item>
                                <Descriptions.Item label="Started" span={1}>
                                  <Flex gap={5} align="center">
                                    <FieldTimeOutlined />
                                    <span>
                                      {moment(item?.started).isValid()
                                        ? moment.unix(item?.started).format('DD MMM YYYY | HH:mm A')
                                        : '-'}
                                    </span>
                                  </Flex>
                                </Descriptions.Item>
                                <Descriptions.Item label="Last Access" span={1}>
                                  <Flex gap={5} align="center">
                                    <FieldTimeOutlined />
                                    <span>
                                      {moment(item?.lastAccess).isValid()
                                        ? moment.unix(item?.lastAccess).format('DD MMM YYYY | HH:mm A')
                                        : '-'}
                                    </span>
                                  </Flex>
                                </Descriptions.Item>

                                <Descriptions.Item label="Expires" span={1}>
                                  <Flex gap={5} align="center">
                                    <FieldTimeOutlined />
                                    <span>
                                      {moment(item?.expires).isValid()
                                        ? moment.unix(item?.expires).format('DD MMM YYYY | HH:mm A')
                                        : '-'}
                                    </span>
                                  </Flex>
                                </Descriptions.Item>

                                {Array.isArray(item?.clients) && (
                                  <Descriptions.Item label="Clients" span={4}>
                                    {item?.clients.length > 0
                                      ? item?.clients.map(child => child?.clientName).join(' | ')
                                      : '-'}
                                  </Descriptions.Item>
                                )}
                              </Descriptions>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <Empty />
                    )}
                    <div />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Empty />
        )}
      </TheContainer>
    </>
  );
};

export default connect(state => {
  return {};
})(memo(Page));
