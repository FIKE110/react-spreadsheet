import {useRef,useEffect} from 'react'
export default function InputComponent({cord,storeData,placeholder}){

  const input=useRef(null)

  useEffect(() => {
    return () => {
    }
  }, [])
  
   return(
    <input ref={input} className='cellinput' placeholder={placeholder? placeholder:'null'} style={{paddingLeft: '19px'}}
              onChange={(e)=>{
                cord.data=e.target.value
                storeData(cord)
            }
        }
        />
   ) 
}