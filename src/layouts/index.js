import React, { lazy, Suspense, memo, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { ConfigProvider, message, notification } from 'antd';
import Loading from 'components/shared-components/Loading';
import { lightTheme, darkTheme } from 'configs/ThemeConfig';
import { resources } from 'lang';
import useBodyClass from 'utils/hooks/useBodyClass';
import Routes from 'routes';
import { useKeycloak } from '@react-keycloak/web';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { _userLoad } from '../store/actions/auth.action';
import { AUTH_ACC_TOKEN } from '../constants/AuthConstant';
import ServerInterceptor from '../auth/server.interceptor';
import KeycloakInterceptor from '../auth/keycloak.interceptor';

moment().locale();
const AppLayout = lazy(() => import('./AppLayout'));
const LayoutDefault = lazy(() => import('./LayoutDefault'));

const Layouts = ({ _userLoad }) => {
  const { keycloak, initialized } = useKeycloak();
  const location = useLocation();

  const locale = useSelector(state => state.theme.locale);

  const direction = useSelector(state => state.theme.direction);

  const currentTheme = useSelector(state => state.theme.currentTheme);

  const currentAppLocale = resources[locale];

  useBodyClass(`dir-${direction}`);

  const themeConfig = currentTheme === 'light' ? { ...lightTheme } : { ...darkTheme };

  useEffect(() => {
    if (initialized) {
      if (keycloak?.authenticated) {
        localStorage.setItem(AUTH_ACC_TOKEN, keycloak.token);
        ServerInterceptor.interceptors.request.use(
          config => {
            if (keycloak.token) {
              // //if using headers
              config.headers.Authorization = `Bearer ${keycloak?.token}` || null;
            } else {
              message
                .error({
                  key: 'interceptors',
                  content: 'unAuthorized',
                })
                .then(r => r);
            }

            // config.headers['Content-Type'] = 'application/json';
            config.params = {
              realm: keycloak?.realm,
              clientId: keycloak?.clientId,
              ...config.params,
            };
            config.withCredentials = config?.withCredentials ?? true;
            return config;
          },
          error => {
            notification.error({
              message: 'Error',
            });
            return Promise.reject(error).then(r => r);
          }
        );
      } else {
        localStorage.removeItem(AUTH_ACC_TOKEN);
      }
    }
  }, [initialized, keycloak]);

  useEffect(() => {
    if (initialized) {
      KeycloakInterceptor.interceptors.request.use(
        config => {
          config.baseURL = keycloak.authServerUrl;
          if (initialized && keycloak?.authenticated && keycloak.token) {
            // //if using headers
            config.headers.Authorization = `Bearer ${keycloak?.token}` || null;
          } else {
            message
              .error({
                key: 'interceptors',
                content: 'unAuthorized',
              })
              .then(r => r);
          }
          return config;
        },
        error => {
          notification.error({
            message: 'Error',
          });
          return Promise.reject(error).then(r => r);
        }
      );
      _userLoad();
    }
  }, [initialized, keycloak]);
  return (
    <ConfigProvider
      theme={{
        ...themeConfig,
        cssVar: true,
      }}
      direction={direction}
      locale={currentAppLocale.antd}
    >
      <Suspense fallback={<Loading cover="content" />}>
        {!initialized ? (
          <Loading cover="page" />
        ) : keycloak?.authenticated && location.pathname.startsWith('/app') ? (
          <AppLayout>
            <Routes />
          </AppLayout>
        ) : (
          <LayoutDefault>
            <Routes />
          </LayoutDefault>
        )}
      </Suspense>
    </ConfigProvider>
  );
};

export default connect(
  () => {
    return {};
  },
  { _userLoad }
)(memo(Layouts));
