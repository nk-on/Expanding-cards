import './Card.css'
export default function Card({ imageSrc, id,activeIndex,setActiveIndex}) {
    return (
      <div className = {`Card ${id === activeIndex ? 'Expanded': ''}`} onClick ={()=> setActiveIndex(id)} style={{background:`url(${imageSrc})`}}>
        
      </div>
    );
}