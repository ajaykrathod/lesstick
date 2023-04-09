import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import app from '../../utils/firebase';
import { useData } from '../../Layout/Layout';
import Ticket from './Ticket';

function Orders() {

  const db = getFirestore(app)
  const [data,setData] = useData()
  const [tickets, setTickets] = useState()

  const getDocu = async () => {
    const q = query(collection(db, "Tickets"), where("UID", "==", localStorage.getItem("UID")));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setTickets({...tickets,[doc.id]:doc.data()})
    });
  }
  useEffect(() => {
    getDocu()
  },[])
  return (
    <div className='grid content-center h-screen text-white w-[70vw]'>
        <div className='grid mx-auto content-center'>
          <strong className='absolute top-24'>
              Tickets
          </strong>
          <div className="grid grid-cols-3">
              {tickets && Object.keys(tickets).map(key => {
                console.log(key);
                return <Ticket key={key} data={tickets[key]}/>  
              })}
          </div>
        </div>
    </div>
  )
}

export default Orders