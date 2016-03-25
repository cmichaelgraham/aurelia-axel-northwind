interface BuildQueryResult {
    valid: boolean,
    message?: string,
    query?: string
}

export class OdataHelper {
    urlProp: string;
    fromProp: string;
    filterProp: string;
    selectProp: string;
    orderByProp: string;
    descProp: boolean;
    skipProp: number;
    takeProp: number;
    inlineCountProp: boolean = false;
    expandProp: string;

    constructor() {
    }

    buildQuery = (): BuildQueryResult => {
        
        // error if no url
        if (this.urlProp === null || this.urlProp.length < 1) {
            return { valid: false, message: 'Error in OdataHelper: missing required url' };
        }

        // error if no from clause
        if (!this.fromProp) {
            return { valid: false, message: ('Error in OdataHelper: missing required fromm') };
        }

        // build query
        var query = this.urlProp + "/" + this.fromProp + "?"; // $format=json";

        // add filter if present
        if (this.filterProp) {
            query += "&$filter=" + this.filterProp;
        }

        // add select if present
        if (this.selectProp) {
            query += "&$select=" + this.selectProp;
        }

        // add orderBy if present
        if (this.orderByProp) {
            query += "&$orderby=" + this.orderByProp + (this.descProp ? ' desc' : '');
        }

        // add skip if present
        if (this.skipProp) {
            query += "&$skip=" + this.skipProp;
        }

        // add take if present
        if (this.takeProp) {
            query += "&$top=" + this.takeProp;
        }

        // add inlineCount if present
        if (this.inlineCountProp) {
            query += "&$inlinecount=allpages";
        }

        // add expand if present
        if (this.expandProp) {
            query += "&$expand=" + this.expandProp;
        }

        return { valid: true, query: query };
    }

    url = (url: string): OdataHelper => {
        this.urlProp = url;
        return this;
    }

    fromm = (fromm: string): OdataHelper => {
        this.fromProp = fromm;
        return this;
    }

    filter = (filter: string): OdataHelper => {
        this.filterProp = filter;
        return this;
    }

    select = (select: string): OdataHelper => {
        this.selectProp = select;
        return this;
    }

    orderBy = (orderBy: string, desc?: boolean): OdataHelper => {
        this.orderByProp = orderBy;
        this.descProp = desc;
        return this;
    }

    skip = (count: number): OdataHelper => {
        this.skipProp = count;
        return this;
    }

    take = (count: number): OdataHelper => {
        this.takeProp = count;
        return this;
    }

    inlineCount = (): OdataHelper => {
        this.inlineCountProp = true;
        return this;
    }

    expand = (expand: string): OdataHelper => {
        this.expandProp = expand;
        return this;
    }
}