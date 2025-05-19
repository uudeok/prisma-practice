import { CreatePostReq } from '../../types/request/createPost';
import { PostEntity } from '@/prisma/app/generated/prisma';

export interface PostRepository {
    createPost(post: CreatePostReq): Promise<PostEntity>;
}
