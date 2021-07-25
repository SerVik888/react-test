import React from 'react';
import './App.css';
import ColoredUserpic from './ColoredUserpic';

const App = () => {
  return (
    <div className="appWrapper">
      <ColoredUserpic
        src='./reactTest.jpg'
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
