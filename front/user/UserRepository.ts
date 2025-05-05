import UserCreateReqDto from '../../dto/request/UserCreateReqDto';
import UserResDto from '../../dto/response/UserResDto';

export interface UserRepository {
    createUser(user: UserCreateReqDto): Promise<UserResDto>;
}
