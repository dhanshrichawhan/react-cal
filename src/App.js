import { useState } from 'react';
import './app.css';

function App() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  const [lastEvaluatedExpression, setLastEvaluatedExpression] = useState(null);
  const items = ['%', '*', 1, 2, 3, '/', 4, 5, 6, '+', 7, 8, 9, '-', '.', 0];

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const del = () => {
    setExpression(expression.slice(0, -1));
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="expression">
          {lastEvaluatedExpression || expression}
        </div>
        <div className="result">{result}</div>
      </div>
      <button onClick={clear}>AC</button>
      <button onClick={del}>DEL</button>
      {items.map((value, index) => (
        <button
          key={index}
          onClick={() => {
            setResult('');
            setLastEvaluatedExpression('');
            setExpression(oldExpression => oldExpression + value);
          }}
        >
          {value}
        </button>
      ))}

      <button
        className="equal"
        onClick={() => {
          // eslint-disable-next-line no-eval
          setResult(eval(expression));
          setLastEvaluatedExpression(expression);
          setExpression('');
        }}
      >
        =
      </button>
    </div>
  );
}
export default App;
