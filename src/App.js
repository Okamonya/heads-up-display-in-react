import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation ';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [notification, setNotification] = useState(null);

  const handleNavigation = (direction) => {
    // Update the current position based on the direction
    switch (direction) {
      case 'left':
        setCurrentPosition({ x: currentPosition.x - 1, y: currentPosition.y });
        break;
      case 'right':
        setCurrentPosition({ x: currentPosition.x + 1, y: currentPosition.y });
        break;
      case 'up':
        setCurrentPosition({ x: currentPosition.x, y: currentPosition.y + 1 });
        break;
      case 'down':
        setCurrentPosition({ x: currentPosition.x, y: currentPosition.y - 1 });
        break;
      default:
        break;
    }
    setNotification(null);
  };

  const renderGrid = () => {
    const rows = [];

    for (let y = 5; y >= -5; y--) {
      const row = [];

      for (let x = -5; x <= 5; x++) {
        const cellClass =
          x === currentPosition.x && y === currentPosition.y
            ? 'cell active'
            : 'cell';

        row.push(<div key={`${x}-${y}`} className={cellClass}></div>);
      }

      rows.push(
        <div key={y} className="row">
          {row}
        </div>
      );
    }

    return rows;
  };

  const handleNotification = () => {
    const today = new Date();
    const formattedDate = today.toDateString();
    setNotification(formattedDate);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Smart Glasses App</h1>
      <div className="grid current-position">{renderGrid()}</div>
      <Navigation handleNavigation={handleNavigation} />
      <button onClick={handleNotification}>Show Today's Date</button>
      <div className="notification">{notification}</div>
    </div>
  );
};

export default App;

