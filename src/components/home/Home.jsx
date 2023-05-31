import { useEffect, useState } from "react";
import { MdOutlineDirectionsWalk, MdOutlineTimer } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'
import './Home.css'
import Popup from "../Popup";
import Notification from '../notification/Notification'

const Home = () => {
    const [contentVisible, setContentVisible] = useState(true);
    const [timedPopup, setTimedPopup] = useState(false)

    //message popup 
    useEffect(() => {
        const timer = setInterval(() => {
            setTimedPopup(true);
        }, 7000);

        return () => {
            clearInterval(timer);
        };
    }, [timedPopup]);

    // home timer
    useEffect(() => {
        const timeout = setTimeout(() => {
            setContentVisible(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {contentVisible && (
                <div>
                    {
                        <>
                            <div className="home">
                                <div className="home__card">
                                    <div className="home__health">
                                        <h1>health</h1>
                                        <div className="health__data">
                                            <div className="steps">
                                                <MdOutlineDirectionsWalk className="icon" /> <p> 1000<span> steps</span></p>
                                            </div>
                                            <div className="rate">
                                                <AiFillHeart className="icon" /> <p>  89<span> bpm</span></p>
                                            </div>
                                            <div className="timer">
                                                <MdOutlineTimer className="icon" /> <p> 89:63<span> min</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            )}
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <Notification closePopup={setTimedPopup} />
            </Popup>
        </div>
    );
}

export default Home;