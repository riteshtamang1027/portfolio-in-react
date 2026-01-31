import { userSchema } from "../models/user_schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ success: false, message: "Missing details." });
  }

  try {

    const existinguser = await userSchema.findOne({email});

    // Check the user exist or not. 
    if(existinguser){
        return res.json({success:false, message: "User already exist."})
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new userSchema({username, email, password:hashPassword}).save()


    const token = jwt.sign({id:username._id},process.env.JWT_SECRET,{expiresIn:'1d'})

    
    
  } catch (error) {
    return res.json({success:false, message:"Internal Server Error."}, error)
    
  }


};
