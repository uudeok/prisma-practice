import { UserRepository } from '../domain/repositories/UserRepository';
import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';
import prisma from '@/back/config/prisma';

export class PrUserRepository implements UserRepository {
    async createUser(userCreateDto: UserCreateReqDto): Promise<UserResDto> {
        try {
            return await prisma.userEntity.create({ data: userCreateDto });
        } catch (error) {
            throw error;
        }
    }

    async findById(id: number): Promise<UserResDto | null> {
        try {
            return await prisma.userEntity.findUnique({
                where: { id },
            });
        } catch (error) {
            throw error;
        }
    }
}
