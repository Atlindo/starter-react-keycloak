import React, {memo} from 'react';
import {Routes as RouterRoutes, Route, Navigate} from 'react-router-dom';
import {APP_PREFIX_PATH, AUTHENTICATED_ENTRY} from 'configs/AppConfig';
import {protectedRoutes, publicRoutes} from 'configs/RoutesConfig';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AppRoute from './AppRoute';
const Routes = () => {
    return (
        <RouterRoutes>
            <Route path={APP_PREFIX_PATH} element={<ProtectedRoute/>}>
                {protectedRoutes.map((route, index) => {
                    return (
                        <Route
                            key={route.key + index}
                            path={route.path}
                            element={
                                <AppRoute
                                    routeKey={route.key}
                                    component={route.component}
                                    {...route.meta}
                                />
                            }
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={APP_PREFIX_PATH} replace/>}/>
            </Route>
            <Route path="/" element={<PublicRoute/>}>
                {publicRoutes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <AppRoute
                                    routeKey={route.key}
                                    component={route.component}
                                    {...route.meta}
                                />
                            }
                        />
                    )
                })}
            </Route>
        </RouterRoutes>
    )
}
export default memo(Routes)