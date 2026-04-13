//All Chats API Calling logic:-

export const getallUser = async() => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/api/alluser", {method: "GET", headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`}})
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true,  users: result.users };
    } catch (error) {
        return {success: false, message: error.message};
    }
}