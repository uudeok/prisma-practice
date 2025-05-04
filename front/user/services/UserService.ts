/** 이해를 돕기 위한 주석
 * Sb 역할, 실제 DB 에 접촉
 * 근데 여기선 DB 에 접촉하는게 아니라 API route 로 전달하는 역할만 한다
 * fetch 를 추상화 하는 클래스를 하나 더 만들어도 좋다
 * front 에서 인터페이스를 구현해놓고 service 에서 구현하도록 강제
 */

import UserCreateReqDto from '../dto/request/UserCreateReqDto';
import UserResDto from '../dto/response/UserResDto';
import { UserRepository } from '../UserRepository';

export class UserService implements UserRepository {
    async createUser(user: UserCreateReqDto): Promise<UserResDto> {
        try {
            const fakeCreateUser = {
                email: user.email,
                name: user.name,
                profileImg: user.profileImg,
            };

            const data = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fakeCreateUser),
            });

            return data.json();
        } catch (error) {
            // 에러 처리 로직 작성
            throw error;
        }
    }
}
