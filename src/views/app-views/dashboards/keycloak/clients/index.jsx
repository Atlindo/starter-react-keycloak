import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PageHeaderAlt from "../../../../../components/layout-components/PageHeaderAlt";
import {Breadcrumb, Button, Card, Checkbox, Divider, Flex, Menu, Table, Tabs, Typography} from "antd";
import TheContainer from "../../../../../components/util-components/Container/TheContainer";
import KeycloakInterceptor from "../../../../../auth/keycloak.interceptor";
import {useKeycloak} from "@react-keycloak/web";
import {
    ApiOutlined,
    CloseOutlined,
    EditOutlined,
    EyeOutlined, KeyOutlined,
    PlusOutlined,
    ReloadOutlined,
    SaveOutlined,
    UserOutlined
} from "@ant-design/icons";
import EllipsisDropdown from "../../../../../components/shared-components/EllipsisDropdown";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";
import {useNavigate} from "react-router-dom";

function Overview() {
    const navigate = useNavigate();
    const {keycloak, initialized} = useKeycloak();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        first: 0,
        max: 10,
    });

    const columns = [
        {
            visible: false,
            title: "ID",
            dataIndex: 'id',
            width:'70px',
        },
        {
            fixed: 'left',
            width: '180px',
            visible: true,
            title: 'Client ID',
            dataIndex: 'clientId'
        },
        {
            width: '200px',
            visible: true,
            title: 'Name',
            dataIndex: 'name',
            /**
             * @param {string} _
             * @return {string}
             */
            render(_) {
                return _ ? _.replace(/\$\{|}/g, '') : "-"
            }
        },
        {
            width: '160px',
            visible: true,
            title: 'Type',
            dataIndex: 'protocol',
            /**
             * @param {string} _
             * @return {string}
             */
            render(_) {
                return _ === 'openid-connect' ? 'OpenID Connect' : _
            }
        },
        {
            width: '200px',
            visible: true,
            title: 'Description',
            dataIndex: 'description',
            /**
             * @param {string} _
             * @return {string}
             */
            render(_) {
                return _ ?? "-"
            }
        },
        {
            width: '300px',
            visible: true,
            title: 'Home URL',
            dataIndex: 'baseUrl',
            /**
             * @param {string} item
             * @return {JSX.Element}
             */
            render(item) {
                return (
                    <a target={'_blank'}
                       href={(item?.startsWith('/realms') || item?.startsWith('/admin')) ? [keycloak.authServerUrl.slice(0, keycloak.authServerUrl.length - 1), item].join('') : item}
                       rel="noreferrer">
                        {(item?.startsWith('/realms') || item?.startsWith('/admin')) ? [keycloak.authServerUrl.slice(0, keycloak.authServerUrl.length - 1), item].join('') : item}
                    </a>
                )
            }
        },
        {
            width: '100px',
            visible: true,
            title: 'Enabled',
            dataIndex: 'enabled',
            /**
             *
             * @param {boolean} _
             * @return {JSX.Element}
             */
            render(_) {
                return <Checkbox defaultChecked={_} checked={_}/>
            }
        },
        {
            fixed: 'right',
            visible: true,
            width: "100px",
            title: "Action",
            render: (_) => {
                return <EllipsisDropdown
                    placement={'left'}
                    menu={
                        <Menu>
                            <Menu.Item
                                onClick={() => {
                                    navigate(`${APP_PREFIX_PATH}/keycloak/clients/${_?.id}/setting`)
                                }}
                                icon={<EditOutlined/>}>
                                Setting
                            </Menu.Item>
                        </Menu>
                    }
                />
            },
        }
    ]

    function _onRefresh() {
        setParams((prevState) => ({...prevState}));
    }

    useEffect(() => {
        setLoading(true)
        KeycloakInterceptor.get(`/admin/realms/${keycloak.realm}/clients`, {
            params
        })
            .then((response) => {
                setData(Array.isArray(response?.data) ? response?.data : [])
                setLoading(false)
            })
            .catch((err) => {
                console.log({err})
                setData([])
                setLoading(false)
            })
    }, [params])

    return (
        <React.Fragment>
            <Card
                title={'Overview'}
                extra={
                    <React.Fragment>
                        <Flex align={'center'} gap={10}>
                            <Button
                                loading={loading}
                                ghost
                                onClick={_onRefresh}
                                type={'primary'}
                                shape={'round'}
                                icon={<ReloadOutlined/>}
                            >Refresh</Button>
                            <Button
                                onClick={function(){
                                    navigate(`${APP_PREFIX_PATH}/keycloak/clients/create`)
                                }}
                                type={'primary'}
                                shape={'round'}
                                icon={<PlusOutlined/>}
                            >Create</Button>
                        </Flex>
                    </React.Fragment>
                }
            >
                <Table
                    scroll={{
                        x: 768
                    }}
                    columns={columns.filter((item) => item?.visible) ?? []}
                    loading={loading}
                    dataSource={data}/>
            </Card>
        </React.Fragment>
    )
}

function InitialAccessToken() {
    return (
        <React.Fragment>
            <p>Initial Access Token</p>
        </React.Fragment>
    )
}

function ClientRegistration() {
    return (
        <React.Fragment>
            <p>Client Registration</p>
        </React.Fragment>
    )
}

class Page extends React.Component {
    static Overview = Overview;
    static InitialAccessToken = InitialAccessToken;
    static ClientRegistration = ClientRegistration;

    render() {
        return (
            <React.Fragment>
                <PageHeaderAlt>
                    <TheContainer>
                        <div className="py-4">
                            <Breadcrumb className={'mb-4'}>
                                <Breadcrumb.Item href={`${APP_PREFIX_PATH}`}>App</Breadcrumb.Item>
                                <Breadcrumb.Item><KeyOutlined /> <span>Keycloak</span></Breadcrumb.Item>
                                <Breadcrumb.Item><ApiOutlined /> <span>Clients</span></Breadcrumb.Item>
                            </Breadcrumb>
                            <Flex justify={'space-between'} align={'start'}>
                                <Typography.Title level={1}>Clients</Typography.Title>
                            </Flex>
                        </div>
                    </TheContainer>
                </PageHeaderAlt>
                <div className={'!-mt-[45px]'}>
                    <TheContainer>
                        <Tabs
                            defaultActiveKey={'overview'}
                            items={[
                                {
                                    key: 'overview',
                                    label: 'Overview',
                                    children: <Page.Overview/>
                                },
                                {
                                    key: 'initial_access_token',
                                    label: 'Initial Access Token',
                                    children: <Page.InitialAccessToken/>
                                },
                                {
                                    key: 'client_registration',
                                    label: 'Client Registration',
                                    children: <Page.ClientRegistration/>
                                },
                            ]}
                        />
                    </TheContainer>
                </div>
            </React.Fragment>
        )
    }
}

export default connect((state) => {
    return {}
})(Page)