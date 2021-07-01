import CatalogueList from '../views/pages/catalogue-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': CatalogueList,
  '/home': CatalogueList,
  '/favorite': Favorite,
  '/detail/id': Detail,
};

export default routes;
