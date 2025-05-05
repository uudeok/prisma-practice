import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';

export interface UserRepository {
    createUser(userCreateDto: UserCreateReqDto): Promise<UserResDto>;
    findById(id: number): Promise<UserResDto | null>;
}
