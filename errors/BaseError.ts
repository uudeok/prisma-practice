export enum ErrorCode {
    'USER_CREATION_FAILED' = '사용자 생성에 실패했습니다.',
    'DUPLICATE' = '이미 존재하는 데이터 입니다.',
    'UNAUTHORIZED' = '인증되지 않은 접근입니다.',
    'UNKNOWN' = '알 수 없는 오류가 발생했습니다.',
}

export class BaseError extends Error {
    constructor(public code: ErrorCode, public message: string, public statusCode: number = 400) {
        super(message);
        // this.name = 'BaseError';
    }
}

export const ErrorRegistry: Record<
    ErrorCode,
    {
        statusCode: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        message: (params?: any) => string;
    }
> = {
    [ErrorCode.UNAUTHORIZED]: {
        statusCode: 401,
        message: () => `권한이 없습니다`,
    },
    [ErrorCode.UNKNOWN]: {
        statusCode: 500,
        message: () => `알 수 없는 에러가 발생했습니다.`,
    },
    [ErrorCode.DUPLICATE]: {
        statusCode: 409,
        message: (params) => `${params?.target?.join(', ')} 필드는 이미 존재합니다.`,
    },
    [ErrorCode.USER_CREATION_FAILED]: {
        statusCode: 500,
        message: () => `유저 생성에 실패했습니다.`,
    },
    // ...더 추가 가능
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAppError(code: ErrorCode, params?: any): BaseError {
    const entry = ErrorRegistry[code];

    if (!entry) {
        throw new Error(`등록되지 않은 에러 코드: ${code}`);
    }

    return new BaseError(code, entry.message(params), entry.statusCode);
}
