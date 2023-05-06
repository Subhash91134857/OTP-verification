const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const UserRoutes=require('./routes/userRoutes')



const app = express();
const port = process.env.PORT;

//  cors policy
app.use(cors());
 
// JSON
app.use(express.json());

// Load Routes
app.use('/api/user',UserRoutes)

app.listen(port, () => {
    console.log(`Server listening at https:\\localhost${port}`)
})