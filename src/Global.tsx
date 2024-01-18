import { App } from "./App"


export const genRandomColor=(opacity?:number,addBoth?:boolean)=>{
    const r=Math.round(Math.random()*255)
    const g=Math.round(Math.random()*255)
    const b=Math.round(Math.random()*255)
    const a=opacity
    if(opacity && !addBoth){
        return `rgba(${r},${g},${b},${a})`
    }
    else if(addBoth){
        return [`rgba(${r},${g},${b},${a})`, `rgb(${r},${g},${b})`]
    }
    return `rgb(${r},${g},${b})`
}

export const genMultipleRandomColors=(times)=>{
    let colors=[]
    for(let i=0;i<times;i++){
        colors.push(genRandomColor())
    }

    return colors
}

export default function Global(){
    
    return(
            <App />
    )
}