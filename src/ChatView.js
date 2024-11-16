import React, { useEffect, useCallback } from 'react';
import './ChatView.css';
import { useSelector } from 'react-redux';
import { selectSelectedImage } from './features/appSlice';
import { useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage);
    const navigate = useNavigate();

    const exit = useCallback(() => {
        navigate("/chats", { replace: true });
    }, [navigate]);

    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage, exit]);

    return (
        <div className='chatView'>
            <img src={selectedImage} onClick={exit} alt='' />
            <div className='chatView__timer'>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={["#FFFC00", "#FF6347", "#1CA1F3", "#FF69B4"]}
                    colorsTime={[0.33, 0.33, 0.33, 0.33]}
                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            exit();
                        }

                        return remainingTime;
                    }}
                </CountdownCircleTimer>
            </div>
        </div>
    );
}

export default ChatView;
