//Api Call for Contact form:-

export const contactMessage = async(contactdata)=>{
    try {
      const response = await fetch("http://localhost:3000/api/contact", {method: "POST", headers:{"Content-Type": "application/json"},
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