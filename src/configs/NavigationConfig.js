import {
  ApartmentOutlined,
  ApiOutlined,
  AuditOutlined,
  ClusterOutlined,
  DashboardOutlined,
  DesktopOutlined,
  FileProtectOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  LockOutlined,
  OrderedListOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/`,
    title: 'sidenav.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'users',
    path: `${APP_PREFIX_PATH}/`,
    title: 'sidenav.dashboard.users',
    breadcrumb: true,
    isGroupTitle: true,
    roles: ['admin', 'super'],
    submenu: [
      {
        key: 'users.index',
        path: `${APP_PREFIX_PATH}/users`,
        title: 'sidenav.dashboard.users.default',
        icon: TeamOutlined,
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: 'users.roles.index',
        path: `${APP_PREFIX_PATH}/users/role`,
        title: 'sidenav.dashboard.users.roles',
        icon: TeamOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: 'users.group.index',
        path: `${APP_PREFIX_PATH}/users/group`,
        title: 'sidenav.dashboard.users.group',
        icon: TeamOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
    ],
  },
  {
    key: 'keycloak',
    path: `${APP_PREFIX_PATH}/keycloak`,
    title: 'sidenav.dashboard.keycloak',
    breadcrumb: false,
    isGroupTitle: true,
    roles: ['admin', 'super'],
    submenu: [
      {
        roles: ['admin'],
        key: 'keycloak.client',
        path: `${APP_PREFIX_PATH}/keycloak/clients`,
        title: 'sidenav.dashboard.keycloak.client',
        icon: ClusterOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'keycloak.realms',
        path: `${APP_PREFIX_PATH}/keycloak/realm`,
        title: 'sidenav.dashboard.keycloak.realm',
        icon: GlobalOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'keycloak.general',
        path: `${APP_PREFIX_PATH}/keycloak/general`,
        title: 'sidenav.dashboard.keycloak.general',
        icon: GlobalOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'keycloak.general.general-information',
            path: `${APP_PREFIX_PATH}/keycloak/general/general-information`,
            title: 'sidenav.dashboard.keycloak.general.general-information',
            icon: InfoCircleOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'keycloak.general.identify-provider',
            path: `${APP_PREFIX_PATH}/keycloak/general/identify-provider`,
            title: 'sidenav.dashboard.keycloak.general.identify-provider',
            icon: GlobalOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
  {
    key: 'settings',
    path: `${APP_PREFIX_PATH}/settings`,
    title: 'sidenav.dashboard.setting',
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'settings.index',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.dashboard.setting.index',
        icon: SettingOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: 'settings.account',
        path: `${APP_PREFIX_PATH}/settings/account`,
        title: 'sidenav.dashboard.setting.account',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'settings.account.change-password',
            path: `${APP_PREFIX_PATH}/settings/account`,
            title: 'sidenav.dashboard.setting.account.change-password',
            icon: LockOutlined,
            breadcrumb: false,
            isGroupTitle: false,
            submenu: [],
          },
          {
            key: 'settings.account.edit-profile',
            path: `${APP_PREFIX_PATH}/settings/account/edit-profile`,
            title: 'sidenav.dashboard.setting.account.edit-profile',
            icon: UserOutlined,
            breadcrumb: false,
            isGroupTitle: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'settings.devices',
        path: `${APP_PREFIX_PATH}/devices`,
        title: 'sidenav.dashboard.setting.devices',
        icon: DesktopOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
