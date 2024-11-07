import { useState } from 'react';
import './App.css';

function App() {
  const images = [
    {
      id: 0,
      src: 'src/assets/Beach.avif',
    },
    {
      id: 1,
      src: 'src/assets/Bridge.avif',
    },
    {
      id: 2,
      src: 'src/assets/Forest.avif',
    },
    {
      id: 3,
      src: 'src/assets/Mountains.avif',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="Container">
        {images.map((image) => {
          return <Card key={image.id} imageSrc={image.src} id = {image.id} activeIndex = {activeIndex} setActiveIndex = {setActiveIndex}/>;
        })}
      </div>
    </>
  );
}
function Card({ imageSrc, id,activeIndex,setActiveIndex}) {
    return (
      <div className = {`Card ${id === activeIndex ? 'Expanded': ''}`} onClick ={()=> setActiveIndex(id)} style={{background:`url(${imageSrc})`}}>
        
      </div>
    );
}
export default App;
