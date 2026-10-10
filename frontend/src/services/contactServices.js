//Api Call for Contact form:-

const BASE_URL = window.location.hostname === "localohost"?"http://localhost:3000/api":"https://kj-sk-chatify-app.onrender.com/api"

export const contactMessage = async(contactdata)=>{
    try {
      const response = await fetch(`${BASE_URL}/contact`, {method: "POST", headers:{"Content-Type": "application/json"},
      body: JSON.stringify(contactdata)})
      const result = await response.json();

      if(!response.ok){
        return {success: false, message: result.message, data: message};
      }
      return {success: true, message: result.message};
    } catch (error) {
      return {success: false, message: error.message}
    }
}