import React, { Component } from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => { // props.video
   const videoRenderList =  videos.map ((video) =>{
        return <VideoItem 
                    alt={video.snippet.title}
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect}  
                    video={video}
                />
    });
    return <div className="ui relaxed divided list">{videoRenderList}</div>
};

export default VideoList;