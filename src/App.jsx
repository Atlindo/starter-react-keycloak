import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import store from 'store';
import history from './history';
import Layouts from './layouts';
import { THEME_CONFIG } from './configs/AppConfig';
import './lang';
import keycloak from './keycloak';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Provider store={store}>
          <BrowserRouter history={history}>
            <ThemeSwitcherProvider
              themeMap={themes}
              defaultTheme={THEME_CONFIG.currentTheme}
              insertionPoint="styles-insertion-point"
            >
              <Layouts />
            </ThemeSwitcherProvider>
          </BrowserRouter>
        </Provider>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
