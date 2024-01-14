import WarningPanel from "./WarningPanel"
import plusIcon from '../assets/plus.png' 
import { useEffect,useState ,useRef} from "react"
import '../styles/table.css'
import { useNavigate } from "react-router-dom"
import ModalComponent from "./ModalComponent"
import InputComponent from "./InputComponent"


export function SpreadSheet(){

const navigate=useNavigate()

type tableMatrixType = {
    row:number,
    column:number
} 

const [tableMatrix,setTableMatrix] = useState({row:2,column:2})
const tableData = useRef(gen2DArray(tableMatrix.row+1,tableMatrix.column))
const [warningMes,setWarningMes] =useState('Use only positive non-zero numbers')
const [scrollLeft,setScrollLeft]=useState(true)
const rowRef = useRef(HTMLInputElement)
const columnRef = useRef(HTMLInputElement)
const tableRef = useRef<HTMLTableElement>()

const addRow =()=>{
  const newTableMatrix={...tableMatrix,row:tableMatrix.row+1};
  setScrollLeft(true)
  tableData.current.push(new Array(newTableMatrix.column))
  setTableMatrix(newTableMatrix)
}

function gen2DArray(x:number,y:number){
  let main=[]
  for(let i=0;i<x;i++){
    main.push(new Array(y))
  }
  return main
}

const addColumns =() =>{
  const newTableMatrix={...tableMatrix,column:tableMatrix.column+1}
  setScrollLeft(false)
  for(let i=0;i<newTableMatrix.row;i++){
    tableData.current[i].push(null)
  }
  setTableMatrix(newTableMatrix)
}

const useCharts=()=>{
  const nameOfTable=prompt("what is the name of Table")
  if(nameOfTable  && dataIsNotNull(tableData.current)){
    console.log(tableData.current)
    navigate('/charts',{state:{data:tableData.current}})
  }
  else{
    setTableMatrix({row:-1,column:-1})
    setWarningMes('Some Elements in Table Are null')
  }
}

function dataIsNotNull(tableData){
  let isDataNotNull=true
  if(tableData.length==0){
    return false
  }

  for(let i=0;i<tableData.length;i++){
    for(let j=0;j<tableData[i].length;j++){
      if(!tableData[i][j]){
        return false
      }
    }
  }

  return isDataNotNull
}

const storeData=(data)=>{
  tableData.current[data.x][data.y]=data
  console.log(tableData.current)
}

const genTableData=(arr,tableSize)=>{
  let data=[]

  for(let i=0;i<tableSize.row;i++){
    data.push(new Array(tableSize.column))
  }

  for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].length;j++){
      if(arr[i]){
      data[i][j]=arr[i][j]
      }
    }
  }
  console.log(data)
  return data
}

useEffect(()=>{
  console.log(tableData)
    if(tableRef.current){
      if(!scrollLeft){
        tableRef.current.scrollTop=tableRef.current.scrollHeight
        tableRef.current.scrollLeft=tableRef.current.scrollWidth
    }
      }
    })

    return(
    <div>
    <div className="form-container">
      <input min={1} ref={rowRef} type="text" placeholder="Number of Rows" className="input-field" />
      <input min={1} ref={columnRef} type="text" placeholder="Number of Columns" className="input-field" />
      <div>
      <button className="submit-button" onClick={
        ()=>{
          const newTableMatrix={row:parseInt(rowRef.current.value),column:parseInt(columnRef.current.value)}
         console.log(newTableMatrix)
          tableData.current=genTableData(tableData.current,{...newTableMatrix,row:newTableMatrix.row+1})
          setTableMatrix(newTableMatrix)
          setWarningMes('Use only positive non-zero numbers')
        }}
        >Generate new table</button>
        <button className="submit-button" onClick={()=>useCharts()}>Use in Charts</button>
        </div>
    </div>
    
      {tableMatrix.row>0 && tableMatrix.column>0 ? <div id='table-container'>
        <div>
        <div>
        <img style={{position:'absolute',right:27,width:30,height:30}} 
        onClick={()=>addColumns()}  src={plusIcon}/>
        </div>
        <table ref={tableRef}>
          <thead>
          <tr>
          {tableMatrix.row>0 ? <th ><div style={{textAlign:'center'}}>S/N</div></th> : null}
          {Array.from({length:tableMatrix.column},(_,index)=>(<th key={index} style={{backgroundColor:'white'}}>
          <InputComponent cord={{x:0,y:index,data:null}} placeholder='FieldName'
              storeData={storeData} 
              /></th>))}
           </tr>
           </thead>
           <tbody>
          {Array.from({length:tableMatrix.row},(_,index)=>(
            <tr data-id={index} key={index}>
              <td key={index} style={{padding:'17px'}}>{index+1}</td>
               {Array.from({length:tableMatrix.column},(_,id) => ( 
              <td  key={id} style={{height:'50px'}}><InputComponent cord={{x:index+1,y:id,data:null}} 
              storeData={storeData} 
              /></td>
            ))}
            </tr>
          ))}
          </tbody>
        </table>
        <div>
         <img style={{float:'left',width:30,height:30, marginTop:'10px'}} onClick={()=>addRow()}  src={plusIcon}/>
        </div>
        </div>
      </div>
      :<WarningPanel message={warningMes}/>}
    </div>
    )
}