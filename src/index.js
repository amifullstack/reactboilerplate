import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component  />
    </AppContainer>,
    document.querySelector('#root'),
  );
};
renderApp(App);
if (module && module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
