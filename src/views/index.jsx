import React from 'react';
import {App, ConfigProvider} from 'antd';
import {useSelector} from 'react-redux';
import Routes from 'routes';
import {resources} from 'lang';
import useBodyClass from 'utils/hooks/useBodyClass';

export const Views = () => {
  const {locale, direction} = useSelector(state => state.theme);
  const currentAppLocale = resources[locale];
  useBodyClass(`dir-${direction}`);

  return (
    <App>
      <ConfigProvider direction={direction} locale={currentAppLocale.antd}>
        <Routes/>
      </ConfigProvider>
    </App>
  );
};

export default Views;
