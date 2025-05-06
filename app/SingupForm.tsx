'use client';

import { createUserAction } from '@/back/user/actions/userActions';
import UserCreateReqDto from '@/dto/request/UserCreateReqDto';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
    const { register, handleSubmit } = useForm<UserCreateReqDto>();

    const onSubmit = async (data: UserCreateReqDto) => {
        const result = await createUserAction(data);
        console.log('result : ', result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">이름</label>
            <input id="name" type="text" {...register('name', { required: true })} />

            <label htmlFor="email">이메일</label>
            <input
                id="email"
                type="email"
                {...register('email', {
                    required: true,
                })}
            />

            <button type="submit">회원가입</button>
        </form>
    );
};

export default SignupForm;
