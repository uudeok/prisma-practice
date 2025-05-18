import SignupForm from '@/components/SingupForm';
import Editor from '../components/Editor';
import PlateEditor from '@/components/PlateEditor';

export default async function Home() {
    return (
        <div>
            <PlateEditor />
            {/* <SignupForm /> <Editor /> */}
        </div>
    );
}
