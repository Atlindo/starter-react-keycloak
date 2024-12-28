import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'home',
        path: `/`,
        component: React.lazy(() => import('views/app-views/index')),
    },
    // {
    //     key: 'login',
    //     path: `${AUTH_PREFIX_PATH}/login`,
    //     component: React.lazy(() => import('views/auth-views/authentication/login')),
    // },
    // {
    //     key: 'register',
    //     path: `${AUTH_PREFIX_PATH}/register`,
    //     component: React.lazy(() => import('views/auth-views/authentication/register')),
    // },
    // {
    //     key: 'forgot-password',
    //     path: `${AUTH_PREFIX_PATH}/forgot-password`,
    //     component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    // }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'users.default',
        path: `${APP_PREFIX_PATH}/users`,
        component: React.lazy(() => import('views/app-views/dashboards/user-mgmt/users/index')),
    },
    {
        key: 'users.show',
        path: `${APP_PREFIX_PATH}/users/:uuid`,
        component: React.lazy(() => import('views/app-views/dashboards/user-mgmt/users/show')),
    },
    {
        key: 'users.amend.access',
        path: `${APP_PREFIX_PATH}/users/:uuid/amend/access`,
        component: React.lazy(() => import('views/app-views/dashboards/user-mgmt/users/access.amend')),
    },
    {
        key: 'keycloak.clients.index',
        path: `${APP_PREFIX_PATH}/keycloak/clients`,
        component: React.lazy(() => import('views/app-views/dashboards/keycloak/clients/index')),
    },
    {
        key: 'keycloak.clients.setting',
        path: `${APP_PREFIX_PATH}/keycloak/clients/:uuid/setting`,
        component: React.lazy(() => import('views/app-views/dashboards/keycloak/clients/setting')),
    },
    {
        key: 'keycloak.clients.create',
        path: `${APP_PREFIX_PATH}/keycloak/clients/create`,
        component: React.lazy(() => import('views/app-views/dashboards/keycloak/clients/create')),
    },

    {
        key: 'keycloak.clients.index',
        path: `${APP_PREFIX_PATH}/keycloak/clients/scope`,
        component: React.lazy(() => import('views/app-views/dashboards/keycloak/clients/scope/index')),
    },
    {
        key: 'dashboard.account.device',
        path: `${APP_PREFIX_PATH}/devices`,
        component: React.lazy(() => import('views/app-views/dashboards/account/device')),
    },
]