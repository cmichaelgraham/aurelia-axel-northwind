import {inject, transient} from 'aurelia-framework';
import {OdataService} from '../../odata/odata-service';
import {OdataPagedDataSource} from '../../odata/odata-paged-data-source';

export interface CustomerData {
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string;
}

export interface CustomerSearchResults {
    customers: Array<CustomerData>;
    searchCount: number;
}

export class CustomerSearchCriteria {
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    Country: string;
}

@transient()
@inject(OdataService)
export class CustomerDataSource extends OdataPagedDataSource<CustomerData, CustomerSearchCriteria> {
    constructor(odataService) {
        super(odataService);

        this.searchCriteria = new CustomerSearchCriteria();

        this.config
            .url('odata')
            .resourceName('Customers')
            .sortCriteria('CompanyName')
            .pageSize(10);
    };

    buildSearchFilter = (customerSearchCriteria: CustomerSearchCriteria): string => {

        let result: Array<string> = [];

        let fields: Array<string> = [
            'CompanyName'
            , 'ContactName'
            , 'ContactTitle'
            , 'Address'
            , 'City'
            , 'Region'
            , 'Country'
        ];

        return fields.map(
            (field) => {
                if (!this.searchCriteria[field]) {
                    return '';
                } else {
                    return 'substringof(\'' +
                    this.searchCriteria[field] +
                    '\', ' + field + ') eq true'
                }
            })
            .filter((n: string) => !!n)
            .join(' and ');
    }
}