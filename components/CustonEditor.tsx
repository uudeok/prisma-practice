'use client';

import styles from './CustomEditor.module.scss';
import { useEffect, useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Label from '@/shared/Label';
import Input from '@/shared/Input';
import { createPost, getPostDetail } from '@/back/posts/actions/postsActions';

export type PostDto = {
    id: number;
    content: string;
    title: string;
    created_at: Date;
};

function CustomEditor() {
    const [value, setValue] = useState<string | undefined>('');
    const [title, setTitle] = useState<string>('');
    const [initialData, setInitialData] = useState<PostDto>();

    console.log(initialData);

    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getInitialPost = async () => {
            const data = await getPostDetail(1);
            if (!data) return;
            if (data) {
                setInitialData(data);
                setTitle(data.title);
                setValue(data.content);
            }
        };

        getInitialPost();
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!value || !title) return;

        await createPost({ title, content: value });
    };

    const handleImageUpload = async (file: File): Promise<string> => {
        // 여기에 S3 업로드 로직 넣기
        const formData = new FormData();
        formData.append('file', file);

        // 예시: presigned URL을 받아서 업로드하는 방식
        const { url, key } = await fetch('/api/get-presigned-url', {
            method: 'POST',
            body: JSON.stringify({ filename: file.name }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());

        await fetch(url, {
            method: 'PUT',
            body: file,
        });

        return `https://your-s3-bucket.s3.amazonaws.com/${key}`; // 실제 주소 리턴
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const url = await handleImageUpload(file);
            insertImageMarkdown(url);
        }
    };

    const handlePaste = async (event: React.ClipboardEvent<HTMLDivElement>) => {
        const file = Array.from(event.clipboardData.items)
            .find((item) => item.type.startsWith('image/'))
            ?.getAsFile();
        if (file) {
            const url = await handleImageUpload(file);
            insertImageMarkdown(url);
        }
    };

    const insertImageMarkdown = (url: string) => {
        const markdownImage = `![image](${url})`;
        setValue((prev) => prev + `\n${markdownImage}`);
    };

    return (
        <div className={styles.container}>
            <Label label="작성하실 글의 제목을 지어주세요">
                <Input variant="outlined" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Label>

            <div
                data-color-mode="light"
                ref={editorRef}
                className={styles.layout}
                onDrop={handleDrop}
                onPaste={handlePaste}
                onDragOver={(e) => e.preventDefault()}
            >
                <MDEditor value={value} onChange={setValue} height={700} />
            </div>

            <button className={styles.btn} type="submit" onClick={handleSubmit}>
                작성하기
            </button>
        </div>
    );
}

export default CustomEditor;
