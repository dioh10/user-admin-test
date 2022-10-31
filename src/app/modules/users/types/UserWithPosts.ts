import {User} from './reqres';
import {Post} from './jp';

export type UserWithPosts = User & { posts: Post[] };
