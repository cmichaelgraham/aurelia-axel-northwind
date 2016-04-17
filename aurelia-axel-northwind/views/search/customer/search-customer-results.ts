import { bindable, inject, customElement } from 'aurelia-framework';
import { IPagedDataSource } from '../../odata/odata-paged-data-source';
import { CustomerData, CustomerSearchCriteria } from './customer-data-source';

@inject(Element)
@customElement('search-customer-results')
export class SearchCustomerResults {
    @bindable dataSource: IPagedDataSource<CustomerData, CustomerSearchCriteria>;
    element: Element;
    gridBody: Element;

    constructor(element: Element) {
        this.element = element;
    }
    
    bind() {
        this.dataSource.pageLoaded.on(() => this.pageLoaded());
    }

    pageLoaded = () => {
        this.gridBody.scrollTop = 0;
    };

    unbind() {
        this.dataSource.pageLoaded.off(this.pageLoaded);
    }
}