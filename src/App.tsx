import { BrowserRouter,Routes,Route } from "react-router-dom";
import SpreadSheetRoute from "./components/SpreadSheetRoute";
import ChartsRoute from "./components/ChartsRoute";
import PieChart from "./components/PieChart";

export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/spreadsheet' element={<SpreadSheetRoute />} />
        <Route path='/charts' element={<ChartsRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

