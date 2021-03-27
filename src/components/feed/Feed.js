import React from "react";
import "./Feed.css";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";
import StoryReel from "./storyreel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/2356330?v=4"
        message="Wowww this works"
        username="Ashish Singh"
        image="https://i.imgur.com/3IdKRJg.jpeg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/2356330?v=4"
        message="Wowww this works"
        username="Ashish Singh"
        image="https://i.imgur.com/RqS77bc.jpeg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/2356330?v=4"
        message="Wowww this works"
        username="Ashish Singh"
        image="https://i.imgur.com/7XGaQwy.jpeg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/2356330?v=4"
        message="Wowww this works"
        username="Ashish Singh"
        image="https://i.imgur.com/mokNny1.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/2356330?v=4"
        message="Wowww this works"
        username="Ashish Singh"
        image="https://i.imgur.com/QbMSPjR.jpg"
      />
    </div>
  );
}

export default Feed;
