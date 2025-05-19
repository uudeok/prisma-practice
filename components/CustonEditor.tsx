'use client';

import styles from './CustomEditor.module.scss';
import { useState } from 'react';
import MDEditor, { commands as defaultCommands, ICommand } from '@uiw/react-md-editor';

function CustomEditor() {
    const [value, setValue] = useState<string | undefined>('');
    const [title, setTitle] = useState<string>('');

    const submitPost = async () => {
        if (!title || !value) return;

        const newData = {
            title: title,
            content: value,
        };

        const result = await fetch('/api/members/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        console.log(result);
    };

    const handleImageUpload = async (files: File[]): Promise<string[]> => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('img', file); // 서버에서 'img' 필드로 받고 있으므로
        });

        const res = await fetch('/api/s3-upload', {
            method: 'POST',
            body: formData,
        });

        if (!res.ok) {
            throw new Error('이미지 업로드 실패');
        }

        const data = await res.json();
        return Array.isArray(data.data) ? data.data : [data.data]; // 항상 배열로 반환
    };

    const imageUploadCommand: ICommand = {
        name: 'upload-image',
        keyCommand: 'upload-image',
        buttonProps: { 'aria-label': '이미지 업로드' },
        icon: <span>이미지</span>,
        execute: async (_state, api) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.multiple = true;

            input.onchange = async () => {
                const files = input.files ? Array.from(input.files) : [];

                if (files.length === 0) return;

                const urls = await handleImageUpload(files);

                const insertText = urls.map((url) => `![alt text](${url})`).join('\n');

                // 👉 여러 이미지 마크다운 삽입
                api.replaceSelection(insertText);

                // 👉 커서 위치 조정
                const newPosition = api.textArea.textLength;
                api.setSelectionRange({
                    start: newPosition,
                    end: newPosition,
                });
            };

            input.click();
        },
    };

    const customCommands: ICommand[] = [
        defaultCommands.title1,
        defaultCommands.title2,
        defaultCommands.title3,
        defaultCommands.title4,
        defaultCommands.divider,
        defaultCommands.bold,
        defaultCommands.italic,
        defaultCommands.strikethrough,
        defaultCommands.divider,
        defaultCommands.link,
        imageUploadCommand,
        defaultCommands.divider,
        defaultCommands.code,
        defaultCommands.quote,
        defaultCommands.hr,
        defaultCommands.unorderedListCommand,
        defaultCommands.orderedListCommand,
    ];

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="제목을 작성해주세요"
                className={styles.titleInput}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <div data-color-mode="light" className={styles.editorLayout}>
                <MDEditor
                    value={value}
                    onChange={setValue}
                    height={800}
                    commands={customCommands}
                    extraCommands={[]} // 오른쪽 툴바
                    visibleDragbar={false} // 드래그 안보이도록
                    enableScroll={true} // 스크롤
                    textareaProps={{
                        placeholder: '생각을 작성해주세요..',
                    }}
                />
            </div>

            <button onClick={submitPost}>발행하기</button>
        </div>
    );
}

export default CustomEditor;
