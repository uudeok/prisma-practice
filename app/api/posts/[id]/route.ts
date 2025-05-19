import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/prisma/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    const postId = Number(id);

    if (isNaN(postId)) {
        return NextResponse.json({ message: '잘못된 ID 형식입니다.' }, { status: 400 });
    }

    try {
        const post = await prisma.postEntity.findUnique({
            where: { id: postId },
        });

        if (!post) {
            return NextResponse.json({ message: '게시글을 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error('게시글 조회 오류:', error);
        return NextResponse.json({ message: '서버 오류로 게시글을 가져올 수 없습니다.' }, { status: 500 });
    }
}
