import Contact from "../models/contactmodel.js";

//Contact Page Controller Logic:-
export const contactMessage = async(req, res) => {
    try {
        const{name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({
                success: false, 
                message: "Please Fill the Empty Field"
            })
        }
        const mesasage = await Contact.create({name, email, message}) 
        return res.status(200).json({
            success: true, 
            message: "Your Message sent SuccessFully!",
            mesasage
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Your message not sent Try Again Later !"
        })
    }
}