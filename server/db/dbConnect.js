const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async function dbConnect(){
                    try {
                       await mongoose.connect(process.env.DB_URL,{
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                        })
                        console.log('DB connected successfully')
                    } catch (error) {
                        console.log('DB not connected')
                        console.error(error);
                    }
}