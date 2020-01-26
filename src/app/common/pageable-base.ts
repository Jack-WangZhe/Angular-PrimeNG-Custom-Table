export class PageableBase<T> {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    data: Array<T>;
}