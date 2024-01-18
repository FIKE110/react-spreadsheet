import '../styles/examples.css'

export default function Examples(props){
    return(
        <div className='main'>
            <div style={{marginBottom:10,paddingTop:30,display:'flex',justifyContent:'center',alignItems:'center',height:'31%'}}>
            <img src={props.imageUrl}/>   
            </div> 
            <div style={{textAlign:'center',marginTop:15}}>
                <h2 style={{fontSize:18}}>{props.heading}</h2>
                <p style={{padding:2,paddingTop:8,textAlign:'center'}}>{props.paragraph}</p>
            </div>
        </div>
    )
}
