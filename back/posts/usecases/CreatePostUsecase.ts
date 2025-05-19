import { PostRepository } from '../domain/repositories/PostRepository';
import { CreatePostReq } from '../types/request/createPost';

export class CreateProjectUsecase {
    constructor(private readonly postRepository: PostRepository) {}

    async execute(dto: CreatePostReq) {
        const post = {
            title: dto.title,
            content: dto.content,
        };

        const newPost = await this.postRepository.createPost(post);

        return newPost;
    }
}
