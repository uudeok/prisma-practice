'use server';

import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import { PrUserRepository } from '../infra/PrUserRepository';
import { CreateUserUsecase } from '../usecases/CreateUserUsecase';
import { GetUserUsecase } from '../usecases/GetUserUsecase';
import UserResDto from '@/dto/response/UserResDto';
import { UserDto } from '../usecases/dto/UserDto';
import { BaseError } from '@/errors/BaseError';

export type Result<T> = { ok: boolean; error?: BaseError; body?: T };

export async function createUserAction(formData: UserCreateReqDto): Promise<UserResDto> {
    const prUserRepository = new PrUserRepository();
    const createUserUsecase = new CreateUserUsecase(prUserRepository);

    try {
        return await createUserUsecase.execute(formData);
    } catch (error) {
        throw error;
    }
}

export async function getUserAction(id: number): Promise<UserDto> {
    const prUserRepository = new PrUserRepository();
    const getUserUsecase = new GetUserUsecase(prUserRepository);

    try {
        return await getUserUsecase.execute(id);
    } catch (error) {
        throw error;
    }
}
