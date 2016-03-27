/**
 * The BuildQueryResult interface, defines the return from the [[OdataHelper]] [[buildQuery]] method.  the [[valid]] property indicates success or failure.  When [[buildQuery]]
 * fails, the [[message]] property will indicate the cause of the failure.  When the [[buildQuery]] call succeeds, the [[query]] property will contain the odata query url.
 */
interface BuildQueryResult {
    /**
     * Indicates if the [[buildQuery]] call failed or succeeded.
     */
    valid: boolean,
    /**
     * If the [[buildQuery]] call fails, the `message` property contains the error message.
     */
    message?: string,
    /**
     * If the [[buildQuery]] call succeeds, the `query` property contains the odata query url.
     */
    query?: string
}

/**
 * The OdataHelper provides a [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) for constructing [odata urls](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/)
 */
export class OdataHelper {
    private urlProp: string;
    private fromProp: string;
    private filterProp: string;
    private selectProp: string;
    private orderByProp: string;
    private descProp: boolean;
    private skipProp: number;
    private takeProp: number;
    private inlineCountProp: boolean = false;
    private expandProp: string;

    constructor() {
    }

    /**
     * `buildQuery` is used once the fluent calls have been made (that provide the url, from, sort, filter, select, skip, take, and orderby odata query criteria).
     * @returns returns a [[BuildQueryResult]] that holds the resulting odata url or the error message (if an error occured)
     */
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