import PublicRoutes from './web/public';
import { renderRoutes } from 'react-router-config';

const Router = () => renderRoutes(PublicRoutes);

export default Router;
