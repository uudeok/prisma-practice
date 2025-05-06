export enum ErrorCode {
    UNAUTHORIZED = 'unauthorized',
    UNKNOWN = 'unknown',
    DUPLICATE = 'duplicate',
    USER_CREATION_FAILED = 'user_creation_failed',
}

export class BaseError extends Error {
    constructor(
        public code: ErrorCode,
        public message: string,
        public statusCode: number = 400 // optional HTTP status code
    ) {
        super(message);
        this.name = 'BaseError';
    }
}
