//API Calling for auth services for both login and signup:-


//Signup API call:-
export const signupuser = async(signupdata)=>{
    try {
        const response = await fetch('https://kj-sk-chatify-app.onrender.com/api/auth/signup', {method: "POST", headers:{"Content-Type": "application/json"}, 
        body: JSON.stringify(signupdata)})
        const result = await response.json()

        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, token: result.token}
    } catch (error) {
        return {success: false, message: error.message}
    }
}





//Login API call:-
export const loginuser = async(logindata)=>{
    try {
        const response = await fetch('https://kj-sk-chatify-app.onrender.com/api/auth/login', {method: "POST", headers:{"Content-Type": "application/json"},
        body: JSON.stringify(logindata)})
        const result = await response.json()
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, token: result.token}
    } catch (error) {
        return {success: false, message: error.message}
    }
}