import {React, useState,useEffect} from 'react'
import './CursorShadow.css';

const CursorShadow = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const updateCursorPosition = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);
  
    return (
      <div className="cursor-shadow" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
    );
}

export default CursorShadow