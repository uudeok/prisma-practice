'use client';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

const CustomEditor = () => {
    return (
        <div>
            <Editor
                initialValue="hello jenny"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={false}
            />
        </div>
    );
};

export default CustomEditor;
