import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Flex, Typography } from 'antd';
import { ApiOutlined, KeyOutlined } from '@ant-design/icons';
import PageHeaderAlt from '../../../../../components/layout-components/PageHeaderAlt';
import TheContainer from '../../../../../components/util-components/Container/TheContainer';
import { APP_PREFIX_PATH } from '../../../../../configs/AppConfig';
import TabsCustom from '../../../../../components/shared-components/Tabs/Tabs.custom';
import ClientIndex from './components/client.index';
import InitialAccessTokenIndex from './components/initial-access-token.index';
import ClientRegistrationIndex from './components/client-registration.index';

class Page extends React.Component {
  static Overview = ClientIndex;

  static InitialAccessToken = InitialAccessTokenIndex;

  static ClientRegistration = ClientRegistrationIndex;

  render() {
    return (
      <>
        <PageHeaderAlt>
          <TheContainer>
            <div className="py-4">
              <Breadcrumb className="mb-4">
                <Breadcrumb.Item href={`${APP_PREFIX_PATH}`}>App</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <KeyOutlined /> <span>Keycloak</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <ApiOutlined /> <span>Clients</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Flex justify="space-between" align="start">
                <Typography.Title level={1}>Clients</Typography.Title>
              </Flex>
            </div>
          </TheContainer>
        </PageHeaderAlt>
        <div className="!-mt-[45px]">
          <TheContainer>
            <TabsCustom
              defaultTab="overview"
              paramsKey="tab"
              mode="top"
              onListen={function () {}}
              items={[
                {
                  key: 'overview',
                  title: 'Overview',
                  render: () => <Page.Overview />,
                },
                {
                  key: 'initial_access_token',
                  title: 'Initial Access Token',
                  render: () => <Page.InitialAccessToken />,
                },
                {
                  key: 'client_registration',
                  title: 'Client Registration',
                  render: () => <Page.ClientRegistration />,
                },
              ]}
            />
          </TheContainer>
        </div>
      </>
    );
  }
}

export default connect(() => {
  return {};
})(Page);
