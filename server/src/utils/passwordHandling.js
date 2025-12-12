import argon2 from 'argon2'

export const hashPasswordHandling = async(password)=>{
    return await argon2.hash(password)
}

export const verifyPassword = async(hashPassword,password)=>{
    return await argon2.verify(hashPassword,password)
}