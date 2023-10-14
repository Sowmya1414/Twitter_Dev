const {TweetRepository}=require('../repository/index')

class TweetService{
constructor(){
    this.tweetRepository=new TweetRepository()
}

    async create(data){
        const content=data.content
        const tags=content.match(/#(\w+)/g)//this regex extrct hashtags
        tags=tags.map((tag)=>tag.substring(1))
        console.log(tags);
        const tweet=await this.tweetRepository.create(data)
        //todo create hashtags and add here

        /**
         * 1. bulkcreate in mongoose
         * 2. filtr title of the hashtag based on multiple tags
         * 3. how to add tweet id inside all the hashtags
         */
        return tweet
    }
}
module.exports=TweetService

/*
* this is my #first #tweet . i am really #excited
 */