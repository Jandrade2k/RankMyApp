import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Personagens from "./Personagens";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Personagens }  path="/" exact />
       </BrowserRouter>
   )
}

export default Routes;