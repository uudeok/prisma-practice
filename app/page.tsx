import { getUserAction } from '@/back/user/actions/userActions';

import SignupForm from './SingupForm';

export default async function Home() {
    const user = await getUserAction(8);
    console.log('user : ', user);

    return (
        <div>
            <SignupForm />
        </div>
    );
}
