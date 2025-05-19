import { PrismaClient, PostEntity } from '@/prisma/app/generated/prisma';
import { PostRepository } from '../domain/repositories/PostRepository';
import { CreatePostReq } from '../types/request/createPost';

// Prisma 클라이언트 인스턴스 생성
const prisma = new PrismaClient();

class PrPostRepository implements PostRepository {
    async createPost(post: CreatePostReq): Promise<PostEntity> {
        const createdPost = await prisma.postEntity.create({
            data: {
                title: post.title,
                content: post.content,
            },
        });

        return createdPost;
    }
}

export default PrPostRepository;
