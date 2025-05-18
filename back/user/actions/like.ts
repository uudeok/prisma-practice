export interface Status {
    like(postLike: PostLike): void;
    unlike(postLike: PostLike): void;
}

export class LikeStatus implements Status {
    like(postLike: PostLike): void {
        console.log('이미 좋아요를 눌렀습니다.');
        console.log(postLike);
    }

    unlike(postLike: PostLike): void {
        console.log('좋아요를 취소 했습니다.');
        postLike.setLikeStatus(new UnLikeStatus());
    }
}

export class UnLikeStatus implements Status {
    like(postLike: PostLike): void {
        console.log('좋아요를 눌렀습니다.');
        postLike.setLikeStatus(new LikeStatus());
    }

    unlike(postLike: PostLike): void {
        console.log('이미 좋아요 취소 되었습니다.');
        console.log(postLike);
    }
}

export class PostLike {
    private likeStatus: Status;

    constructor() {
        this.likeStatus = new UnLikeStatus();
    }

    public setLikeStatus(status: Status) {
        this.likeStatus = status;
    }

    like() {
        this.likeStatus.like(this);
    }

    unlike() {
        this.likeStatus.unlike(this);
    }
}
