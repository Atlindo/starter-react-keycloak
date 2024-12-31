import React, {useEffect, useState} from 'react';
import {Card, Table} from 'antd';
import {connect} from 'react-redux';
import GroupKeycloakService from '../../../../../../services/keycloak/group.keycloak.service';

export default connect(()=> {
  return {};
},{})(
  /**
   * @param {string} uuid
   * @param {any} props
   * @return {JSX.Element}
   */
    // eslint-disable-next-line func-names,no-unused-vars
  function({ uuid, ...props}){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    new GroupKeycloakService()
      .findChildren(uuid)
      .then((response)=> {
        setData(response ?? []);
        setLoading(false);
      })
      .catch((err)=> {
        setData([]);
        setLoading(false);
      });

  }, [uuid]);
  return (
    <React.Fragment>
      <Card>
        <Table
          loading={loading}
          columns={[
            {
              title: 'Group Name',
              dataIndex:'name'
            }
          ]}
          dataSource={data}
        />
      </Card>
    </React.Fragment>
  );
});
