//All Chats API Calling logic:-

const BASE_URL = window.location.hostname === "localhost"?"http://localhost:3000/api":"http://kj-sk-chatify-app.onrender.com/api"

export const getallUser = async() => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/alluser`, {method: "GET", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`}})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true,  users: result.users };
    } catch (error) {
        return {success: false, message: error.message};
    }
}







//List user:-

export const getSpecificUser = async() => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/my-chats`, {method: "GET", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`}})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true,  users: result.users };
    } catch (error) {
        return {success: false, message: error.message};
    }
}