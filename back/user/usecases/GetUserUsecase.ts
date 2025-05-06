import dayjs from 'dayjs';
import { UserRepository } from '../domain/repositories/UserRepository';
import { UserDto } from './dto/UserDto';

export class GetUserUsecase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: number): Promise<UserDto> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw '유저 권한이 없습니다';
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            profileImg: user.profile_img,
            createdAt: dayjs(user.created_at).format('YYYY-MM-DD'),
        };
    }
}
