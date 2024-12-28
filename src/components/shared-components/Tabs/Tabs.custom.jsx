import React, { useState } from 'react';
import { Tabs, Typography, TabsProps } from 'antd';
import { useLocation } from 'react-router-dom';
import { first } from 'lodash';

const { TabPane } = Tabs;

/**
 *
 * @param {object} props
 * @param {Array<TabCustomProperties>} props.items
 * @param {TabsProps} props.tab
 * @param {string} props.paramsKey
 * @param {string | 'overview'} props.defaultTab
 * @param {Function} props.onListen
 * @param {string | 'left' | 'top'} props.mode
 * @return {JSX.Element}
 */
function TabsCustom(props) {
  const { items = [], mode, tab = {}, onListen, paramsKey, defaultTab } = props;
  const locations = useLocation();

  const [tabsActive, setTabsActive] = useState(() => {
    const value = new URLSearchParams(locations.search).get(paramsKey ?? 'tab');
    if (value) {
      return value.toString()?.toLowerCase();
    }
    if (defaultTab) {
      return defaultTab;
    }
    return first(items).key ?? 'detail';
  });

  function setUp(value) {
    if (window) {
      const urlSearch = new URLSearchParams(window.location.search);
      if (urlSearch.get(paramsKey ?? 'tab')) {
        // urlSearch.delete(paramsKey ?? 'tab')
        urlSearch.set(paramsKey ?? 'tab', value);
      } else {
        urlSearch.append(paramsKey ?? 'tab', value);
      }
      const query = [];
      urlSearch.forEach((value, key) => {
        query.push(`${key}=${value}`);
      });

      const newUrl = [window.origin, locations.pathname].join('');
      window.history.pushState({ article: 'read-all' }, 'Read All Article', [newUrl, query.join('&')].join('?'));
    }
  }

  function onTabs(value) {
    if (typeof onListen !== 'undefined' && typeof onListen === 'function') {
      onListen(value);
    }
    setTabsActive(value);

    setUp(value);
  }

  return (
    <Tabs
      {...tab}
      mode={mode ?? 'top'}
      tabPosition={mode ?? 'top'}
      defaultActiveKey={`${tabsActive}`}
      activeKey={`${tabsActive}`}
      onChange={onTabs}
    >
      {Array.isArray(items) && items.length > 0
        ? items.map((item, index) => {
            return (
              <TabPane
                tab={<Typography.Text className="!mk-text-xs">{item?.title}</Typography.Text>}
                key={`${item?.key}`}
              >
                {typeof item?.render === 'function' ? item?.render({ current: tabsActive, onChange: onTabs }) : null}
              </TabPane>
            );
          })
        : null}
    </Tabs>
  );
}

TabsCustom.defaultProps = {
  paramsKey: 'tab',
  tab: {
    defaultTab: 'overview',
  },
  mode: 'top',
};

export default TabsCustom;
