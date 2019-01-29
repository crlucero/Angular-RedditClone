import { Comments } from "./comments.model";

export class Post {
    constructor(public title: string, public user: string, public id: number, public comments: Comments[]) { }
}
