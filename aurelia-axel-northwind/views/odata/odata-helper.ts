/**
 * The BuildQueryResult interface, defines the return from the [[OdataHelper]] [[buildQuery]] method.  the [[valid]] property indicates success or failure.  When [[buildQuery]]
 * fails, the [[message]] property will indicate the cause of the failure.  When the [[buildQuery]] call succeeds, the [[query]] property will contain the odata query url.
 */
interface BuildQueryResult {
    /**
     * Indicates if the [[buildQuery]] call failed or succeeded.
     */
    valid: boolean;
    /**
     * If the [[buildQuery]] call fails, the `message` property contains the error message.
     * 
     * ```javascript
     * var x = 7;
     * // a comment
     * 
     * ```
     */
    message?: string;
    /**
     * If the [[buildQuery]] call succeeds, the `query` property contains the odata query url.
     */
    query?: string;
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

    /**
     * `url` is used to provide the base url from which the odata query is based
     */
    url = (url: string): OdataHelper => {
        this.urlProp = url;
        return this;
    }

    /**
     * `fromm` is used to provide the resource against which the odata query will be run
     */
    fromm = (fromm: string): OdataHelper => {
        this.fromProp = fromm;
        return this;
    }

    /**
     * `filter` is used to restrict the results based on filter criteria.  odata filtering has a [rich syntax](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/) (scroll down to section 4.5, `filters`)
     */
    filter = (filter: string): OdataHelper => {
        this.filterProp = filter;
        return this;
    }

    /**
     * `select` is used to provide a comma-separated list of properties which restricts (filters out) data which isn't requied, increasing query efficiency and reducing required network bandwidth.
     */
    select = (select: string): OdataHelper => {
        this.selectProp = select;
        return this;
    }

    /**
     * `orderBy` is used to specify the properties used to control (ascending (*default*) or descending) the sort order for the resulting entities 
     */
    orderBy = (orderBy: string, desc?: boolean): OdataHelper => {
        this.orderByProp = orderBy;
        this.descProp = desc;
        return this;
    }

    /**
     * `skip` indicates how many entities to skip in the result set (these entities are not returned).  `skip` is typically used in conjunction with [[take]] to implement paging
     */
    skip = (count: number): OdataHelper => {
        this.skipProp = count;
        return this;
    }

    /**
     * `take` indicates how many entities to return from the result set.  `take` actually translates to `$top` in the odata query.
     */
    take = (count: number): OdataHelper => {
        this.takeProp = count;
        return this;
    }

    /**
     * `inlineCount` is used to request a property in the odata query result that indicates how many entities match the odata query.  This is typically used in paging to indicate how many rows are available.
     */
    inlineCount = (): OdataHelper => {
        this.inlineCountProp = true;
        return this;
    }

    /**
     * `expand` is very powerful and is used to indicate related data to include in the result.  Typically this would be arrays of child, grandchild, ... data, returned in a nested hierarchy under the returned entities.
     */
    expand = (expand: string): OdataHelper => {
        this.expandProp = expand;
        return this;
    }
}