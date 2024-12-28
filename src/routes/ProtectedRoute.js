import React, {useEffect, useState} from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { 
	AUTH_PREFIX_PATH, 
	UNAUTHENTICATED_ENTRY, 
	REDIRECT_URL_KEY 
} from 'configs/AppConfig'
import {useKeycloak} from "@react-keycloak/web";
import {Button, Flex} from "antd";
import UserService from "../services/user.service";
import Loading from "../components/shared-components/Loading";

const ProtectedRoute = () => {
	const location = useLocation()

	const {keycloak, initialized} = useKeycloak();
	if(!initialized){
		return <Loading cover={'page'} />
	}

	if (!keycloak?.authenticated) {
		return <Navigate to={`/?${REDIRECT_URL_KEY}=${location.pathname}`} replace />;
	}


	return <Outlet />
}
export default ProtectedRoute