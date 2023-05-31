import React from 'react';

function Component({ icon, onClick, active }) {
  return (
    <div className={`component ${active ? 'active' : ''}`} onClick={onClick}>
      {icon}
    </div>
  );
}

export default Component;