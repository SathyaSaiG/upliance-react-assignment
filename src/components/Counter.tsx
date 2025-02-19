import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Animation using react-spring for fade-in effect
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 } // 2 seconds duration
  });
  

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);

  // Map the count to a background color intensity
  const backgroundColor = `rgba(0, 123, 255, ${Math.min(count / 10, 1)})`;

  // Cast animated.div as any to bypass the TS children type error
  const AnimatedDiv = animated.div as any;

  return (
    <AnimatedDiv
      style={{
        ...fadeIn,
        backgroundColor,
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center'
      }}
    >
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrement} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </AnimatedDiv>
  );
};

export default Counter;
