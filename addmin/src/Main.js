import {useEffect, useState, useRef} from "react"
function Main() {
    const [currentData,setData] = useState([])
    const roomNumbersref = useRef(null);
    const titleref = useRef(null);
    const StartTimeref = useRef(null);
    const EndTimeref = useRef(null);
    const Durationref = useRef(null);
    const priceref = useRef(null);
    const useremailref = useRef(null);
    const Bookingref = useRef(null);
    const roomNumbersrefe = useRef(null);
    const titlerefe = useRef(null);
    const StartTimerefe = useRef(null);
    const EndTimerefe = useRef(null);
    const Durationrefe = useRef(null);
    const pricerefe = useRef(null);
    const useremailrefe = useRef(null);
    const Bookingrefe = useRef(null);
  useEffect(()=>{
    console.log("Welcome")
    fetch("http://localhost:8800/api/rooms")
  .then((response) => response.json())
  .then((data) => {console.log(data);
  setData(data)});

  },[])
  const CreateBooking=()=>{
    console.log({
        "roomNumbers":roomNumbersref.current,
        "title":titleref.current,
        "StartTime":StartTimeref.current,
        "EndTime":EndTimeref.current,
        "useremail":useremailref.current
    })
  fetch("http://localhost:8800/api/rooms", {
    
    method: "POST",
    body: JSON.stringify(
        {
            "roomNumbers":roomNumbersref.current.value,
            "title":titleref.current.value,
            "StartTime":StartTimeref.current.value,
            "EndTime":EndTimeref.current.value,
            "useremail":useremailref.current.value
        }
    ),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
.then(response => response.json())
 
.then(json => console.log(json));

  }
  const DeleteBooking=()=>{
    fetch("http://localhost:8800/api/rooms/"+Bookingref.current.value,{
      
      method: "DELETE",
      
  })
   
  .then(response => response.json())
   
  .then(json => console.log(json));
  
    }
    const UpdateBooking=()=>{
        fetch("http://localhost:8800/api/rooms/"+Bookingref.current.value,{
          
          method: "PUT",
          body: JSON.stringify(
            {
              "roomNumbers":roomNumbersrefe.current,
              "title":titlerefe.current,
              "StartTime":StartTimerefe.current,
              "EndTime":EndTimerefe.current,
              "useremail":useremailrefe.current
            }
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
       
      .then(response => response.json())
       
      .then(json => console.log(json));
      
        }
    return (
    <div className="Main">
      <table>
        <thead>
            <th>
                Booking ID
            </th>
            <th>
                Room Number
            </th>
            <th>
                Room Type
            </th>
            <th>
                Start Time
            </th>
            <th>
                End Time
            </th>
            <th>
                Duration
            </th>
            <th>
                Price
            </th>
            <th>
                User Email
            </th>
        </thead>
        <tbody>
            {
                currentData.map((data)=>{
                    return (<tr>
                        <td>{data._id}</td>
                        <td>{data.roomNumbers}</td>
                        <td>{data.title}</td>
                        <td>{data.StartTime}</td>
                        <td>{data.EndTime}</td>
                        <td>{data.Duration}</td>
                        <td>{data.price}</td>
                        <td>{data.useremail}</td>
                    </tr>)
                })
            }
        </tbody>
      </table>
      <form>
        <label for="roomNumbersid"> Room Numbers</label><br></br>
        <input id="roomNumbersid" ref={roomNumbersref}></input><br></br>
        <label for="titleid"> Title</label><br></br>
        <input id="titleid"ref={titleref}></input><br></br>
        <label for="StartTimeid"> Start Time</label><br></br>
        <input id="StartTimeid"ref={StartTimeref}></input><br></br>
        <label for="EndTimeid"> End Time</label><br></br>
        <input id="EndTimeid"ref={EndTimeref}></input><br></br>
        <label for="Durationid"> Duration</label><br></br>
        <input id="Durationid"ref={Durationref}></input><br></br>
        <label for="priceid"> price</label><br></br>
        <input id="priceid" ref={priceref}></input><br></br>
        <label for="useremailid"> Email</label><br></br>
        <input id="useremailid" ref={useremailref}></input><br></br>
      </form>
      <button onClick={CreateBooking}>Create</button><br></br>
      <label for="Bookingid"> Booking ID</label><br></br>
      <form><input id="Bookingid" ref={Bookingref}></input></form><br></br>
      <button onClick={DeleteBooking}>Delete</button>
      { <form>
        <label for="Bookingid"> Booking ID</label><br></br>
        <input id="Bookingid" ref={Bookingrefe}></input><br></br>
        <label for="roomNumbersid"> Room Numbers</label><br></br>
        <input id="roomNumbersid" ref={roomNumbersrefe}></input><br></br>
        <label for="titleid"> Title</label><br></br>
        <input id="titleid"ref={titlerefe}></input><br></br>
        <label for="StartTimeid"> Start Time</label><br></br>
        <input id="StartTimeid"ref={StartTimerefe}></input><br></br>
        <label for="EndTimeid"> End Time</label><br></br>
        <input id="EndTimeid"ref={EndTimerefe}></input><br></br>
        <label for="Durationid"> Duration</label><br></br>
        <input id="Durationid"ref={Durationrefe}></input><br></br>
        <label for="priceid"> price</label><br></br>
        <input id="priceid" ref={pricerefe}></input><br></br>
        <label for="useremailid"> Email</label><br></br>
        <input id="useremailid" ref={useremailrefe}></input><br></br>
      </form> }
      <button onClick={UpdateBooking}>Update</button>
    </div>
  );
}

export default Main;
