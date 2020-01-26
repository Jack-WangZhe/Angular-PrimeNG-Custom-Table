export class TableColumn {
    header: string;
    field: string;
    // -2 don't need to sort, 0 - none sort ; 1 - asc ; -1 - desc 
    order: number;

    constructor(
        header: string,
        field: string,
        order: number = 0) {
        this.header = header;
        this.field = field;
        this.order = order;
    }
}

export class TableAction<T> {
    type: string;
    rowData: T;
    constructor(type: string, rowData: T) {
        this.type = type;
        this.rowData = rowData;
    }
}

export class PageInfo {
    pageIndex: number;
    pageSize: number;
    constructor(pageIndex: number, pageSize: number) {
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
}

export class SortColumn {
    field: string;
    order: number;
    constructor(field: string, order: number) {
        this.field = field;
        this.order = order;
    }
}

export class TableFilter {
    pageInfo: PageInfo;
    sortColumns: Array<SortColumn>;
    constructor(pageInfo: PageInfo, sortColumns: Array<SortColumn>) {
        this.pageInfo = pageInfo;
        this.sortColumns = sortColumns;
    }
}