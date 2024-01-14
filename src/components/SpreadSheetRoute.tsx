import { SpreadSheet } from "./SpreadSheet"

export default function SpreadSheetRoute(){
    return (
        <div>
        <div className="head-container">
       <h1>Spreadsheet Table for Charts</h1>
       <p>This spreadsheet table provides data used to generate insightful charts and visualizations. Explore the data to gain valuable insights and make informed decisions.</p>
       <div style={{marginTop:'35px'}}>
         <SpreadSheet />
       </div>
       </div>  
     </div>
    )
}