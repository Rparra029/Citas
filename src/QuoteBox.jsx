
import { useState } from "react";
import { Button } from "./Button";
import DataJson from "./json/quotes.json";
import colors from "./assets/js/colors";

const getRandom = ( array )=>{
    const random = Math.floor( Math.random() * array.length );
    return array[random]

}

export const QuoteBox = ( ) => {

    let quoteRandom = getRandom(DataJson);
    let colorRandom = getRandom(colors);
    const [quotes, setQuotes] = useState(quoteRandom);
    const [color, setColor] = useState(colorRandom);
    
    const objStyle ={
      backgroundColor: color,
      Hovered:
        `backgroundColor: color`
    }
    console.log(color)
    const getRandomAll = () =>{
      quoteRandom = getRandom(DataJson);
      colorRandom = getRandom(colors);
    
      setQuotes(quoteRandom);
      setColor(colorRandom);
    }
    document.body.style = `background: ${color}`;

  return (
    <div className="content">

      <Button background={ objStyle } getRandomAll={ getRandomAll } quotes= { quotes } color = { color }/>
    
    </div>
  )

}
