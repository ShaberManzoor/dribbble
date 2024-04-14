import { Schema,model,models } from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

export default models?.user || model('user',UserSchema)