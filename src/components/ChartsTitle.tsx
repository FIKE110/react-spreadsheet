
const ChartsTitle = (props) => {

  return (
    <div style={{textAlign: 'left',
    padding: '20px',
    backgroundColor: '#f4f4f4'}} >
      <h1 style={{
  fontSize: '2em',
  color: '#333',
  textAlign:'center',
  margin:15,
}}>
        Transforming Table Data into Visual Insights
      </h1>
      <p style={descriptionStyle}>
        Unlock the power of visual insights by exploring dynamic charts and
        visualizations for your table data. A user-friendly interface that allows
        you to seamlessly transform raw information into actionable
        intelligence. Dive into the world of data visualization and quicken your
        decision-making process.
      </p>
      <div style={{overflow:'hidden',width:"100%",justifyContent:'center',display:'flex'}}>
      <p style={{fontWeight:'bold',textWrap:'nowrap',fontSize:24}}>Viewing SpreadSheet {props.tableName}</p>
      </div>
    </div>
  )
}


const descriptionStyle = {
  fontSize: '1.2em',
  color: '#555',
  marginBottom:30
};

export default ChartsTitle;
