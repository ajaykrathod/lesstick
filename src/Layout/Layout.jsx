import { Account } from 'appwrite'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router'
import client from '../appwrite/appwrite'
import Spinner from '../components/Spinner'
import { getAuth } from 'firebase/auth'
import { initialState, reducer } from '../Context/InitialState'
import { ChangeContext } from '../Context/LessContext'

const Layout = () => {
  // const account = new Account(client)
  const auth = getAuth() 
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)
  const [data, setData] = useState({})
  const user = auth.currentUser
  useEffect(() => {
    if(localStorage.getItem("UID")){
      setFlag(true)
    }
    else {
      setFlag(true)
      if(window.location.pathname === "/")navigate('/login')
    }
    // account.get().then((res) => {
    //     setFlag(true)
    //   })
    //   .catch( err => {
        
    // })
  },[user])

  return (
      <div>
          {flag && <Outlet context={[data,setData]} />}
          {!flag && <Spinner/>}
      </div>
  )
}

export function useData() {
  return useOutletContext();
}

export default Layout