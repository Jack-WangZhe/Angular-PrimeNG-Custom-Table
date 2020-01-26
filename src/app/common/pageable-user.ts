import { PageableBase } from './pageable-base';
import { User } from './user';

export class PageableUser extends PageableBase<User> {
    constructor(pageIndex = 0, pageSize = 10) {
        super();
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
}