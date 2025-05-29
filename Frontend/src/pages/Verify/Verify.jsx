import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

export const Verify = () => {

    const [searchParams,SetsearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () => {
      const response = await axios.post(url+"/api/order/verify",{success,orderId})
      if(response.data.success) {
        console.log(response.data.success)
        navigate('/myorders')
      } else {
        console.log(response.data.success)
        navigate('/')
      }
    }

    useEffect(()=>{
      verifyPayment()
    },[])
    
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
    </div>
  )
}
