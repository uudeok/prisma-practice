export class UserDto {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public profileImg: string | null,
        public createdAt: string
    ) {}
}
