export class CreatePostDto {
    constructor(public id: number, public title: string, public content: string, public createdAt: Date) {}
}
