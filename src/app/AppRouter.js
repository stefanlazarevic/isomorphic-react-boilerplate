import { Component } from 'react';
import Routes from './routes/web/routes';
import { renderRoutes } from 'react-router-config';
class AppRouter extends Component {
  render = () => renderRoutes(Routes);
}

export default AppRouter;
