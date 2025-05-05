export default class UserResDto {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public profile_img: string | null,
        public created_at: Date
    ) {}
}
