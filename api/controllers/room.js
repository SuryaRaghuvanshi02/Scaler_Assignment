import Room from "../models/Room.js"
export const createRoom = async(req,res,next)=>{
    console.log(req.body,rooms)
    const NewRoom = new Room({
        ...req.body,
        Duration:req.body.EndTime-req.body.StartTime,
        price:(req.body.EndTime-req.body.StartTime)*rooms[req.body.title]["priceperhour"]
    })
    
    try{
        const savedRoom = await NewRoom.save();
        res.status(200).json(savedRoom);
    }
    catch(err){
        next(err);
    }
}
export const updateRoom = async(req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
            );
        res.status(200).json(updatedRoom);
    }
    catch(err){
        next(err);
    }
}
export const deleteRoom = async(req,res,next)=>{
    try{
        await Room.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Room has been Deleted");
    }
    catch(err){
        next(err);
    }
}
export const getRoom = async(req,res,next)=>{
    try{
        const Roomk = await Room.findById(
            req.params.id
            );
        res.status(200).json(Roomk)
    }
    catch(err){
        next(err);
    }
}
export const getRooms = async(req,res,next)=>{
    try{
        const Rooms = await Room.find();
        res.status(200).json(Rooms)
    }
    catch(err){
        next(err);
    }
}
const rooms = {
    A:{"priceperhour":100,
    "noOfRooms":2},
    B:{"priceperhour":80,
    "noOfRooms":3},
    C:{"priceperhour":50,
    "noOfRooms":5}
  }
