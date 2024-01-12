import WarningPanel from "./WarningPanel"
import plusIcon from '../assets/plus.png' 
import { useEffect,useState ,useRef, useReducer} from "react"

export function SpreadSheet(){
type tableMatrixType = {
    row:number,
    column:number
}     
const [tableMatrix,setTableMatrix] = useState({row:5,column:5})
const [ignored,forceRender] = useReducer(x=>x+1,0) 
const rowRef = useRef(HTMLInputElement)
const columnRef = useRef(HTMLInputElement)
const tableRef = useRef<HTMLTableElement>()
let actualMatrix:tableMatrixType

const addRow =()=>{
  console.log(actualMatrix)
 const newRow= tableRef.current.insertRow()
 newRow.setAttribute('data-id',actualMatrix.row.toString()) 
 Array.from({length:actualMatrix.column+1},(_,index)=>{
  const cell=newRow.insertCell(-1)
  if(index==0){
    cell.classList.add('SN')
  }
  cell.innerHTML= index==0 ? (actualMatrix.row+1).toString(): '<input class="cellinput" placeholder="null" type="text" />'
})
actualMatrix.row++
console.log(actualMatrix)
}

const addColumns =() =>{
  const headerRow=tableRef.current.rows[0]
  const field=document.createElement('th')
  headerRow.appendChild(field)
  field.style.backgroundColor='white'
  field.innerHTML='<input class="cellinput" type="text" placeholder="FieldName"/>'
  Array.from({length:actualMatrix.row},(_,rowId)=>{
    const rowElement=(tableRef.current.querySelector(`tr[data-id="${rowId}"]`) as HTMLTableRowElement)
    const cell=rowElement.insertCell(-1)
    cell.innerHTML='<input class="cellinput" placeholder="null" type="text" />'
  })
  actualMatrix.column=actualMatrix.column+1
  console.log(actualMatrix)
}

const clearTableRows = () => {
    const rowCount = tableRef.current?.rows.length;
  
    for (let i = rowCount - 1; i >= 0; i--) {
      tableRef.current?.deleteRow(i);
    }
  };
  
useEffect(()=>{
    actualMatrix=tableMatrix
    console.log(actualMatrix,tableMatrix)

    return ()=>{
       
    }
  })

    return(
    <div>
    <h1>SpreadSheet</h1>
    <div className="form-container">
      <input min={1} ref={rowRef} type="text" placeholder="Number of Rows" className="input-field" />
      <input min={1} ref={columnRef} type="text" placeholder="Number of Columns" className="input-field" />
      <div>
      <button className="submit-button" onClick={
        ()=>{
            setTableMatrix({row:parseInt(rowRef.current.value),column:parseInt(columnRef.current.value)})
        }}
        >Generate new table</button>
        <button className="submit-button">Use in charts</button>
        </div>
    </div>
      {tableMatrix.row>0 && tableMatrix.column>0 ? <div id='table-container'>
        <div>
        <div>
        <img style={{position:'absolute',right:0,width:30,height:30}} 
        onClick={()=>addColumns()}  src={plusIcon}/>
        </div>
        <table ref={tableRef}>
          <thead>
          <tr>
          {tableMatrix.row>0 ? <th ><div style={{textAlign:'center'}}>S/N</div></th> : null}
          {Array.from({length:tableMatrix.column},(_,index)=>(<th style={{backgroundColor:'white'}}>
            <input className='cellinput' type="text" placeholder="FieldName"
           /></th>))}
           </tr>
           </thead>
           <tbody>
          {Array.from({length:tableMatrix.row},(_,index)=>(
            <tr data-id={index} key={index}>
              <td style={{padding:'17px'}}>{index+1}</td>
               {Array.from({length:tableMatrix.column},(_,index) => ( 
              <td style={{height:'50px'}}><input className='cellinput' placeholder='null' type='text'/></td>
            ))}
            </tr>
          ))}
          </tbody>
          <div>
         <img style={{width:30,height:30, marginTop:'10px'}} onClick={()=>addRow()}  src={plusIcon}/>
        </div>
        </table>
        </div>
      </div>
      :<WarningPanel />}
      
    </div>
    )
}