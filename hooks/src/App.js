import React, {useState, useEffect, useMemo, useCallback } from 'react';


function App() {

  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  //componentDidMount - substituto
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  //componentDidUpdate - substituto
  useEffect(() => {
    const tarefasStore = localStorage.getItem('tarefas');

    if(tarefasStore) {
      setTarefas(JSON.parse(tarefasStore));
    }

    return () => {};

  }, []);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [tarefas, input]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
          ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={(e => setInput(e.target.value))}/>
      <button type="button" onClick={handleAdd}>Adiconar tarefa</button>
    </div>
  );
}

export default App;
