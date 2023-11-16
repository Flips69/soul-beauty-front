import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroServico from "../components/Servicos/CadastroServico";
import ListagemServico from "../components/Servicos/ListagemServico";
import CadastroProfissional from "../components/Profissional/CadastroProfissional";
import ListagemProfissional from "../components/Profissional/ListagemProfissional";
import EditarServico from "../components/Servicos/EditarServico";
import EditarProfissional from "../components/Profissional/EditarProfissional";
import CadastroCliente from "../components/Clientes/CadastroCliente";
import ListagemCliente from "../components/Clientes/ListagemCliente";
import EditarCliente from "../components/Clientes/EditarCliente";

const AppRouter = () => {
    return (
       <BrowserRouter>
         <Routes>
           <Route path="cadastroServico" element={<CadastroServico />}/>
           <Route path="listagemServico" element={<ListagemServico />}/>
           <Route path="/servico/editar/:id"element={<EditarServico />}/>

           <Route path="cadastroProfissional" element={<CadastroProfissional />}/>
           <Route path="listagemProfissional" element={<ListagemProfissional />}/>
           <Route path="/profissional/editar/:id"element={<EditarProfissional />}/>

           <Route path="cadastroCliente" element={<CadastroCliente />}/>
           <Route path="listagemCliente" element={<ListagemCliente />}/>
           <Route path="/cliente/editar/:id"element={<EditarCliente />}/>


        </Routes>
       </BrowserRouter>
    );
}
 export default AppRouter;