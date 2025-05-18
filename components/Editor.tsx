'use client';

import dynamic from 'next/dynamic';

const CustomEditor = dynamic(() => import('./CustonEditor'), { ssr: false });

const MarkdownEditor = () => {
    return (
        <div>
            <CustomEditor />
        </div>
    );
};

export default MarkdownEditor;
