import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroServico from "../components/servico/CadastroServico";
import ListagemServico from "../components/servico/ListagemServico";
import CadastroProfissional from "../components/servico/CadastroProfissional";

const AppRouter = () => {
    return (
       <BrowserRouter>
         <Routes>
           <Route path="cadastroServico" element={<CadastroServico />}></Route>
           <Route path="listagemServico" element={<ListagemServico  />}></Route>

           <Route path="cadastroProfissional" element={<CadastroProfissional />}></Route>
           <Route path="listagemProfissional" element={<ListagemProfissional  />}></Route>

        </Routes>
       </BrowserRouter>
    );
}
 export default AppRouter;