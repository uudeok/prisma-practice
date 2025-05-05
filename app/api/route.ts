import { PrUserRepository } from '@/back/user/infra/PrUserRepository';
import { CreateUserUsecase } from '@/back/user/usecases/CreateUserUsecase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const repository = new PrUserRepository();
        const createUserUsecase = new CreateUserUsecase(repository);
        const result = await createUserUsecase.execute(body);

        console.log('route', result);

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json({ message: '에러 발생' }, { status: 500 });
    }
}
