//API Calling for chatbox :-


//This is POST API for chatting:-
export const chatboxMessage = async(chatMessage) => {
    try {
        const token = localStorage.getItem("token");
        console.log("TOKEN:", token);
        const response = await fetch('https://kj-sk-chatify-app.onrender.com/api/chatbox', {method: "POST", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify(chatMessage)
        })
        const result = await response.json();
        
    if(!response.ok){
        return {success: false, message: result.message}
    }
    return {success: true, message: result.message, chatMessage: result.chatMessage}
    } catch (error) {
        return {success: false, message: error.message}
    }
}






//This is GET API For Single user:-
export const getsingleUser = async(user_id) => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`https://kj-sk-chatify-app.onrender.com/api/users/${user_id}`, {method: "GET", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`}})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, user: result.user};
    } catch (error) {
        return {success: false, message: error.message};
    }
}






//This is GET API for Get Message of users:-
export const getMessages = async(user_id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://kj-sk-chatify-app.onrender.com/api/chatbox/${user_id}`, {method: "GET", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`}})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, messages: result.messages};
    } catch (error) {
        return {success: false, message: error.message};
    }
}