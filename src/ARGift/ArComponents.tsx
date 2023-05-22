import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@react-three/drei';

interface GiftBoxProps {
  onClick: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onClick }) => {
  return (
    <Box args={[1, 1, 1]} onClick={onClick}>
      <meshStandardMaterial color="red" />
    </Box>
  );
};

const App: React.FC = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [result, setResult] = useState('');

  const handleClick = (boxIndex: number) => {
    if (isGameOver) return;

    setSelectedBox(boxIndex);

    const randomValue = Math.random();

    if (randomValue < 0.05) {
      setResult('Congratulations! You won 5% off!');
    } else if (randomValue < 0.1) {
      setResult('Congratulations! You won 10% off!');
    } else if (randomValue < 0.11) {
      setResult('Congratulations! You won $100 promotion!');
    } else {
      setResult('Oops! Better luck next time!');
    }

    setIsGameOver(true);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GiftBox onClick={() => handleClick(0)} />
        <GiftBox onClick={() => handleClick(1)} />
        <GiftBox onClick={() => handleClick(2)} />
      </Canvas>
      <div style={{ position: 'absolute', bottom: '20px', textAlign: 'center' }}>
        {isGameOver ? (
          <>
            <h3>{result}</h3>
            <button onClick={() => window.location.reload()}>Play Again</button>
          </>
        ) : (
          <h3>Choose a gift box!</h3>
        )}
      </div>
    </div>
  );
};

export default App;
