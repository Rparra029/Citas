


export const Button = ({quotes, getRandomAll, color}) => {
  
  return (
    

      <div className="container">
        <div className="up">
            <div className="img-quote">
              <img src="./public/quote.png"alt="quotes"/>
            </div> 
            <div className="quote-text">
                <p className="quote" style={ {color: color }}>
                  {`${quotes.quote}`}
                </p>
            </div>
        </div>
        <div className="down">
            <p><span className="author" style={ {color: color }}>{`${quotes.author}`}</span></p>
            <button className="button" onClick={ getRandomAll } style={ {background: color}}> Change Quote </button>
        </div>
      </div>
    
    //</div>
  )
}

