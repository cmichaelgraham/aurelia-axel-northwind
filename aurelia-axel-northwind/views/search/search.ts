import {Router} from 'aurelia-router';

export class Search {
    heading = 'Search';
    router: Router;

    configureRouter(config, router: Router) {
        config.map([
            { route: ['', 'customer'], moduleId: './customer/search-customer', nav: true, title: 'Customer Search' },
            { route: 'order', moduleId: './order/search-order', nav: true, title: 'Order Search' },
            { route: 'product', moduleId: './product/search-product', nav: true, title: 'Product Search' }
        ]);

        this.router = router;
    }
}