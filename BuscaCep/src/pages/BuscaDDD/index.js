import { useParams } from "react-router";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import { useState } from "react";
import api from '../../services/apiD';

const BuscaDDD = () =>{
    const {ddd} = useParams();
    const [lista, setLista]= useState({})

    useEffect(()=>{
        if(ddd){
            pegarDDD(ddd)
        }

    },[ddd])

    async function pegarDDD(ddd){
        try{
            const response = await api.get(`/${ddd}`);
            console.log(response.data)
            setLista(response.data)
        }catch(error){
            Swal.fire({
                title: error.response.status,
                icon: 'error',
                text: error.response.data.message
              });
        }
 
    }

    return(
        <div className="col-md-4 col-sm-6 my-3 container text-center">
        <table className="table">
           <thead>
                <tr>
                    {lista.state
                    ? <th>{`Municipios do ddd: ${ddd} / ${lista.state}`}</th>
                    : <th>{"Estamos obtendo a lista, um momento"}</th>
                    }
                </tr>
            </thead>
            <tbody>
                {lista.state && (
                    lista.cities.map((cidade)=>{
                    return(
                    <tr>
                        <td>{cidade}</td>
                    </tr>
                    )    
                })
                )}
            </tbody>
        </table>
        </div>
    )
}

export default BuscaDDD;