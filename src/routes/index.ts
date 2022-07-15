import config from '~/config';
import {
    Home,
    Login,
    Register,
    SearchResult,
    Shop,
    Product,
    Blog,
    AboutUs,
    Page,
    ProductDetail,
} from '~/pages';
import { DefaultLayout } from '~/layouts';

const routes = [
    { path: config.routes.home, layout: DefaultLayout, element: Home },
    { path: config.routes.login, layout: DefaultLayout, element: Login },
    { path: config.routes.register, layout: DefaultLayout, element: Register },
    {
        path: config.routes.searchResult,
        layout: DefaultLayout,
        element: SearchResult,
    },
    { path: config.routes.shop, layout: DefaultLayout, element: Shop },
    { path: config.routes.product, layout: DefaultLayout, element: Product },
    { path: config.routes.blog, layout: DefaultLayout, element: Blog },
    { path: config.routes.about, layout: DefaultLayout, element: AboutUs },
    { path: config.routes.page, layout: DefaultLayout, element: Page },
    { path: config.routes.page, layout: DefaultLayout, element: Page },
    {
        path: config.routes.productdetail,
        layout: DefaultLayout,
        element: ProductDetail,
    },
];

export default routes;
