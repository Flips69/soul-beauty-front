import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from "../../App.module.css";
import axios from 'axios';
import FooterCliente from './FooterCliente';
import HeaderCliente from './HeaderCliente';

const CadastroCliente = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [erro, setErro] = useState<string>("");


    const findCep = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://viacep.com.br/ws/'+cep+'/json',
        {
            method: 'GET'
        }).then(Response => Response.json())
        .then(
            data => {

                
                setCidade(data.localidade);
                
                setEstado(data.uf);
                setErro("");
            }
        ).catch(error => {
            setErro("Pesquisa Inválida");
        });

    }

    const CadastroCliente = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
        nome: nome ,
        celular: celular,
        email: email,
        cpf: cpf,
        dataNascimento: dataNascimento,
        cidade: cidade,
        estado: estado,
        pais: pais,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cep: cep,
        complemento: complemento,
        password: password
        }

        axios.post('http://localhost:8000/api/cliente/store',
        dados,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response){
            if(response.data.status === true){
                console.log(response.data.data)
                window.location.href = "/listagemCliente";
            }
           else{  console.log("error");}
        }).catch(function(error){
            console.log(error);
        });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }

        if(e.target.name === "celular"){
            setCelular(e.target.value);
        }

        if(e.target.name === "email"){
            setEmail(e.target.value);
        }

        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }

        if(e.target.name === "dataNascimento"){
            setDataNascimento(e.target.value);
        }

        if(e.target.name === "cidade"){
            setCidade(e.target.value);
        }

        if(e.target.name === "estado"){
            setEstado(e.target.value);
        }

        if(e.target.name === "pais"){
            setPais(e.target.value);
        }

        if(e.target.name === "rua"){
            setRua(e.target.value);
        }

        if(e.target.name === "numero"){
            setNumero(e.target.value);
        }

        if(e.target.name === "bairro"){
            setBairro(e.target.value);
        }

        if(e.target.name === "cep"){
            setCep(e.target.value);
        }

        if(e.target.name === "complemento"){
            setComplemento(e.target.value);
        }

        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
}

return(
    <div>
        <HeaderCliente />
        <main className={styles.main}>
            <div className='container'>
                <div className='card'>
                <div className='card-body'>
                <h5 className='card-title'>Cadastrar Clientes</h5>
                <form onSubmit={CadastroCliente} className='row g-3'>

                <div className='col-5'>
                        <label htmlFor="nome" className='form-label'>Nome</label>
                        <input type="text" 
                        name="nome"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="celular" className='form-label'>Celular</label>
                        <input type="text" 
                        name="celular"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="email" className='form-label'>E-mail</label>
                        <input type="text" 
                        name="email"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="cpf" className='form-label'>CPF</label>
                        <input type="text" 
                        name="cpf"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="dataNascimento" className='form-label'>Data de Nascimento</label>
                        <input type="date" 
                        name="dataNascimento"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="cidade" className='form-label'>Cidade</label>
                        <input type="text" 
                        name="cidade"
                        value={cidade}
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="estado" className='form-label'>Estado</label>
                        <input type="text" 
                        name="estado"
                        value={estado}
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="pais" className='form-label'>País</label>
                        <input type="text" 
                        name="pais"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="rua" className='form-label'>Rua</label>
                        <input type="text" 
                        name="rua"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="numero" className='form-label'>Número</label>
                        <input type="text" 
                        name="numero"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="bairro" className='form-label'>Bairro</label>
                        <input type="text" 
                        name="bairro"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="cep" className='form-label'>CEP</label>
                        <input type="text" 
                        name="cep"
                        onBlur={findCep}
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="complemento" className='form-label'>Complemento</label>
                        <input type="text" 
                        name="complemento"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                <div className='col-3'>
                        <label htmlFor="password" className='form-label'>Senha</label>
                        <input type="text" 
                        name="password"
                        className="form-control"
                        required
                        onChange={handleState}
                        />
                        </div>

                        <div className='col-12'>
                                <button
                                type='submit'
                                className='btn btn-success btn-sm'>Cadastrar</button>
                            </div>
                </form>
                </div>
                </div>
            </div>
        </main>
        <FooterCliente />
    </div>
);

}

export default CadastroCliente;