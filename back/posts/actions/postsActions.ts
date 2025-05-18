'use server';

import prisma from '@/back/config/prisma';
import { PostDto } from '@/components/CustonEditor';

type PostCreateDto = {
    content: string;
    title: string;
};

export const createPost = async (postCreateDto: PostCreateDto) => {
    try {
        return prisma.postEntity.create({ data: postCreateDto });
    } catch (error) {
        throw error;
    }
};

export const getPostDetail = async (id: number): Promise<PostDto | null> => {
    try {
        return prisma.postEntity.findUnique({ where: { id } });
    } catch (error) {
        throw error;
    }
};
