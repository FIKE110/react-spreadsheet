
import '../styles/dropdown.css'; // Import the stylesheet

const DropdownMenu = ({current,options,setLabel,mainData,setPieData}) => {
  const [selectedOption, setSelectedOption] = useState(-1);


  const getDataFromColumn=(id)=>{
    let data:any[]=[]
    mainData.map((item,index)=>{
        if(index>0){
            data.push(item[id] && item[id].data ? item[id].data : 'null')
        }
    })
    return data
  }

  return (
    <div className="dropdown-container">
      {setPieData? <select
        id="dropdown"
        className="dropdown-select"
        value={selectedOption}
        onChange={(e)=>{
            setPieData(getDataFromColumn(e.target.value))
            setSelectedOption(parseInt(e.target.value))
        }}
      >
        <option value="">{current}</option>
        {
            options.map((item,index:number)=>(
                <option value={index} 
                >{item.data}</option>
            ))
        }
      </select> : <select
        id="dropdown"
        className="dropdown-select"
        value={selectedOption}
        onChange={(e)=>{
            setLabel(getDataFromColumn(e.target.value))
            setSelectedOption(parseInt(e.target.value))
        }}
      >
        <option value="">{current}</option>
        {
            options.map((item,index:number)=>(
                <option value={index} 
                >{item.data}</option>
            ))
        }
      </select> }
    </div>
  );
};

export default DropdownMenu;
