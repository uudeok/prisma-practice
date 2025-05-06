import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import UserResDto from '@/dto/response/UserResDto';

/** UserRepository 인터페이스
 * 데이터에 접근하는 동작은 이 함수로 한다는 규칙만 정의
 * 데이터가 어디서 오든 신경쓰지 않도록 한다 (prisma, supabase 등 어떤 걸 사용해도 인터페이스를 구현하면 된다)
 */

export interface UserRepository {
    createUser(userCreateDto: UserCreateReqDto): Promise<UserResDto>;
    findById(id: number): Promise<UserResDto | null>;
}
