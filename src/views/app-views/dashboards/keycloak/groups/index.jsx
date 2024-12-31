import React, {useEffect, useState} from 'react';
import {
  Button,
  Card,
  Table,
  Flex,
  Form,
  Menu,
  Row,
  Col,
  Divider, Modal, message,
} from 'antd';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import moment from 'moment';
import {Link} from 'react-router-dom';
import EllipsisDropdown from '../../../../../components/shared-components/EllipsisDropdown';
import GroupKeycloakService from '../../../../../services/keycloak/group.keycloak.service';
import {APP_PREFIX_PATH} from '../../../../../configs/AppConfig';
import KeycloakGroupForm from '../../../../../components/shared-components/Form/Keycloak/group.form';
import {FORM_CONSTANT} from '../../../../../constants';
import KeycloakMoveToGroupForm from '../../../../../components/shared-components/Form/Keycloak/move-to.group.form';

export const Page = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [loadings, setLoadings] = useState([]);

  const [type, setType] = useState(null);
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState(FORM_CONSTANT.READONLY);
  const [initialValues, setInitialValues] = useState({
    name: null
  });

  /**
   * @type {[{visible: boolean, dataIndex: string, width: string, title: string, render(string): *, key: string},{visible: boolean, dataIndex: string, width: string, title: string, key: string},{visible: boolean, dataIndex: string, width: string, title: string, render(*): *, key: string},{visible: boolean, dataIndex: string, width: string, title: string, key: string},{visible: boolean, dataIndex: string, width: string, title: string, render: (function(*, *, *): *)}]}
   */
  const columns = [
    {
      visible: true,
      width: 'calc((100%/5)-100px)',
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      /**
       * @param {string} _
       * @param {object} record
       */
      render(_, record){
        return <Link to={[APP_PREFIX_PATH,'keycloak','groups',record?.id].join('/')} className="text-[--ant-color-primary]">{_}</Link>;
      }
    },
    {
      visible: true,
      width: 'calc((100%/5)-100px)',
      key: 'path',
      title: 'Path',
      dataIndex: 'path',
    },
    {
      visible: true,
      width: 'calc((100%/5)-100px)',
      key: 'subGroups',
      title: 'Sub Group',
      dataIndex: 'subGroups',
      render(_) {
        return Array.isArray(_) && _.length > 0 ? _.length : _;
      }
    },
    {
      visible: true,
      width: 'calc((100%/5)-100px)',
      key: 'subGroupCount',
      title: 'Sub Group Count',
      dataIndex: 'subGroupCount',
    },
    {
      visible: true,
      dataIndex: 'id',
      width: '140px',
      title: 'Action',
      render: (_, val, index) => {
        return (
          <Flex gap={10} align="center">
            <Button
              loading={loadings[index] ?? val?.deletedAt ?? false}
              size="small"
              danger
              shape="circle"
              ghost
              onClick={() => {
                _onDelete(_, index);
              }}
              icon={<DeleteOutlined />}
            />
            <EllipsisDropdown
              placement="left"
              menu={
                <Menu>
                  <Menu.Item
                    icon={<EditOutlined/>}
                    disabled={Array.isArray(loadings) && loadings.length > 0 && loadings.some(item => item === true)}
                    onClick={()=> _onOpen(val, FORM_CONSTANT.UPDATE, FORM_CONSTANT.UPDATE)}
                  >
                    Rename
                  </Menu.Item>
                  <Menu.Item
                    icon={<EditOutlined/>}
                    disabled={Array.isArray(loadings) && loadings.length > 0 && loadings.some(item => item === true)}
                    onClick={()=> _onOpen(val, FORM_CONSTANT.UPDATE, 'MOVE_TO')}
                  >
                    Move to
                  </Menu.Item>
                  <Divider className="m-0"/>
                  <Menu.Item
                    disabled={Array.isArray(loadings) && loadings.length > 0 && loadings.some(item => item === true)}
                    onClick={() => {
                      _onDelete(_, index);
                    }}
                    icon={<DeleteOutlined/>}
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              }
            />
          </Flex>
        );
      },
    },
  ];

  /**
   * @param {number} index
   * @param {boolean} value
   */
  const setIndexLoading = (index, value = true) => {
    setLoadings(prevLoadings => {
      prevLoadings[index] = value;
      return prevLoadings ?? [];
    });
  };

  /**
   * @param {string} id
   * @param {number} index
   * @private
   */
  function _onDelete(id, index) {
    setIndexLoading(index, true);
    message.loading({
      key: 'delete-item',
      content: 'Loading deleted item',
      duration: 10,
    })
      .then(r => r);

    new GroupKeycloakService()
      .delete(id)
      .then(() => {
        setData(prevState => [
          ...prevState.map(child => ({
            ...child,
            deletedAt: id === child?.id ? moment() : null,
          })),
        ]);
        setTimeout(() => {
          setIndexLoading(index, false);
          setData(prevState => [...prevState.filter(child => child?.id !== id)]);
          message
            .success({
              key: 'delete-item',
              content: 'Successfully deleted item',
              duration: 4,
            })
            .then(r => r);
        }, 1000);
      })
      .catch((err) => {
        setIndexLoading(index, false);
        message
          .success({
            key: 'delete-item',
            content: err?.message ?? err?.errorMessage ?? 'Error while deleting item',
            duration: 4,
          })
          .then(r => r);
      });
  }

  /**
   * @param {object|null} val
   * @param {string} mode
   * @param {string|null} type
   * @private
   */
  function _onOpen(val, mode = FORM_CONSTANT.UPDATE, type = null) {
    setType(type);
    setSelected(val);
    setMode(mode);
    setInitialValues({ name: val?.name ?? null });
    setOpen(true);
  }

  /**
   * @param {{ name: string }} values
   * @private
   */
  function _onUpdate(values){
    setLoading(true);
    message.loading({
      key: 'save',
      content: 'Loading...',
      duration: 10,
    }).then(r => r);
    new GroupKeycloakService()
      .update(selected?.id, values)
      .then(() => {
        message.success({
          key: 'save',
          content: 'Successfully updated',
          duration: 4,
        }).then(r => r);
        setParams((prevState) => ({...prevState}));
        form.resetFields();
        setSelected(null);
        setMode(null);
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        message.error({
          key: 'save',
          content: err?.message ?? err?.errorMessage ?? 'Error updated group',
          duration: 4,
        }).then(r => r);
        setSelected(null);
        setMode(null);
        setLoading(false);
        setOpen(false);
      });
  }

  /**
   * @param {{ name: string; }} values
   * @private
   */
  // eslint-disable-next-line no-unused-vars
  function _onCreateChild(values){

  }

  /**
   * @param {any} values
   * @private
   */
  // eslint-disable-next-line no-unused-vars
  function _onMoveTo(values){

  }

  /**
   * @param {{ name: string; }} values
   * @private
   */
  function _onCreate(values){
    setLoading(true);
    message.loading({
      key: 'save',
      content: 'Loading...',
      duration: 10,
    }).then(r => r);
    new GroupKeycloakService()
      .store(values)
      .then(() => {
        message.success({
          key: 'save',
          content: 'Successfully created',
          duration: 4,
        }).then(r => r);
        setParams((prevState) => ({...prevState}));
        form.resetFields();
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        message.error({
          key: 'save',
          content: err?.message ?? err?.errorMessage ?? 'Error creating group',
          duration: 4,
        }).then(r => r);
        setLoading(false);
      });
  }

  /**
   * @private
   */
  function _onFinish() {
    form.validateFields()
      .then((values) => {
        switch (type){
          case FORM_CONSTANT.UPDATE:
            _onUpdate(values);
            break;
          case FORM_CONSTANT.CREATE:
            _onCreate(values);
            break;
          case 'CREATE_CHILD':
            _onCreateChild(values);
            break;
          case 'MOVE_TO':
            _onMoveTo(values);
            break;
          default:
            break;
        }
      });
  }

  /**
   * @private
   */
  function _onClosePopup(){
    setOpen(false);
    setMode(null);
    setSelected(null);
  }

  useEffect(() => {
    setLoading(true);
    new GroupKeycloakService()
      .get(params)
      .then((response) => {
        setData(Array.isArray(response) ? response : []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setData([]);
      });
  }, [params]);

  return (
    <React.Fragment>
      <Card>
        <Flex justify="space-between" className="mb-4">
          <div/>
          <div>
            <Button
              disabled={Array.isArray(loadings) && loadings.length > 0 && loadings.some(item => item === true)}
              icon={<PlusOutlined/>}
              type="primary"
              onClick={()=> _onOpen(null, FORM_CONSTANT.CREATE, FORM_CONSTANT.CREATE)}
            >
              Create
            </Button>
          </div>
        </Flex>
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Table
              scroll={{
                x: 768,
              }}
              rowClassName={record => (record?.deletedAt ? '!bg-red-500 !bg-opacity-20' : '')}
              loading={loading}
              columns={columns}
              dataSource={data}
            />
          </Col>
        </Row>
      </Card>

      <Modal open={open} onCancel={_onClosePopup} onOk={_onFinish} destroyOnClose>
        {
          type !== 'MOVE_TO' ?
            <KeycloakGroupForm
              form={form}
              initialValues={!mode ? { name : null } : initialValues}
              mode={mode}
            />
            : <KeycloakMoveToGroupForm
              form={form}
              initialValues={!mode ? { name : null } : initialValues}
              mode={mode}
            />
        }
      </Modal>
    </React.Fragment>
  );
};

export default Page;
