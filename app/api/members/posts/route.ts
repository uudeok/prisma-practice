import PrPostRepository from '@/back/posts/infra/PrPostRepository';
import { CreatePostDto } from '@/back/posts/usecases/dto/CreatePostDto';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/members/posts
export async function POST(req: NextRequest) {
    try {
        const body: CreatePostDto = await req.json();

        const { title, content } = body;

        if (!title || !content) {
            return NextResponse.json({ message: '게시글 생성 중 오류가 발생했습니다.' });
        }

        const repository = new PrPostRepository();
        const post = await repository.createPost(body);

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('게시글 생성 실패:', error);
        return NextResponse.json({ message: '게시글 생성 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
