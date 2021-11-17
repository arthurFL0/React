import './style.scss';
import Card from '../Card';

const SectionTwo = ({ arrayPro }) => {

    return (
        <section class="py-5 fundo-white" id="ref-2">
            <div class="container">
                <div class="container-fluid d-flex flex-column section-projetos">
                    <h2>Meus projetos</h2>
                    <div class="row py-4 pro-row">
                        {
                            arrayPro.map((el,index)=>{
                                return(
                                    <Card key={index} img={el.img} titulo={el.titulo} desc={el.desc} ref1={el.ref1} ref2={el.ref2}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionTwo;

// {
//    arrayPro.map(el,index) => {
//        return (
//           
//        )
//    }
//} fazer o map das col
//{
//    arrayPro.map((el,index)=>{
//        return <Card key=index img={el.img} titulo={el.titulo} desc={el.desc}/>
//    })
//}