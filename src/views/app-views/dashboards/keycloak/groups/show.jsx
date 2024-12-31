import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Breadcrumb, Button, Card, Empty, Flex, Table, Typography} from 'antd';
import {ApiOutlined, ArrowLeftOutlined, KeyOutlined} from '@ant-design/icons';
import {useNavigate, useParams} from 'react-router-dom';
import PageHeaderAlt from '../../../../../components/layout-components/PageHeaderAlt';
import TheContainer from '../../../../../components/util-components/Container/TheContainer';
import {APP_PREFIX_PATH} from '../../../../../configs/AppConfig';
import GroupKeycloakService from '../../../../../services/keycloak/group.keycloak.service';
import TabsCustom from '../../../../../components/shared-components/Tabs/Tabs.custom';
import Loading from '../../../../../components/shared-components/Loading';
import ChildGroupsGroup from './components/child-groups.group';
import MemberGroup from './components/member.group';
import AttributeGroup from './components/attribute.group';

export default connect(()=> {
  return {};
// eslint-disable-next-line func-names
},{})(function(){
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    new GroupKeycloakService()
      .find(uuid)
      .then((response)=> {
        setData(response ?? []);
        setLoading(false);
      })
      .catch(()=> {
        setData(null);
        setLoading(false);
      });
  },[uuid]);
  
  return (
    <React.Fragment>
      <PageHeaderAlt>
        <TheContainer>
          <div className="py-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href={`${APP_PREFIX_PATH}`}>App</Breadcrumb.Item>
              <Breadcrumb.Item>
                <KeyOutlined/> <span>Keycloak</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Groups</Breadcrumb.Item>
              <Breadcrumb.Item>Group Detail</Breadcrumb.Item>
            </Breadcrumb>
            <Flex justify="space-between" align="start">
              <Typography.Title level={1}>{data?.name ?? 'Not Found'}</Typography.Title>
              <Flex>
                <Button
                  type="primary"
                  ghost
                  icon={<ArrowLeftOutlined />}
                  onClick={()=> navigate(`${APP_PREFIX_PATH}/keycloak/groups`, { replace: true })}
                >Back</Button>
              </Flex>
            </Flex>
          </div>
        </TheContainer>
      </PageHeaderAlt>
      <div className="!-mt-[45px]">
        <TheContainer>
          {
            loading ? <Loading cover="content"/> :
            data ? (
              <TabsCustom
                defaultTab="child-groups"
                paramsKey="tab"
                mode="top"
                onListen={function () {
                }}
                items={[
                  {
                    key: 'child-groups',
                    title: 'Child Groups',
                    render: () => <ChildGroupsGroup uuid={uuid}/>,
                  },
                  {
                    key: 'members',
                    title: 'Members',
                    render: () => <MemberGroup uuid={uuid}/>,
                  },
                  {
                    key: 'attributes',
                    title: 'Attributes',
                    render: () => <AttributeGroup uuid={uuid} attributes={data?.attributes ?? {}}/>,
                  },
                ]}
              />
            ): <Empty />
          }
        </TheContainer>
      </div>
    </React.Fragment>
  );
});
