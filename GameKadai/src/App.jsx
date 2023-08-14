import { useState } from 'react';
import './App.css';

function App() {
  const randomNum = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState(randomNum());
  const [item, setItem] = useState('');
  const [arr, setArr] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGetValueClick = () => {
    if (!isGameOver) {
      const parsedItem = parseInt(item); 
      if (!isNaN(parsedItem)) {
        const updatedArr = [...arr, parsedItem];
        setArr(updatedArr);
        setItem('')

        if (updatedArr.length >= 4) {
          setIsGameOver(true);
        }
      }
    }
  };

  const handleResetClick = () => {
    setItem('');
    setArr([]);
    setIsGameOver(false);
    setRandomNumber(randomNum());
  };

  const Test = () => {
    if (!isGameOver && arr.length > 0 && arr.length <= 4) {
      if (randomNumber === arr[arr.length - 1]) {
        return (
          <>
            <span className='ok'>Congratulations! You got it right!</span>
            <button onClick={handleResetClick}>Start new game</button>
          </>
        );
      } else if (randomNumber > arr[arr.length - 1]) {
        return (
          <>
            <span className='not_ok'>Wrong!</span>
            <p>小さすぎます</p>
          </>
        );
      } else {
        return (
          <>
            <span className='not_ok'>Wrong!</span>
            <p>大きすぎます</p>
          </>
        );
      }
    } else if (isGameOver && randomNumber !== arr[arr.length - 1] && arr.length === 4) {
      return (
        <>
          <span className='not_pass'>GAME OVER!!!</span>
          <button onClick={handleResetClick}>Start new game</button>
        </>
      );
    }
    return null;
  };

  return (
    <div className='Container'>
      <div className="Main">
        <h1>Number guessing game</h1>
        <p>We have selected a random number between 1 and 100. See if you can guess it in 4 turns or fewer. We'll tell you if your guess was too high or too low.</p>
        <div className='Result'>
          <div className="ItemArr">
            <p><span className='medium'>Previous guesses:</span><input type="number" value={item} onChange={(e) => setItem(e.target.value)} disabled={isGameOver} /></p>
            <button onClick={handleGetValueClick} disabled={isGameOver}>Submit guess</button>
          </div>
          <div className="Result_specifically">
            { arr.length > 0 &&
              <p>Previous guesses: {arr.join(', ')}</p>
            }
            {Test()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
