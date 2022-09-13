import React, {useState} from 'react';

const Counter = () => {
    const [contador, setContador] = useState(0)

    const handleOnClick = operador => {

    }
};

function App() {
    return(
        <div>
           <button onClick={() => handleOnClick('-')}>-</button>
           <span>{contador}</span>
        </div>
    )
}




export default App;
