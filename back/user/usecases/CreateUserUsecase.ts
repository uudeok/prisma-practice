import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';
import { UserRepository } from '../domain/repositories/UserRepository';

export class CreateUserUsecase {
    constructor(private userRepository: UserRepository) {}

    async execute(userCreateReqDto: UserCreateReqDto): Promise<UserResDto> {
        const user = await this.userRepository.createUser(userCreateReqDto);

        if (!user) {
            throw '유저 생성에 실패했습니다';
        }

        return user;
    }
}
