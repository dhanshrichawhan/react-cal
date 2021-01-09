import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  const [lastEvaluatedExpression, setLastEvaluatedExpression] = useState(null);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '%', '.'];

  const clear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div>
      <p>Expression: {lastEvaluatedExpression || expression}</p>
      <p>Result: {result}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50px 50px 50px',
          gap: '10px',
        }}
      >
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

        <button onClick={clear}>AC</button>
        <button
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
    </div>
  );
}
export default App;
