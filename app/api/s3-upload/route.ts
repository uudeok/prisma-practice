import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { NextRequest } from 'next/server';

const Bucket = process.env.AWS_BUCKET_NAME;

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SCREAT_KEY as string,
    },
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll('img') as File[];

        // 업로드할 이미지 파일 수 제한
        if (files.length > 3) {
            return new Response(
                JSON.stringify({
                    message: '한번에 업로드할 수 있는 이미지 파일의 수는 최대 3장입니다.',
                }),
                { status: 400 }
            );
        }

        // 이미지 파일을 S3에 업로드
        const uploadPromises = files.map(async (file) => {
            const Body = Buffer.from(await file.arrayBuffer());
            const Key = file.name;
            const ContentType = file.type || 'image/jpeg';

            const upload = new Upload({
                client: s3,
                params: {
                    Bucket,
                    Key,
                    Body,
                    ContentType,
                },
            });

            const result = await upload.done();
            return result.Location; // ✅ 실제 S3 URL 반환
        });

        const imgUrls = await Promise.all(uploadPromises);

        // 파일의 개수가 1이면 배열 대신 단일 URL 반환
        if (imgUrls.length === 1) {
            return new Response(JSON.stringify({ data: imgUrls[0], message: 'OK' }), {
                status: 200,
            });
        }

        // 파일 개수가 여러개면 URL 배열 반환
        return new Response(JSON.stringify({ data: imgUrls, message: 'OK' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error uploading files:', error);
        return new Response(JSON.stringify({ message: '파일 업로드 중 오류가 발생했습니다.' }), { status: 500 });
    }
}
