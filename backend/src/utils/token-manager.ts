import jwt from "jsonwebtoken"

export const getToken = (id:string,email:string,expiresIn) =>{
    const payload = { id,email}
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn
    })
    return token;
}