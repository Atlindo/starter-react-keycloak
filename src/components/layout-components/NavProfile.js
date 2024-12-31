import React from 'react';
import { Dropdown, Avatar } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  LockOutlined,
  DeleteOutlined,
  ProfileOutlined,
  UserOutlined,
  DesktopOutlined, DashboardOutlined, HomeOutlined,
} from '@ant-design/icons';
import Flex from 'components/shared-components/Flex';
import { signOut } from 'store/slices/authSlice';
import styled from '@emotion/styled';
import { FONT_WEIGHT, MEDIA_QUERIES, SPACER, FONT_SIZES } from 'constants/ThemeConstant';
import { useKeycloak } from '@react-keycloak/web';
import {useLocation, useNavigate} from 'react-router-dom';
import NavItem from './NavItem';
import { AUTH_ACC_TOKEN } from '../../constants/AuthConstant';
import {APP_PREFIX_PATH} from '../../configs/AppConfig';

const Icon = styled.div(() => ({
  fontSize: FONT_SIZES.LG,
}));

const Profile = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const UserInfo = styled('div')`
  padding-left: ${SPACER[2]};

  @media ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

const Name = styled.div(() => ({
  fontWeight: FONT_WEIGHT.SEMIBOLD,
}));

const Title = styled.span(() => ({
  opacity: 0.8,
}));

const MenuItemSignOut = props => {
  const { keycloak } = useKeycloak();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log([window.location.origin, location.pathname].join(''), 'window.location.origin');
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
    <div onClick={handleSignOut}>
      <Flex alignItems="center" gap={SPACER[2]}>
        <Icon>
          <LogoutOutlined />
        </Icon>
        <span>{props.label}</span>
      </Flex>
    </div>
  );
};
/**
 * @param {object} props
 * @param {()=> void} props.onClick
 * @param {string} props.action
 * @return {JSX.Element}
 * @constructor
 */
const MenuItemGeneral = props => {
  const { keycloak } = useKeycloak();
  function _onHandle() {
    // eslint-disable-next-line no-prototype-builtins
    if(props.hasOwnProperty('onClick')){
      props.onClick();
    }else{
      keycloak.login({
        action: props?.action ?? null,
      });
    }
  }

  return (
    <div onClick={_onHandle}>
      <Flex alignItems="center" gap={SPACER[2]}>
        <Icon>{props?.icon}</Icon>
        <span>{props.label}</span>
      </Flex>
    </div>
  );
};

export const NavProfile = ({ mode }) => {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(({ auth })=> auth?.user);
  const items = [
    {
      key: 'home',
      label: <MenuItemGeneral
        onClick={()=> navigate('/')}
        icon={<HomeOutlined />} action={null} label="Home" />,
    },
    {
      key: 'home-divider',
      type: 'divider',
    },
    {
      key: 'dashboard',
      label: <MenuItemGeneral
        onClick={()=> navigate(APP_PREFIX_PATH)}
        icon={<DashboardOutlined />} action={null} label="Dashboard" />,
    },
    {
      key: 'dashboard-divider',
      type: 'divider',
    },
    {
      key: 'update-profile',
      label: <MenuItemGeneral icon={<UserOutlined />} action="UPDATE_PROFILE" label="Edit Profile" />,
    },
    {
      key: 'change-password',
      label: <MenuItemGeneral icon={<LockOutlined />} action="UPDATE_PASSWORD" label="Change Password" />,
    },
    {
      key: 'devices',
      label: (
        <MenuItemGeneral
          // eslint-disable-next-line func-names
          onClick={function () {
            navigate(`${APP_PREFIX_PATH}/devices`);
          }}
          icon={<DesktopOutlined />}
          action={null}
          label="Device"
        />
      ),
    },
    {
      type: 'divider',
    },
    {
      danger: true,
      key: 'Sign Out',
      label: <MenuItemSignOut label="Sign Out" />,
    },
  ];

  return initialized && keycloak?.authenticated && (
    <Dropdown
      placement="bottomRight"
      menu={{
        items: items ?
          !location.pathname.startsWith(APP_PREFIX_PATH) ?
            items
              .filter(c => c?.key !== 'home' && c.key !== 'home-divider')
            :
            items
              .filter(c => c?.key !== 'dashboard' && c.key !== 'dashboard-divider')
          : [],
      }}
      trigger={['click']}
    >
      <NavItem mode={mode}>
        <Profile>
          <Avatar src="/img/avatars/thumb-1.jpg" />
          <UserInfo className="profile-text">
            <Name>{user?.name}</Name>
            <Title>{user?.email}</Title>
          </UserInfo>
        </Profile>
      </NavItem>
    </Dropdown>
  );
};

export default NavProfile;
