import { Account } from 'appwrite'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router'
import client from '../appwrite/appwrite'
import Spinner from '../components/Spinner'
import { getAuth } from 'firebase/auth'
import { initialState, reducer } from '../Context/InitialState'
import { ChangeContext } from '../Context/LessContext'
import NavBar from '../components/NavBar'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import app from '../utils/firebase'

const Layout = () => {
  // const account = new Account(client)
  const auth = getAuth() 
  const db = getFirestore(app) 
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)
  const [data, setData] = useState({})
  const user = auth.currentUser
  const getUser = async () => {
    const q = query(collection(db, "Users"), where("UID", "==", localStorage.getItem("UID")));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setData({...data,user:doc.data(),ref:doc.id})
    });
  }
  useEffect(() => {
    if(localStorage.getItem("UID")){
      getUser() 
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
          <NavBar/>
          {flag && <Outlet context={[data,setData]} />}
          {!flag && <Spinner/>}
      </div>
  )
}

export function useData() {
  return useOutletContext();
}

export default Layout