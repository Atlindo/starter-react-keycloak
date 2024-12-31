import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Flex, Table} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import GroupKeycloakService from '../../../../../../services/keycloak/group.keycloak.service';

export default connect(()=> {
  return {};
},{})(
  /**
   * @param {string} uuid
   * @param {object} props
   * @return {JSX.Element}
   */
  // eslint-disable-next-line func-names,no-unused-vars
  function({ uuid, ...props}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
      briefRepresentation: true,
      first: 0,
      max: 10,
    });

    useEffect(() => {
      setLoading(true);
      new GroupKeycloakService()
        .getMember(uuid, params)
        .then((response) => {
          setData(response ?? []);
          setLoading(false);
        })
        .catch(()=>{
          setData([]);
          setLoading(false);
        });
    },[uuid]);

    return (
      <React.Fragment>
        <Card
          title="Members"
          extra={
            <React.Fragment>
              <Flex align="center">
                <Button icon={<PlusOutlined />} type="primary">Create</Button>
              </Flex>
            </React.Fragment>
          }
        >
          <Table
            loading={loading}
            columns={[
              {
                title:'Name',
                dataIndex:'username'
              },
              {
                title:'Email',
                dataIndex:'email'
              },
              {
                title:'First Name',
                dataIndex:'firstName'
              },
              {
                title:'Last Name',
                dataIndex:'lastName'
              },
            ]}
            dataSource={data}
          />
        </Card>
      </React.Fragment>
    );
  }
);
