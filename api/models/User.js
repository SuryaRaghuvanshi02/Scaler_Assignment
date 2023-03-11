import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
},
{ timestamps: true}
);

export default mongoose.model("User",UserSchema)