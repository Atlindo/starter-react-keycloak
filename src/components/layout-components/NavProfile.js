import React from 'react';
import { Dropdown, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
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
  DesktopOutlined,
} from '@ant-design/icons';
import Flex from 'components/shared-components/Flex';
import { signOut } from 'store/slices/authSlice';
import styled from '@emotion/styled';
import { FONT_WEIGHT, MEDIA_QUERIES, SPACER, FONT_SIZES } from 'constants/ThemeConstant';
import { useKeycloak } from '@react-keycloak/web';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { AUTH_ACC_TOKEN } from '../../constants/AuthConstant';

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
const MenuItemGeneral = props => {
  const { keycloak } = useKeycloak();
  function _onHandle() {
    keycloak.login({
      action: props?.action ?? null,
    });
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
  const items = [
    {
      key: 'Update Profile',
      label: <MenuItemGeneral icon={<UserOutlined />} action="UPDATE_PROFILE" label="Edit Profile" />,
    },
    {
      key: 'Change Password',
      label: <MenuItemGeneral icon={<LockOutlined />} action="UPDATE_PASSWORD" label="Change Password" />,
    },
    {
      key: '',
      label: (
        <MenuItemGeneral
          onClick={function () {}}
          icon={<DesktopOutlined />}
          action="delete_credential"
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

  return (
    <Dropdown
      placement="bottomRight"
      menu={{
        items: items ? [...items] : [],
      }}
      trigger={['click']}
    >
      <NavItem mode={mode}>
        <Profile>
          <Avatar src="/img/avatars/thumb-1.jpg" />
          <UserInfo className="profile-text">
            <Name>Charlie Howard</Name>
            <Title>Frontend Developer</Title>
          </UserInfo>
        </Profile>
      </NavItem>
    </Dropdown>
  );
};

export default NavProfile;
