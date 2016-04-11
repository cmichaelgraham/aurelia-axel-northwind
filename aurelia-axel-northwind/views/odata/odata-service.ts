import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { OdataHelper } from './odata-helper';

export interface IOdataResult {
    odata: {
        count: number;
        metadata: string;
    };
    value: Array<any>;
}

@inject(HttpClient)
/**
 * `OdataService` provides an [[OdataHelper]] factory to facilitate construction of odata queries and a matching method [[execQuery]] to run odata queries.
 */
export class OdataService {
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * `createOdataHelper` returns a new [[OdataHelper]] that can be used to construct an odata query
     */
    createOdataHelper = (): OdataHelper => {
        return new OdataHelper();
    }

    /**
     * `execQuery` executes an odata query and returns a promise to provide an array of the resulting entities
     */
    execQuery = (odataHelper: OdataHelper): Promise<IOdataResult> => {

        return new Promise<IOdataResult>((resolve, reject) => {
            // get the odata url from the odata helper
            let helperResult = odataHelper.buildQuery();

            if (!helperResult.valid) {
                reject(`Error in OdataHelper: ${helperResult.message}`);
                return;
            }

            return this.http.fetch(helperResult.query)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    resolve(<IOdataResult>result);
                    return Promise.resolve(<IOdataResult>result);
                });
        });
    }
}
