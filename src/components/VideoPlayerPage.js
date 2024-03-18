import React, { useRef, useEffect } from 'react';

const VideoPlayerPage = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayerPage;

