import { LikeRepository,TweetRepository } from "../repository/index.js";


class LikeService{
 constructor(){
    this.likeRepository=new LikeRepository()
    this.tweetRepository=new TweetRepository()
 }

    async toggleLike(modelId,modelType,userId){
        console.log(modelId,modelType,userId);
        if(modelType=='Tweet'){
            var likeable=await this.tweetRepository.find(modelId)
            console.log(likeable);
        }
        else if(modelType=='Comment'){
            //todo

        }
        else{
            throw new Error('unknown model type')
        }
        const exists=await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        console.log("existss",exists);
        if(exists){
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.deleteOne()
            var isAdded=false
        }
        else{
            const newLike=await this.likeRepository.create({
             user:userId,
             onModel:modelType,
             likeable:modelId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded=true
        }
        return isAdded
    }
}
export default LikeService