export const checkValidation=(email,password)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    if(!isEmailValid) return "email is not valid"
    if(!isPasswordValid) return "password is not valid"
    return null
}