import { useState } from "react"
import AddRoomForm from "../../../components/Form/AddRoomForm"

function AddRooms() {
const [dates,setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: "selection",
      })
const handleDates=(range)=>{
    setDates(range.selection)
}
  return (
    <div>
        <h1>Add Room Page</h1>
        <AddRoomForm dates={dates} handleDates={handleDates}></AddRoomForm>
    </div>
  )
}

export default AddRooms