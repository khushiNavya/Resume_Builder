import mongoose from "mongoose";

const connectDb=async () => {
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Database connected successfully")
        })
        let mongodbURI=process.env.MONGODB_URI
        const projectName='resume-builder'
        if(!mongodbURI){
            throw new Error("MONGO_URI not sent")
        }
        if(mongodbURI.endsWith("/")){
            mongodbURI=mongodbURI.slice(0,-1);
        }
        await mongoose.connect(`${mongodbURI}/${projectName}`)
    } catch (error) {
        console.error("Error connecting with db",error)
    }
}

export default connectDb;