import dayjs from 'dayjs';
import { UserRepository } from '../repositories/UserRepository';
import { UserDto } from './dto/UserDto';

export class GetUserUsecase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: number): Promise<UserDto> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw Error('찾는 데이터가 없습니다.');
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
