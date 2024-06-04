import mongoose from "mongoose"

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://viveksharma12200:E5ZFNFz4eRw39z7a@clustertomato.smhp73s.mongodb.net/food-del',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
        console.log("db not connected")
    })
}