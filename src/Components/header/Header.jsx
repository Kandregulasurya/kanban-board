import React , {useState,useEffect}from 'react';
import { MdLightMode , MdDarkMode } from "react-icons/md";
import './Header.css';

export default function Header() {
    const [dark,setdark]=useState(false);
        useEffect(()=>{
            document.body.className = dark ? "dark":"";},[dark]);
            console.log("toggle")
  return (
    <header className='header'>
        <div className='title'>
            <h1>Kanban Board</h1>
        </div>
        <div className='task-btn'>
            <button onClick={() => setdark(!dark)} className='btn-header'>
                    {dark ? <MdLightMode/> : <MdDarkMode /> }
                </button>
        </div>
    </header>
  )
}

