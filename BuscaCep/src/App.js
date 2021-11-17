import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cepList: [],
    }
  }

 

  handleSubmit = async ({ cepInserido }) => {
    if (cepInserido !== '') {
      if(cepInserido.includes("-")){
        cepInserido = cepInserido.replace("-","")
      }
      try {
        const response = await api.get(`/${cepInserido}/json`);
        console.log(response.data)
        const newCepList = this.state.cepList
        newCepList.push(response.data);
        this.setState({ cep: newCepList });
        console.log(this.state.cepList)
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        });
      }

      
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um endereço pelo CEP</h2>
            <Formik initialValues={{ cepInserido: ""}} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cepInserido" id="cepInserido" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Logradouro</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>  
              {this.state.cepList && (
                this.state.cepList.map(({logradouro,localidade,uf},index)=>{
                  return(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{logradouro}</td>
                        <td>{localidade}</td>
                        <td>{uf}</td>
                    </tr>  
                  )
                })
              )}
            </tbody>  
            </table>
          </div>
        </main>
      </>
    );
  }
}