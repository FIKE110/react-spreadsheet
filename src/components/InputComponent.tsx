import { toPadding } from "chart.js/helpers"

export default function InputComponent({cord,storeData,placeholder}){
   return(
    <input className='cellinput' placeholder={placeholder? placeholder:'null'} style={{paddingLeft: '19px'}}
              onChange={(e)=>{
                cord.data=e.target.value
                storeData(cord)
            }
        }
        />
   ) 
}