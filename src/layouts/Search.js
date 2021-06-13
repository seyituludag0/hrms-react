import { Dropdown } from 'semantic-ui-react'
import JobTitle from "../pages/JobTitle"

export default function Search() {
  
  let options = [
    
      <JobTitle />
    
  ]
  
  return (
    <div>
      
      <div style={{float:"right", marginRight:"-50rem"}}>
      <Dropdown placeholder="İş Başlıkları" fluid multiple selection options={options}/>
      </div>
      
    </div>
  )
}
