import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';
import { UserRepository } from '../repositories/UserRepository';
import prisma from '@/back/config/prisma';

export class PrUserRepository implements UserRepository {
    async createUser(userCreateDto: UserCreateReqDto): Promise<UserResDto> {
        return await prisma.userEntity.create({ data: userCreateDto });
    }

    async findById(id: number): Promise<UserResDto | null> {
        return await prisma.userEntity.findUnique({
            where: { id },
        });
    }
}
