import { BrowserRouter,Routes,Route } from "react-router-dom";
import SpreadSheetRoute from "./components/SpreadSheetRoute";
import ChartsRoute from "./components/ChartsRoute";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path='/spreadsheet' Component={SpreadSheetRoute} />
        <Route path='/charts' Component={ChartsRoute} />
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

