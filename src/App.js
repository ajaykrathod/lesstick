import { createContext, useContext, useState } from "react";
import Places from "./components/Places";
import MultiVerse from "./components/MultiVerse";
import { BookContext } from "./Context/BookContext";
import PersonelInfo from "./components/PersonelInfo";

export default function App() {

  const [placeVisible, setPlaceVisible] = useState(true)
  const [timelineVisible, setTimelineVisible] = useState(false)
  const [personelInfoVisible, setPersonelInfoVisible] = useState(false)

  const handlePlaceClick = (place) => {
      setPlaceVisible(false)
  }
  return (
    <BookContext.Provider value={{setPlaceVisible,setTimelineVisible,setPersonelInfoVisible}}>
      <div className="bg-[#212121] text-white h-screen w-screen">
        {placeVisible && <Places />}
        {!placeVisible && timelineVisible && <MultiVerse/>}
        {!placeVisible && !timelineVisible && personelInfoVisible && <PersonelInfo/>}
      </div>
    </BookContext.Provider>
  )
}
