import { signToken }from '../../utils/auth';
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import nc from 'next-connect';
require("dotenv").config();
const handler = nc();
import bcrypt from 'bcryptjs';


const succ =  async () => {
    res.json({status: 'Done Success!'})
}


export default handler.post(async (req, res) => {
    await dbConnect();
    const {email, password }= req.body
   
     const user = await User.findOne({email: email})
        if(user && bcrypt.compareSync(password, user.password)) {
                // const token = signToken(user);
                // res.send({
                //     token,
                //     _id: user._id,
                //     email: user.email, 
                //     password: user.password, 
                // });
              
                
                
                await succ();
            
            
        } else {
            res.json({status: 'Not be able to find'});
        }}
);



// export default async function handler (req, res) {
//  await dbConnect();
//  const email = req.body.email;
//  const password = req.body.email
//  const user = await User.findOne({email, password})
//  if(user && password) {
//     const token = signToken(user);
//     res.send({
//         token,
//         _id: user._id,
//         email: user.email, 
//         password: user.password, 
//     });
// } else {
//     res.status(401).send({ message: "Not be able to find"})
// }
// }
