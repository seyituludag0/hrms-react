import { Dropdown } from 'semantic-ui-react'
import JobTitle from "../pages/JobTitle"

export default function Search() {
  
  let options = [
    
      <JobTitle />
    
  ]
  
  return (
    <div>
      
      <Dropdown placeholder="asd" fluid multiple selection options={options}/>
    </div>
  )
}
