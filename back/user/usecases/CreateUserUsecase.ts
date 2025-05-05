import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';
import { UserRepository } from '../repositories/UserRepository';

export class CreateUserUsecase {
    constructor(private userRepository: UserRepository) {}

    async execute(dto: UserCreateReqDto): Promise<UserResDto> {
        const user = await this.userRepository.createUser(dto);

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            profile_img: user.profile_img,
            created_at: user.created_at,
        };
    }
}

// import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
// import UserResDto from '@/dto/response/UserResDto';
// import { UserRepository } from '../repositories/UserRepository';

// export class CreateUserUsecase {
//     constructor(private userRepository: UserRepository) {}

//     async execute(dto: UserCreateReqDto): Promise<UserResDto> {
//         return this.userRepository.createUser(dto);
//     }
// }
