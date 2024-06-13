import React, { useState } from 'react'
import cross from '../assets/cross.png'
import circle from '../assets/circle.png'
let data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {

    let [count, setcount] = useState(0);
    let [lock, setLock] = useState(false)

    const toggle = (e, num) =>{
    if(lock) {
        return 0;
    }else if(count%2==0){
        e.target.innerHTML = `<img src='${circle}' alt='circle' />`;
        data[num] ="x";
        setcount(++count)
    }else {
        e.target.innerHTML = `<img src='${cross}' alt='circle' />`;
        data[num] ="o";
        setcount(++count)
    }

    }
  return (
    <div>
      <div className="wrapper">
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
      <div className="center">

        <div className='tictac'>
        <div className="row1">
            <div className="boxes" onClick={(e)=> {toggle(e, 0)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 1)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 2)}}></div>
        </div>
        <div className="row2">
            <div className="boxes" onClick={(e)=> {toggle(e, 3)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 4)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 5)}}></div>
        </div>
        <div className="row3">
            <div className="boxes" onClick={(e)=> {toggle(e, 6)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 7)}}></div>
            <div className="boxes" onClick={(e)=> {toggle(e, 8)}}></div>
        </div>
        </div>
    
        </div>

        <div className='center'>
        <button className='btn'>Reset</button>
        </div>
      </div>

      

    </div>
  )
}

export default Tictactoe
