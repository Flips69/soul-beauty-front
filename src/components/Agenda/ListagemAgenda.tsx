import axios from "axios";
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import { Link } from "react-router-dom";
import styles from '../App.module.css';
import { CadastroAgendaInterface }  from "../interface/CadastroAgendaInterface";

const ListagemAgenda = () => {

    const [agenda, setAgenda] = useState<CadastroAgendaInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>("");
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisaAgenda") {
            setPesquisa(e.target.value);
        }
    }
    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                console.log(pesquisa);
                const response = await axios.post('http://127.0.0.1:8000/api/agenda/pesquisaDataHora',
                { dataHora: pesquisa },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
                
                ).then(function (response) {
                    
                    console.log(response.data)
                    if (true === response.data.status) {
                        console.log(response.data)
                        setAgenda(response.data.data)
                    } else {
                        
                        setAgenda([])
                    }
                }).catch(function (error) {
                    console.log(error)
                });
                }
            }
        }
    }
