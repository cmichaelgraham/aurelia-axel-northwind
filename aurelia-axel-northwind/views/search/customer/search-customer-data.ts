import {inject} from 'aurelia-framework';
import {OdataService} from '../../odata/odata-service';
import {CustomerData, CustomerSearchCriteria, CustomerSearchResults} from './customer-data-source';



import {OdataPagedDataSource} from '../../odata/odata-paged-data-source';

@inject(OdataService)
export class SearchCustomerData {
    dataSource: OdataPagedDataSource<CustomerData, CustomerSearchCriteria>;
    odataService: OdataService;
    searchResults: CustomerSearchResults;
    searchCriteria: CustomerSearchCriteria;

    constructor(odataService) {
        this.odataService = odataService;
    }

    fetchPage = (page): Promise<Array<CustomerData>> => {
        var me = this;
        return new Promise<Array<any>>((resolve, reject) => {
            let odataHelper = this.odataService.createOdataHelper();
            odataHelper
                .url('odata')
                .fromm('Customers')
                .filter(this.buildSearchFilter())
                .orderBy('CompanyName')
                .skip(0)
                .take(10)
                .inlineCount();

            this.odataService.execQuery(odataHelper)
                .then(
                    (result) => {
                        me.searchResults.customers.splice(0, me.searchResults.customers.length);
                        result.value.forEach(
                            (result) => {
                                me.searchResults.customers.push(result.value);
                            });
                        resolve(me.searchResults.customers);
                    })
                .catch((reason) => {
                    reject(reason);
                });
        });
    }

    buildSearchFilter(): string {
        let result: Array<string> = [];

        if (this.searchCriteria.CompanyName) {
            result.push('substringof(\'' + this.searchCriteria.CompanyName + '\', CompanyName) eq true');
        }

        return result.join(' and ');
    }
}