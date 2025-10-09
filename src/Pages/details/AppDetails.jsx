import React from 'react'
import { useParams } from 'react-router'
import useApps from '../../hooks/useApps'

const AppDetails = () => {
    const {id}=useParams()
 const{allapps}= useApps()
 console.log(allapps);
  return (
    <div>AppDetails</div>
  )
}

export default AppDetails