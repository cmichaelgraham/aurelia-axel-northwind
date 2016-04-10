import {inject} from 'aurelia-framework';
import {OdataService} from '../../odata/odata-service';
import {CustomerData, CustomerSearchCriteria, CustomerSearchResults, CustomerDataSource} from './customer-data-source';

@inject(CustomerDataSource)
export class SearchCustomer {
    customerDataSource: CustomerDataSource;

    constructor(customerDataSource) {
        this.customerDataSource = customerDataSource;
        this.customerDataSource.config.fetch();
    }

    runSearch = (): Promise<Array<CustomerData>> => {
        return this.customerDataSource.config.fetch();
    }
}