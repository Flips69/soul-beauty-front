import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import FooterServico from "./FooterServico";
import Header from "./HeaderServico";
import styles from "../../App.module.css"
import { useParams } from "react-router-dom";
import axios from "axios";


const EditarServico = () => {

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [id, setId] = useState<number>();

    const [nomeErro, setNomeErro] = useState<string>("");
    const [descricaoErro, setDescricaoErro] = useState<string>("");
    const [duracaoErro, setDuracaoErro] = useState<string>("");
    const [precoErro, setPrecoErro] = useState<string>("");

    const parametro = useParams();

    const atualizar = (e: FormEvent) => {
        setNomeErro("")
        setDescricaoErro("")
        setDuracaoErro("")
        setPrecoErro("")

        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco
        }

        axios.put("http://127.0.0.1:8000/api/servico/update",
        dados,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response){
            if(response.data.status === false){
                if('nome' in response.data.error){
                    setNomeErro(response.data.error.nome[0])
                }
                if('descricao' in response.data.error){
                    setDescricaoErro(response.data.error.descricao[0])
                }
                if('duracao' in response.data.error){
                    setDuracaoErro(response.data.error.duracao[0])
                }
                if('preco' in response.data.error){
                    setPrecoErro(response.data.error.preco[0])
                }
            }else {
            window.location.href = "/listagemServico";}
        }).catch(function(error){
            console.log('Ocorreu um erro ao atualizar');
        });
    }

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/servico/find/" + parametro.id);
                setNome(response.data.data.nome);
                setDescricao(response.data.data.descricao);
                setDuracao(response.data.data.duracao);
                setPreco(response.data.data.preco);
                setId(response.data.data.id);

            } catch(error){
                console.log("erro ao buscar dados de api");
            }
        }
        fetchData();
    }, []);


    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "descricao"){
            setDescricao(e.target.value);
        }
        if(e.target.name === "duracao"){
            setDuracao(e.target.value);
        }
        if(e.target.name === "preco"){
            setPreco(e.target.value);
        }
    }


    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Serviços</h5>
                            <form onSubmit={atualizar} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text"
                                        name='nome'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={nome}
                                    />
                                <div className='text-danger'>{nomeErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="descricao" className='form-label'>Descrição</label>
                                    <input type="text"
                                        name='descricao'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={descricao}
                                    />
<div className='text-danger'>{nomeErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="duracao" className='form-label'>Duração</label>
                                    <input type="text"
                                        name='duracao'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={duracao}
                                    />
                                    <div className='text-danger'>{nomeErro}</div>
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="preco" className='form-label'>Preço</label>
                                    <input type="text"
                                        name='preco'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={preco}
                                    />
                                    <div className='text-danger'>{nomeErro}</div>
                                </div>
            
                                <div className='col-12'>
                                    <button
                                        type='submit'
                                        className='btn btn-success btn-sm'>Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <FooterServico />
        </div>
    );
}

export default EditarServico;