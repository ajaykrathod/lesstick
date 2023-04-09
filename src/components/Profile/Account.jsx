import React, { useEffect, useState } from 'react'
import { useData } from '../../Layout/Layout'
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import app from '../../utils/firebase'

function Account() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [data,setData] = useData()
    const db = getFirestore(app)
    
    useEffect(() => {
        if(data?.user){
            setName(data?.user?.firstName+" "+data?.user?.lastName)
            setEmail(data?.user?.email)
        }
    },[])

    const handleUpdate = async () => {
        const myArray = name.split(" ");
        await updateDoc(doc(db,"Users",data?.ref),{
            firstName:myArray[0],
            lastName:myArray[1],
            email:email
        })
    }

  return (
    <div className='grid content-center h-screen text-white w-[70vw]'>
        <div className='grid mx-auto w-[30vw] content-center'>
            <input
            className="p-5 m-5 h-10 rounded-full border bg-[#363636] text-white border-gray-400 focus:outline-none focus:border-white"
            type={"text"}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            className="p-5 m-5 h-10 rounded-full border bg-[#363636] text-gray-300 border-gray-400 focus:outline-none focus:border-white"
            type={"email"}
            placeholder="Email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bottom-10 p-3 rounded-2xl bg-sky-400 my-5" onClick={handleUpdate}>
                Update
            </button>
        </div>
    </div>
  )
}

export default Account