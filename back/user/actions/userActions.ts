import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import { PrUserRepository } from '../infra/PrUserRepository';
import { CreateUserUsecase } from '../usecases/CreateUserUsecase';
import { GetUserUsecase } from '../usecases/GetUserUsecase';

export async function createUserAction(formData: UserCreateReqDto) {
    'use server';
    const prUserRepository = new PrUserRepository();
    const usecase = new CreateUserUsecase(prUserRepository);

    try {
        return await usecase.execute(formData);
    } catch (error) {
        throw error;
    }
}

export async function getUserByIdAction(id: number) {
    'use server';
    const repository = new PrUserRepository();
    const usecase = new GetUserUsecase(repository);

    try {
        return await usecase.execute(id);
    } catch (error) {
        throw error;
    }
}
