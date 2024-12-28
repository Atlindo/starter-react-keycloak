import React, { memo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Flex, Layout, Tooltip, Typography } from 'antd';
import { useKeycloak } from '@react-keycloak/web';
import { LogoutOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import TheContainer from '../../components/util-components/Container/TheContainer';
import { signOut } from '../../store/slices/authSlice';
import { AUTH_ACC_TOKEN } from '../../constants/AuthConstant';
import NavProfile from '../../components/layout-components/NavProfile';

const Page = () => {
  const { keycloak, initialized } = useKeycloak();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    keycloak
      .logout({
        logoutMethod: 'GET',
        redirectUri: [window.location.origin, location.pathname].join(''),
      })
      .then(response => {
        localStorage.removeItem(AUTH_ACC_TOKEN);
        console.log({ response });
      })
      .catch(err => {
        console.log({ err });
      });
  };
  return (
    <>
      <Layout>
        <Layout.Header className="border-b fixed top-0 !w-full">
          <TheContainer className="!h-full" fluid>
            <Flex align="center" className="!h-full" justify="space-between">
              <Typography.Title level={1} className="!text-3xl !m-0">
                YUYUID
              </Typography.Title>
              {initialized ? (
                <Flex align="center" gap={10}>
                  {keycloak?.authenticated ? (
                    <NavProfile mode="dark" />
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          keycloak.login({
                            action: 'login_require',
                          });
                        }}
                        type="primary"
                        shape="round"
                      >
                        Sign in
                      </Button>
                    </>
                  )}
                </Flex>
              ) : null}
            </Flex>
          </TheContainer>
        </Layout.Header>
        <Layout className="!-full">
          <Layout.Content className="!min-h-screen !pt-[80px]">
            <TheContainer fluid>haha</TheContainer>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default connect(() => {
  return {};
}, {})(memo(Page));
