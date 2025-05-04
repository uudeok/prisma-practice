import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        console.log(req);

        // 서버에 요청을 보내는 로직 추후 작성

        return NextResponse.json({ message: '성공했습니다' });
    } catch (error) {
        console.log(error);
    }
}
