import '../styles/examples.css'

export default function Examples(props){
    return(
        <div className='main'>
            <div style={{marginBottom:10,paddingTop:30,display:'flex',justifyContent:'center',alignItems:'center',height:'31%'}}>
            <img src={props.imageUrl}/>   
            </div> 
            <div style={{textAlign:'center',marginTop:15}}>
                <h2 style={{fontSize:18}}>{props.heading}</h2>
                <div style={{width:'90%',margin:10,textAlign:'center'}}>
                <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}
