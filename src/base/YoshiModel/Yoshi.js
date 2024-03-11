import { useState } from 'react';
import yoshi_image from '../../media/yoshi.png'
import './Yoshi.css'

export default function Yoshi(){

    var [score, setScore] = useState(0);

    var randomX = Math.random() * window.innerWidth + 10;
    var randomY = Math.random() * window.innerHeight + 10;

    randomX = (randomX > window.innerWidth - 200 ? window.innerWidth - 200 : randomX);
    randomY = (randomY > window.innerHeight - 200 ? window.innerHeight - 200: randomY);

    function map( x,  in_min,  in_max,  out_min,  out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    var yoshiOpacity = 0;
    window.onmousemove = (mouse) =>{
        var mouseX = mouse.clientX;
        var mouseY = mouse.clientY;

        yoshiOpacity = Math.sqrt(Math.pow(mouseX - randomX, 2) + Math.pow(randomY - mouseY, 2));
        yoshiOpacity = map(yoshiOpacity, 0, 2500, 1, 0);
        console.log(yoshiOpacity)

        document.getElementById("yoshi").style.opacity = yoshiOpacity - 0.8;
    }

    window.onresize = () =>{
        randomX = Math.random() * window.innerWidth + 10;
        randomY = Math.random() * window.innerHeight + 10;
        document.getElementById("yoshi").style.top = randomY + "px";
        document.getElementById("yoshi").style.left = randomX + "px";
    }

    const yoshi = <>
        <img src={yoshi_image} 
             id='yoshi'
            style={{ top: randomY, left: randomX, opacity: yoshiOpacity }}
            onClick={()=>{
                setScore(++score);
                alert(`${score} Yoshis found! Find him again!`);
                randomX = Math.random() * window.innerWidth + 10;
                randomY = Math.random() * window.innerHeight + 10;
                document.getElementById("yoshi").style.top = randomY + "px";
                document.getElementById("yoshi").style.left = randomX + "px";
            }}
        ></img>
    </>;

    return (yoshi)
}