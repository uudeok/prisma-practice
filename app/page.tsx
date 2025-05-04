'use client';

import { UserService } from '@/front/user/services/UserService';

export default function Home() {
    const handlerCreateUser = async () => {
        const userService = new UserService();
        const fakeData = {
            email: 'test@email.com',
            name: '아무개',
        };
        const result = await userService.createUser(fakeData);
        console.log('result', result);
    };

    return (
        <div>
            <button onClick={handlerCreateUser}>create user</button>
        </div>
    );
}
