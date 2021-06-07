import React,{ useState, useEffect } from 'react'
import CandidateCvService from "../services/CandidateCvService"

export default function CandidateCv() {

    const [candidateCvs, setcandidateCvs] = useState(0)

    useEffect(()=>{
        let candidateCvService = new CandidateCvService();
        candidateCvService.getCandidateCv().then(result=>setcandidateCvs(result.data))

    })

    return (
        <div>
            
        </div>
    )
}
