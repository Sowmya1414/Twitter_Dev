const express=require('express')
const connect=require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const app=express()
const Comment=require('./models/comment')
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect()
    console.log('Mongodb connected');
    // const tweet=await Tweet.create({
    //     content:'3rd tweet',
       
    // })
    // const tweets=await Tweet.find({userEmail:'a@b.com'})
    const tweetRepo=new TweetRepository()
    const tweet=await tweetRepo.getWithComment('6522c2a95c36f9102a393d05')
    console.log(tweet);

})