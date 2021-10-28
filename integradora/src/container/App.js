import '../styles/App.css';
import ClassComponent from '../container/ClassComponent.jsx'
import FunctionComponent from '../container/FunctionComponent.jsx'

function App() {
  return (
    <div className="App">
      <p>Hello React</p>
      <h3>Convidados:</h3>
      <ClassComponent nome="Nicolas" estaNaLista={true} />
      <ClassComponent nome="Pedro" estaNaLista={false} />
      <ClassComponent nome="Carolina" estaNaLista={true} />
      <h3>Tarefa: </h3>
      <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
      <FunctionComponent nome="Pedro" tarefa="pizza" />
      <FunctionComponent nome="Carolina" tarefa="bebidas" />
          
    </div>
  );
}

export default App;
