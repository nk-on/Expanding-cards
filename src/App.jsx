import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const images = [
    {
      id: 1,
      src: 'src/assets/Beach.avif',
    },
    {
      id: 2,
      src: 'src/assets/Bridge.avif',
    },
    {
      id: 3,
      src: 'src/assets/Forest.avif',
    },
    {
      id: 4,
      src: 'src/assets/Mountains.avif',
    },
  ];
  return (
    <>
      <div className="Container">
        {images.map((image) => {
          return <Card key={image.id} imageSrc={image.src} />;
        })}
      </div>
    </>
  );
}
function Card({ imageSrc }) {
  return (
    <div className= 'Card'>
    </div>
  );
}
export default App;
