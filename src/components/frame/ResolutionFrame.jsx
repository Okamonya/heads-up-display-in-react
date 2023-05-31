import React, { useEffect, useState } from 'react';
import './ResolutionFrame.css';
import image from '../../image/img1.jpg';
import image2 from '../../image/img2.jpg';
import image3 from '../../image/img3.jpg';
import Component from '../Component';
import Home from '../home/Home';
import Mail from '../mail/Mail';
import Calls from '../calls/Calls';
import Message from '../message/Message';
import { AiOutlineHome } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { LuPhoneCall } from 'react-icons/lu';

const ResolutionFrame = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    image,
    image2,
    image3
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [activeNave, setActiveNav] = useState('#home');


  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  //date & time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const showTodayDate = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1
    }/${currentDateTime.getFullYear()}`;

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
  };

  const showCurrentTime = formatTime(currentDateTime);

  // background Images
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex, backgroundImages]);

  const currentImage = backgroundImages[currentImageIndex];

  const renderComponent = () => {
    switch (activeNave) {
      case '#home':
        return <Home />;
      case '#mail':
        return <Mail />;
      case '#calls':
        return <Calls />;
      case '#message':
        return <Message />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-frame" style={{ backgroundImage: `url(${image3})` }}>
      <p className="time">
        {showCurrentTime} {showTodayDate}
      </p>
      <nav>
        <div className="curve"></div>
        <ul>
          <li>
            <Component
              icon={<AiOutlineHome />}
              onClick={() => setActiveNav('#home')}
              active={activeNave === '#home'}

            />
          </li>
          <li>
            <Component
              icon={<AiOutlineMail />}
              onClick={() => setActiveNav('#mail')}
              active={activeNave === '#mail'}

            />
          </li>
          <li>
            <Component
              icon={<LuPhoneCall />}
              onClick={() => setActiveNav('#calls')}
              active={activeNave === '#calls'}

            />
          </li>
          <li><Component
            icon={<FiMessageSquare />}
            onClick={() => setActiveNav('#message')}
            active={activeNave === '#message'}

          /></li>
        </ul>
      </nav>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ResolutionFrame;