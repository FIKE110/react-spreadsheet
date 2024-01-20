import {useRef} from 'react'
export default function InputComponent({cord,storeData,placeholder}){

  const input=useRef(null)

   return(
    <input ref={input} className='cellinput' placeholder={placeholder} style={{paddingLeft: '19px'}}
              onChange={(e)=>{
                cord.data=e.target.value
                storeData(cord)
            }
        }
        />
   ) 
}