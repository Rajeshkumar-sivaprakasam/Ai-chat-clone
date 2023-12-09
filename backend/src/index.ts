import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 8000;
connectToDatabase().then(()=>{
  app.listen(PORT,()=>{
    console.log("Server is Open")
  })
}).catch(()=>{
  console.log("Not able to connect!")
})
