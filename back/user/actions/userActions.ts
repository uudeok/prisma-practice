'use server';

import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import { PrUserRepository } from '../infra/PrUserRepository';
import { CreateUserUsecase } from '../usecases/CreateUserUsecase';
import { GetUserUsecase } from '../usecases/GetUserUsecase';
import UserResDto from '@/dto/response/UserResDto';
import { UserDto } from '../usecases/dto/UserDto';

export type Result<T> = { ok: boolean; error: AcionError; body?: T };

// class AcionError extends Error {
//     constructor(
//         public errorCode: number,
//         public statusCode: number,
//         public message?: string,
//     ) {
//         super(this)
//     }
// }

export async function createUserAction(formData: UserCreateReqDto): Promise<UserResDto> {
    const prUserRepository = new PrUserRepository();
    const createUserUsecase = new CreateUserUsecase(prUserRepository);

    try {
        return await createUserUsecase.execute(formData);
    } catch (error) {
        return { ok: false, error: error, body: null };
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

// export async function createUserAction(formData: UserCreateReqDto): Promise<Result<UserResDto, BaseError>> {
//     const prUserRepository = new PrUserRepository();
//     const createUserUsecase = new CreateUserUsecase(prUserRepository);

//     try {
//         return await createUserUsecase.execute(formData);
//     } catch (error) {
//         if (error instanceof BaseError) {
//             return { ok: false, error };
//         }

//         return {
//             ok: false,
//             error: createAppError(ErrorCode.UNKNOWN),
//         };
//     }
// }

// export async function getUserAction(id: number): Promise<Result<UserDto, BaseError>> {
//     const repository = new PrUserRepository();
//     const usecase = new GetUserUsecase(repository);

//     try {
//         return await usecase.execute(id);
//     } catch (error) {
//         if (error instanceof BaseError) {
//             return { ok: false, error };
//         }

//         return {
//             ok: false,
//             error: createAppError(ErrorCode.UNKNOWN),
//         };
//     }
// }
