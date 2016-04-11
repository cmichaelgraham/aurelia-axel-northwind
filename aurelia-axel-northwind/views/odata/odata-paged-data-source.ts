import {inject} from 'aurelia-framework';
import {OdataService} from './odata-service';


export interface IPagedDataSource<EntityType, CriteriaType> {
    config: IDataSourceConfig<EntityType, CriteriaType>;

    resourceName: string;
    sortCriteria: string;
    pageSize: number;
    searchCriteria: CriteriaType;
    url: string;

    currentPage: number;
    pageCount: number;
    itemCount: number;
    pageData: Array<EntityType>;

    fetchFirstPage: () => Promise<Array<EntityType>>;
    fetchPreviousPage: () => Promise<Array<EntityType>>;
    fetchNextPage: () => Promise<Array<EntityType>>;
    fetchLastPage: () => Promise<Array<EntityType>>;
    fetchPage: (number) => Promise<Array<EntityType>>;

    isFirstPage: () => boolean;
    isLastPage: () => boolean;
}

export interface IDataSourceConfig<EntityType, CriteriaType> {
    pagedDataSource: IPagedDataSource<EntityType, CriteriaType>;
    resourceName: (string) => IDataSourceConfig<EntityType, CriteriaType>;
    sortCriteria: (string) => IDataSourceConfig<EntityType, CriteriaType>;
    pageSize: (number) => IDataSourceConfig<EntityType, CriteriaType>;
    searchCriteria: (CriteriaType) => IDataSourceConfig<EntityType, CriteriaType>
    url: (string) => IDataSourceConfig<EntityType, CriteriaType>;
    fetch: () => Promise<Array<EntityType>>;
}

@inject(OdataService)
export class OdataPagedDataSource<EntityType, CriteriaType> implements IPagedDataSource<EntityType, CriteriaType> {
    odataService: OdataService;

    constructor(odataService) {
        this.odataService = odataService;
    }

    config: IDataSourceConfig<EntityType, CriteriaType> = new DataSourceConfig(this);

    sortCriteria: string;
    resourceName: string;
    pageSize: number;
    searchCriteria: CriteriaType;
    url: string;

    currentPage: number;
    pageCount: number;
    itemCount: number;
    pageData: Array<EntityType> = [];

    isBusy: boolean = false;
    busyMessage: string;
    isPageValid: boolean = false;

    fetchFirstPage = () => {
        return this.fetchPage(0);
    }
    fetchPreviousPage = () => {
        if (this.currentPage > 0) {
            return this.fetchPage(this.currentPage - 1);
        } else {
            return this.fetchFirstPage();
        }
    }
    fetchNextPage = () => {
        if (this.currentPage < this.pageCount - 1) {
            return this.fetchPage(this.currentPage + 1);
        } else {
            return this.fetchLastPage();
        }
    }
    fetchLastPage = () => {
        return this.fetchPage(this.pageCount);
    }
    fetchPage = (newPage) => {
        if (this.isBusy) {
            throw new Error("Error - Can't fetch pages when busy.");
        }

        let that = this;

        let p = new Promise<Array<EntityType>>((resolve, reject) => {
            if (that.isPageValid && that.currentPage == newPage) {
                resolve(that.pageData);
            } else {
                // todo: make sure we aren't asking for a page beyond the page count.  may require a fetch if we haven't yet received the page count.
                that.currentPage = newPage;

                let odataHelper = that.odataService.createOdataHelper();
                odataHelper
                    .url(that.url)
                    .fromm(that.resourceName)
                    .filter(that.buildSearchFilter(that.searchCriteria))
                    .orderBy(that.sortCriteria)
                    .skip(that.currentPage * that.pageSize)
                    .take(that.pageSize)
                    .inlineCount();

                that.odataService.execQuery(odataHelper)
                    .then(
                        (result) => {
                            that.pageData.splice(0, that.pageData.length);
                            //for (let ii = 0; ii < result.value.length; ii++)
                            result.value.forEach((item) => {
                                that.pageData.push(item);
                            });
                            resolve(that.pageData);
                        })
                    .catch((reason) => {
                        reject(reason);
                    });

            }
        });

        return p;
    }

    buildSearchFilter = (criteria: CriteriaType): string => {
        throw new Error("Error in OdataPagedDataSource: buildSearchFilter is an abstract function.  You must implement an override in your derived class");
    }

    isFirstPage = () => {
        return this.isPageValid && this.currentPage == 0;
    }
    isLastPage = () => {
        return this.isPageValid && this.currentPage == this.pageCount;
    }

}

export class DataSourceConfig<EntityType, CriteriaType> implements DataSourceConfig<EntityType, CriteriaType> {
    pagedDataSource: IPagedDataSource<EntityType, CriteriaType>;

    constructor(pagedDataSource: IPagedDataSource<EntityType, CriteriaType>) {
        this.pagedDataSource = pagedDataSource;
    }
    resourceName = (resourceName: string) => {
        this.pagedDataSource.resourceName = resourceName;
        return this;
    }
    sortCriteria = (sortCriteria: string) => {
        this.pagedDataSource.sortCriteria = sortCriteria;
        return this;
    }
    pageSize = (pageSize: number) => {
        this.pagedDataSource.pageSize = pageSize;
        return this;
    }
    searchCriteria = (searchCriteria: CriteriaType) => {
        this.pagedDataSource.searchCriteria = searchCriteria;
        return this;
    }
    url = (url: string) => {
        this.pagedDataSource.url = url;
        return this;
    }
    fetch = () => {
        return this.pagedDataSource.fetchFirstPage();
    }
}