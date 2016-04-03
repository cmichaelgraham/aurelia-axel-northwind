import {inject} from 'aurelia-framework';
import {OdataService} from '../../odata/odata-service';

interface CustomerSearchCriteria {
    CompanyName?: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    Country?: string;
}

@inject(OdataService)
export class SearchCustomer {
    searchCriteria: CustomerSearchCriteria = {
        CompanyName: 'Ab'
    };
    searchResults: Array<any> = [];
    odataService: OdataService;

    constructor(odataService) {
        if (!odataService) {
            alert('odataService not defined...');
        }
        this.odataService = odataService;
    }

    runSearch = (): Promise<Array<any>> => {
        var me = this;
        return new Promise<Array<any>>((resolve, reject) => {
            let odataHelper = this.odataService.createOdataHelper();
            odataHelper
                .url('odata')
                .fromm('Customers')
                .filter(this.buildSearchFilter())
                .orderBy('CompanyName')
                .skip(0)
                .take(10);

            this.odataService.execQuery(odataHelper)
                .then(
                    (result) => {
                        me.searchResults.splice(0, me.searchResults.length);
                        result.forEach(
                            (customer) => {
                                me.searchResults.push(customer);
                            });
                        resolve(me.searchResults);
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