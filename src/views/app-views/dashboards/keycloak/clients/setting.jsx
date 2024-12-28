import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import PageHeaderAlt from "../../../../../components/layout-components/PageHeaderAlt";
import TheContainer from "../../../../../components/util-components/Container/TheContainer";
import {
    Breadcrumb,
    Button,
    Card, Checkbox,
    Col,
    Divider,
    Flex,
    Form,
    Input,
    Popconfirm,
    Row,
    Select,
    Switch, Tooltip,
    Typography
} from "antd";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";
import {
    ApiOutlined,
    ArrowLeftOutlined, DeleteOutlined, DeleteTwoTone,
    GlobalOutlined,
    KeyOutlined,
    PlusOutlined,
    SaveOutlined, SettingOutlined
} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import KeycloakInterceptor from "../../../../../auth/keycloak.interceptor";
import {useKeycloak} from "@react-keycloak/web";


export default connect(() => {
    return {}
}, {})(function () {
    const { keycloak } = useKeycloak();
    const {uuid} = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const publicClient = Form.useWatch('publicClient',form)
    const authorizationServicesEnabled = Form.useWatch('authorizationServicesEnabled',form)
    const serviceAccountsEnabled = Form.useWatch('serviceAccountsEnabled',form)
    const [data, setData] = useState(null)
    function _onFinish(){
        form.validateFields()
            .then((values)=> {
                setLoading(true);
                KeycloakInterceptor.post(`/`)
                    .then((response)=> {
                        setLoading(false);
                    })
                    .catch((err)=> {
                        setLoading(false)
                    })
            })
    }

    useEffect(() => {
        if(uuid){
            setLoading(true)
            KeycloakInterceptor.get(`/admin/realms/${keycloak?.realm}/clients/${uuid}`)
                .then((response) => {
                    setLoading(false)
                    console.log(response?.data,'data')
                    form.setFieldsValue({
                        ...response?.data,
                        publicClient: !response?.data?.publicClient ?? false,
                        authorizationServicesEnabled: !response?.data?.publicClient ? response?.data?.authorizationServicesEnabled : false,
                        serviceAccountsEnabled: !response?.data?.publicClient ? response?.data?.serviceAccountsEnabled : false,
                })
                    setData(response?.data ?? null)
                })
                .catch((err)=> {
                    setLoading(false)
                })
        }
    }, [uuid]);

    return (
        <React.Fragment>
            <React.Fragment>
                <PageHeaderAlt>
                    <TheContainer fluid>
                        <div className="pt-4">
                            <Breadcrumb className={'mb-4'}>
                                <Breadcrumb.Item
                                    className={'cursor-pointer'}
                                    onClick={function () {
                                        navigate(APP_PREFIX_PATH)
                                    }}
                                >App</Breadcrumb.Item>
                                <Breadcrumb.Item><KeyOutlined/> <span>Keycloak</span></Breadcrumb.Item>
                                <Breadcrumb.Item
                                    onClick={function () {
                                        navigate(`${APP_PREFIX_PATH}/keycloak/clients`, {replace: true});
                                    }}
                                    className={'cursor-pointer'}
                                ><ApiOutlined/> <span>Clients</span></Breadcrumb.Item>
                                <Breadcrumb.Item><span>{uuid}</span></Breadcrumb.Item>
                                <Breadcrumb.Item><span>Settings</span></Breadcrumb.Item>
                            </Breadcrumb>
                            <Flex justify={'space-between'} align={'start'}>
                                <Flex align={'center'} gap={10}>
                                    <SettingOutlined className={'!text-2xl'}/>
                                    <Typography.Title level={1} className={'!m-0'}>Setting</Typography.Title>
                                </Flex>
                                <Flex gap={10}>
                                    <Popconfirm
                                        title={'Are you sure you want discard this fields?'}
                                        okButtonProps={{
                                            shape: 'round',
                                            size: 'small'
                                        }}
                                        cancelButtonProps={{
                                            shape: 'round',
                                            size: 'small'
                                        }}
                                        onConfirm={function(){
                                            navigate(`${APP_PREFIX_PATH}/keycloak/clients`, {replace: true});
                                        }}
                                    >
                                        <Button
                                            loading={loading}
                                            ghost
                                            type={'primary'}
                                            icon={<ArrowLeftOutlined />}
                                        >Discard</Button>
                                    </Popconfirm>
                                    <Button
                                        onClick={_onFinish}
                                        loading={loading}
                                        type={'primary'}
                                        icon={<SaveOutlined />}
                                    >Save</Button>
                                </Flex>
                            </Flex>
                        </div>
                    </TheContainer>
                </PageHeaderAlt>
                <div className={'mt-6'}>
                    <TheContainer fluid>
                        <Form
                            initialValues={{
                                ...data
                            }}
                            form={form}
                            layout={'vertical'}
                        >
                            <Row gutter={[24, 24]}>
                                <Col xs={24} xl={14} key={'col-1'}>
                                    <Card title={'Capability Configuration'} loading={loading}>
                                        <Form.Item name={'publicClient'} label={'Client authentication'}>
                                            <Switch
                                                defaultChecked={!data?.publicClient ?? false}
                                                // checkedChildren={'Yes'} unCheckedChildren={'No'}
                                            />
                                        </Form.Item>
                                        <Form.Item name={'authorizationServicesEnabled'} label={'Authorization'}>
                                            <Switch checkedChildren={'Yes'} unCheckedChildren={'No'} disabled={!publicClient}/>
                                        </Form.Item>
                                        <Typography.Paragraph>Authorization</Typography.Paragraph>
                                        <Row gutter={[24, 12]}>
                                            <Col xs={24} lg={12}>
                                                <Form name={'standardFlowEnabled'}>
                                                    <Checkbox
                                                        defaultChecked={data?.standardFlowEnabled ?? false}
                                                    >Standard Flow</Checkbox>
                                                </Form>
                                            </Col>
                                            <Col xs={24} lg={12}>
                                                <Form name={'directAccessGrantsEnabled'}>
                                                    <Checkbox defaultChecked={data?.directAccessGrantsEnabled ?? false}>Direct Access Grants</Checkbox>
                                                </Form>
                                            </Col>
                                            <Col xs={24} lg={12}>
                                                <Form name={'implicitFlowEnabled'}>
                                                    <Checkbox defaultChecked={data?.implicitFlowEnabled ?? false}>Implicit flow</Checkbox>
                                                </Form>
                                            </Col>
                                            <Col xs={24} lg={12}>
                                                <Form name={'serviceAccountsEnabled'}>
                                                    <Checkbox
                                                        disabled={!publicClient ? true : authorizationServicesEnabled === true}
                                                        value={!publicClient ? false : authorizationServicesEnabled === true}
                                                        checked={!publicClient ? false : authorizationServicesEnabled === true}
                                                        defaultChecked={!publicClient ? !authorizationServicesEnabled ? data?.serviceAccountsEnabled : true: false}
                                                    >Service accounts roles</Checkbox>
                                                </Form>
                                            </Col>
                                            <Col xs={24} lg={12}>
                                                <Form name={['attributes','oauth2.device.authorization.grant.enabled']}>
                                                    <Checkbox defaultChecked={data?.attributes['oauth2.device.authorization.grant.enabled'] === "true" ?? false}>OAuth 2.0 Device Authorization Grant</Checkbox>
                                                </Form>
                                            </Col>
                                            <Col xs={24} lg={12}>
                                                <Form name={['attributes','oidc.ciba.grant.enabled']}>
                                                    <Checkbox
                                                        disabled={!publicClient}
                                                        defaultChecked={data?.attributes['oidc.ciba.grant.enabled'] === "true" ?? false}>OIDC CIBA Grant</Checkbox>
                                                </Form>
                                            </Col>


                                            {/*{[*/}
                                            {/*    {*/}
                                            {/*        form: {*/}
                                            {/*            name: ['attributes', 'oidc.ciba.grant.enabled']*/}
                                            {/*        },*/}
                                            {/*        checkbox: {*/}
                                            {/*            value: 'standard-flow',*/}
                                            {/*            label: 'Standard Flow'*/}
                                            {/*        }*/}
                                            {/*    },*/}
                                            {/*    {*/}
                                            {/*        form: {*/}
                                            {/*            name: ['attributes', 'oidc.ciba.grant.enabled']*/}
                                            {/*        },*/}
                                            {/*        checkbox: {*/}
                                            {/*            value: 'direct-access-grants',*/}
                                            {/*            label: 'Direct Access Grants'*/}
                                            {/*        }*/}
                                            {/*    },*/}
                                            {/*    {*/}
                                            {/*        form: {*/}
                                            {/*            name: ['attributes', 'oidc.ciba.grant.enabled']*/}
                                            {/*        },*/}
                                            {/*        checkbox: {*/}
                                            {/*            disabled: !watchClientAuthentication,*/}
                                            {/*            value: 'services-accounts-roles',*/}
                                            {/*            label: 'Service accounts roles'*/}
                                            {/*        }*/}
                                            {/*    },*/}
                                            {/*    {*/}
                                            {/*        form: {*/}
                                            {/*            name: ['attributes', 'oidc.ciba.grant.enabled']*/}
                                            {/*        },*/}
                                            {/*       checkbox: {*/}
                                            {/*           value: 'implicit-flow',*/}
                                            {/*           label: 'Implicit flow'*/}
                                            {/*       }*/}
                                            {/*    },*/}
                                            {/*    {*/}
                                            {/*        value: 'oauth2',*/}
                                            {/*        label: 'OAuth 2.0 Device Authorization Grant'*/}
                                            {/*    },*/}
                                            {/*    {*/}
                                            {/*        disabled: !watchClientAuthentication,*/}
                                            {/*        value: 'OIDC',*/}
                                            {/*        label: 'OIDC CIBA Grant'*/}
                                            {/*    },*/}
                                            {/*].map((child)=> {*/}
                                            {/*    return (*/}
                                            {/*        <Col xs={24} lg={12}>*/}
                                            {/*            <Form {...child?.form}>*/}
                                            {/*                <Checkbox {...child?.checkbox}>{child?.checkbox?.label}</Checkbox>*/}
                                            {/*            </Form>*/}
                                            {/*        </Col>*/}
                                            {/*    )*/}
                                            {/*})}*/}
                                        </Row>
                                    </Card>
                                    <Card title={'Login Settings'} loading={loading}>
                                        <Form.Item
                                            name={'rootUrl'}
                                            label={'Root URL'}
                                        >
                                            <Input
                                                addonBefore={<GlobalOutlined/>}
                                                placeholder={'e.g https://domain.com'}/>
                                        </Form.Item>
                                        <Form.Item
                                            name={'baseUrl'}
                                            label={'Home URL'}
                                        >
                                            <Input
                                                addonBefore={<GlobalOutlined/>}
                                                placeholder={'e.g https://domain.com'}/>
                                        </Form.Item>
                                        <div className="w-full mb-2.5">
                                            <Typography>Valid Redirect URIs</Typography>
                                        </div>
                                        <Form.List name={'redirectUris'}>
                                            {(fields, {add, remove}) => {
                                                return (
                                                    <>
                                                        {
                                                            fields.map((field, index) => {
                                                                return (
                                                                    <div className={'flex gap-2'}
                                                                         key={`valid_redirect_uri-${field.name}`}>
                                                                        <Form.Item name={[field.name]} rules={[{
                                                                            required: fields.length > 1,
                                                                            message: 'URL Required'
                                                                        }]} className={'!w-full'}>
                                                                            <Input
                                                                                addonBefore={<GlobalOutlined/>}
                                                                                placeholder={'e.g https://domain.com/*'}/>
                                                                        </Form.Item>
                                                                        <Tooltip title={'Delete item'}>
                                                                            <Button
                                                                                disabled={fields.length === 1}
                                                                                danger
                                                                                ghost
                                                                                onClick={() => {
                                                                                    remove(field.name)
                                                                                }}
                                                                                icon={<DeleteOutlined/>}
                                                                                shape={'circle'} type={'primary'}
                                                                                htmlType={'button'}/>
                                                                        </Tooltip>
                                                                        {index === (fields.length - 1) && (
                                                                            <Tooltip title={'Add item'}>
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        add(null)
                                                                                    }}
                                                                                    icon={<PlusOutlined/>}
                                                                                    shape={'circle'} type={'primary'}
                                                                                    htmlType={'button'}/>
                                                                            </Tooltip>
                                                                        )}

                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </>
                                                )
                                            }}
                                        </Form.List>
                                        <div className="w-full mb-2.5">
                                            <Typography>Valid post logout redirect URIs</Typography>
                                        </div>
                                        <Form.List name={'valid_post_logout_uri'}>
                                            {(fields, {add, remove}) => {
                                                return (
                                                    <>
                                                        {
                                                            fields.map((field, index) => {
                                                                return (
                                                                    <div className={'flex gap-2'}
                                                                         key={`valid_redirect_uri-${field.name}`}>
                                                                        <Form.Item name={[field.name]} rules={[{
                                                                            required: fields.length > 1,
                                                                            message: 'URL Required'
                                                                        }]} className={'!w-full'}>
                                                                            <Input
                                                                                addonBefore={<GlobalOutlined/>}
                                                                                placeholder={'e.g https://domain.com/*'}/>
                                                                        </Form.Item>
                                                                        <Tooltip title={'Delete item'}>
                                                                            <Button
                                                                                disabled={fields.length === 1}
                                                                                danger
                                                                                ghost
                                                                                onClick={() => {
                                                                                    remove(field.name)
                                                                                }}
                                                                                icon={<DeleteOutlined/>}
                                                                                shape={'circle'} type={'primary'}
                                                                                htmlType={'button'}/>
                                                                        </Tooltip>
                                                                        {index === (fields.length - 1) && (
                                                                            <Tooltip title={'Add item'}>
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        add(null)
                                                                                    }}
                                                                                    icon={<PlusOutlined/>}
                                                                                    shape={'circle'} type={'primary'}
                                                                                    htmlType={'button'}/>
                                                                            </Tooltip>
                                                                        )}

                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </>
                                                )
                                            }}
                                        </Form.List>

                                        <div className="w-full mb-2.5">
                                            <Typography>Web Origins</Typography>
                                        </div>
                                        <Form.List name={'webOrigins'}>
                                            {(fields, {add, remove}) => {
                                                return (
                                                    <>
                                                        {
                                                            fields.map((field, index) => {
                                                                return (
                                                                    <div className={'flex gap-2'}
                                                                         key={`valid_redirect_uri-${field.name}`}>
                                                                        <Form.Item name={[field.name]} rules={[{
                                                                            required: fields.length > 1,
                                                                            message: 'URL Required'
                                                                        }]} className={'!w-full'}>
                                                                            <Input
                                                                                addonBefore={<GlobalOutlined/>}
                                                                                placeholder={'e.g https://domain.com/*'}/>
                                                                        </Form.Item>
                                                                        <Tooltip title={'Delete item'}>
                                                                            <Button
                                                                                disabled={fields.length === 1}
                                                                                danger
                                                                                ghost
                                                                                onClick={() => {
                                                                                    remove(field.name)
                                                                                }}
                                                                                icon={<DeleteOutlined/>}
                                                                                shape={'circle'} type={'primary'}
                                                                                htmlType={'button'}/>
                                                                        </Tooltip>
                                                                        {index === (fields.length - 1) && (
                                                                            <Tooltip title={'Add item'}>
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        add(null)
                                                                                    }}
                                                                                    icon={<PlusOutlined/>}
                                                                                    shape={'circle'} type={'primary'}
                                                                                    htmlType={'button'}/>
                                                                            </Tooltip>
                                                                        )}

                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </>
                                                )
                                            }}
                                        </Form.List>

                                    </Card>
                                </Col>
                                <Col xs={24} xl={10} key={`col-2`}>
                                    <Card title={'General Setting'} loading={loading}>
                                        <Form.Item name={'protocol'} label={'Client Type'} rules={[ {required: true}]}>
                                            <Select
                                                loading={false}
                                                defaultValue={'openid-connect'}
                                                options={[
                                                    {
                                                        label: 'OpenID Connect',
                                                        value: 'openid-connect',
                                                    },
                                                    {
                                                        label: 'SAML',
                                                        value: 'saml',
                                                    },
                                                ]}/>
                                        </Form.Item>
                                        <Form.Item name={'clientId'} label={'Client ID'} rules={[ {required: true}]}>
                                            <Input placeholder={'Input your client ID'}/>
                                        </Form.Item>
                                        <Form.Item name={'name'} label={'Name'}>
                                            <Input placeholder={'Input your client name'}/>
                                        </Form.Item>
                                        <Form.Item name={'description'} label={'Description'}>
                                            <Input.TextArea placeholder={'Input your description'}/>
                                        </Form.Item>
                                        <Form.Item name={'alwaysDisplayInConsole'} label={'Always display in UI?'}>
                                            <Switch checkedChildren={'Yes'} unCheckedChildren={'No'}/>
                                        </Form.Item>
                                    </Card>
                                </Col>
                            </Row>


                        </Form>

                    </TheContainer>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
})