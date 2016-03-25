﻿import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { OdataHelper } from './odata-helper';

@inject(HttpClient)
export class OdataService {
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    createOdataHelper = (): OdataHelper => {
        return new OdataHelper();
    }

    execQuery = (odataHelper: OdataHelper): Promise<Array<any>> => {

        return new Promise<Array<any>>((resolve, reject) => {
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
                .then(items => {
                    resolve(items);
                    return Promise.resolve(items);
                });
        });
    }
}
