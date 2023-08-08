import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import DetallePelicula from "../components/detallePelicula/detallePelicula";
import Card from "../components/card/card";
import SeleccionBoletos from "../components/seleccionBoletos/seleccionBoletos";
import SeleccionAsientos from "../components/seleccionAsientos/seleccionAsientos";
import PagoBoletos from "../components/pagoBoletos/pagoBoletos";
import LoginAdmi from "../components/loginAdmi/loginAdmi";
import PrivateRoutes from "./privateRoutes";
import { getSession } from "../service/sessionService/sessionService";
import { initialUser, userReducer } from "../service/admiReducer/admiReducer";
import Layout from "../components/layout/Layout";
import { createContext } from "react";
import HomeAdmin from "../componentsAdmi/homeAdmin/HomeAdmin";
import CompraExitosa from "../components/compraExitosa/compraExitosa";
import DescargaBoletos from "../components/descargaBoletos/descargaBoletos";


export const AppContext = createContext({});

function Router() {
  
  useEffect(() => {
    const user = getSession();
    if (user?.name) {
      userDispatch({
        type: "login",
        payload: {
          isAutenticated: true,
          user: user,
        },
      });
    }
  }, []);

  const [userLogin, userDispatch] = useReducer(userReducer, initialUser);
  const globalState = {
    user: {
      userLogin,
      userDispatch,
    },
  };

  return (
   
    <AppContext.Provider value={globalState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Card />} />
            <Route path=":pelicula" element={<DetallePelicula />} />
            <Route path=":seleccionBoleto" element={<SeleccionBoletos />} />
            <Route path="/seleccionBoleto" element={<SeleccionBoletos />} />
            <Route path="/seleccionAsiento" element={<SeleccionAsientos />} />
            <Route path="/compraBoletos" element={<PagoBoletos />} />
            <Route path="/compraExitosa" element={<CompraExitosa />} />
            <Route path="/descargaBoletos" element={<DescargaBoletos />} />
            <Route path="/loginAdministrador" element={<LoginAdmi />} />
          </Route>

          <Route element={<PrivateRoutes isAutenticated={userLogin.isAutenticated} />}>
            <Route element={<Layout/>}>
              <Route path="/administrador" element={<HomeAdmin />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default Router;
