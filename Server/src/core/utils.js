import jwt from 'jsonwebtoken';
import { security } from '../config'
const {
    secretKey,
    expiresIn
} = security
const generateToken = function (uid,scope) {
    const token = jwt.sign({
        uid,
        scope
    },secretKey,{
        expiresIn
    })
    return token
}

export {
    generateToken
}