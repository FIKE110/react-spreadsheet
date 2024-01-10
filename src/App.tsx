import { useState , useRef } from "react"
import './styles/table.css'

type tableMatrixType = {
  row:number,
  column:number
}

export function App(){
  const [tableMatrix,setTableMatrix] = useState({row:0,column:0})
  const rowRef = useRef(HTMLInputElement)
  const columnRef = useRef(HTMLInputElement)
  
  return (
    <div>
      <div>
        <input type="number" ref={rowRef}/>
        <input type='number' ref={columnRef} />
        <button onClick={
          ()=>setTableMatrix({row:parseInt(rowRef.current.value),column:parseInt(columnRef.current.value),})}>
          Click me</button>
        <div>
          <table>
            {tableMatrix.row>0 ? <th>S/N</th> : null}
            
            {Array.from({length:tableMatrix.row},(_,index)=>(
              <tr>
                <td style={{padding:'10px'}}>{index+1}</td>
                 {Array.from({length:tableMatrix.column},(index) => ( 
                <td><input style={{outline:'none',border:'none',padding:'10px',width:'70px'}} type='text'/></td>
              ))}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}