import React from 'react'
import Story from './story/Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.imgur.com/wEr3Yjp.jpeg" profileSrc="https://avatars.githubusercontent.com/u/2356330?v=4" title="Ashish"/>
            <Story image="https://i.imgur.com/82zIhJo.jpeg" profileSrc="https://avatars.githubusercontent.com/u/2356330?v=4" title="Ashish"/>
            <Story image="https://i.imgur.com/Ex381up.jpg" profileSrc="https://avatars.githubusercontent.com/u/2356330?v=4" title="Ashish"/>
            <Story image="https://i.imgur.com/YhJVHaE.jpg" profileSrc="https://avatars.githubusercontent.com/u/2356330?v=4" title="Ashish"/>
            <Story image="https://i.imgur.com/0onOaH5.jpg" profileSrc="https://avatars.githubusercontent.com/u/2356330?v=4" title="Ashish"/>
        </div>
    )
}

export default StoryReel
