import { User } from "../../entities/user";
import { postRepository } from "../repositories/postRepository";

export class PostUseCase {
    constructor(private postRepository: postRepository) {}
    async addPost(
        images: string[],
        caption: string,
        user: User
    ): Promise<boolean> {
        return await this.postRepository.createPost(images, caption, user)
    }
    async getAllPosts() {
        return await this.postRepository.getAllPost()
    }
    async likePost(user: any, postid: string) {
        return await this.postRepository.likePost(user, postid)
    }
    async unlikePost(user: any, postid: string) {
        return await this.postRepository.unlikePost(user, postid)
    }

    async commentPost(postid:string, comment:string, userid:string){
        return await this.postRepository.commentPost(postid,comment,userid)
    }

    async showComments(id:string){
        return await this.postRepository.showComments(id)
    }
    async showLikes(id:string){
      return await this.postRepository.showLikes(id)
    }
}
