import React, { useState } from 'react';

const colors = ['red', 'yellow', 'green']; // Danh sách màu đèn

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index hiện tại

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % colors.length); // Lặp lại khi vượt quá 2
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={handleNext} style={{ padding: '10px 20px', fontSize: '18px' }}>Next</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
        {colors.map((color, index) => (
          <div
            key={color}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid black',
              backgroundColor: activeIndex === index ? color : 'white',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
