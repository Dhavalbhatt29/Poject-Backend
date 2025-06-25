// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./utilities/connectdb');
// const todayRoute = require('./routes/today_route');
// const port = 5000;
// const app = express();
// const fs = require('fs');
// const upload = require('./utilities/upload');
// const product = require('./routes/product_route')

const { connect } = require("mongoose")

// app.use(cors());
// app.use(express.json());
// app.use('/api', todayRoute );
// app.use('/product', product );

// app.post('/upload', upload.array('image'), (req, res) => {
//     const filename  = req.files.map(file => file.filename);
//     const path = req.files.map(file => file.path);
//     return res.status(200).json({status:true, data:{message:"File uploaded successfully", path:path, filename:filename}})
// })


//     const startServer = async () => {
//         try{
//             const dbstatus = await connectDB(); 
//             if(dbstatus){
//                 app.listen(port, () => {
//                     console.log(`Server is running on port ${port}`);
//                 });
//             }else{
//                 console.error("Error in starting server");
//             }
            
//         }
//         catch(error){
//             console.error("Error in starting server");
//         }
//     }

//     startServer();



