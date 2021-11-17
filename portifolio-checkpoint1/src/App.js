import Header from './components/Header';
import './App.scss';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';


const arrayPro = [{
  img: "images/Site1.png",
  titulo: "J2 Rhapsody",
  desc: "Esse foi o primeiro projeto em grupo de front-end do CTD. Foi aplicado para treinar as recém-aprendidas competências de HTML e CSS. No grupo, eu fui o responsável por desenvolver as páginas individuais de cada album/artista.",
  ref1: "https://silvanoeng.github.io/empresaFrontEnd/",
  ref2: "https://github.com/Silvanoeng/empresaFrontEnd"
  },
  {
    img:"images/Site3.png",
    titulo: "Orangekut",
    desc: "Esse projeto também foi uma das minhas primeiras experiências com o front-end, sendo apenas um formulário com HTML e CSS.",
    ref1: "https://arthurfl0.github.io/mini-projeto2/",
    ref2: "https://github.com/arthurFL0/mini-projeto2"
  },
  {
    img:"images/Site2.png",
    titulo: "ToDo-List",
    desc:"Trabalho realizado para treinar e entender a manipulação do DOM. Consiste basicamente em uma interface que possibilita a adição e remoção de tarefas em uma lista, além de poder categoriza as mesmas como completas.",
    ref1: "https://msilvabr1.github.io/projetoFront2/lista-tarefas.html",
    ref2: "https://github.com/msilvabr1/projetoFront2"
  }];

function App() {
  return (
    <>
    <Header/>
    <main>
    <SectionOne/>
    <SectionTwo arrayPro={arrayPro}/>
    <Footer/>
    </main>
    </>
  );
}

export default App;
