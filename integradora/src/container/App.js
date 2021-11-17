import '../styles/App.css';
import ClassComponent from '../container/ClassComponent.jsx'
import Contador from '../container/Contador.jsx'
import FunctionComponent from '../container/FunctionComponent.jsx'

function App() {

const info = [
  {
    nome: 'Nicolas',
    estaNaLista: true,
    tarefa: 'batata-frita'
  },
  {
    nome: 'Pedro',
    estaNaLista: false,
    tarefa: 'pizza'
  },
  {
    nome: 'Carolina',
    estaNaLista: true,
    tarefa: 'bebidas'
  }
]



  return (
    <div className="App">
      <p>Hello React</p>
      <h3>Convidados:</h3>
      <ul>
      {
        info.map((el,index) => {
          return <ClassComponent key={index} nome={el.nome} estaNaLista={el.estaNaLista} />
        })
      }
      </ul>
      <h3>Tarefa: </h3>
      <ul>
      {
        info.map((el,index) => {
          return <FunctionComponent key={index} nome={el.nome} tarefa={el.tarefa} />
        })
      }
      </ul>
      <Contador></Contador>     
    </div>
  );
}

export default App;
