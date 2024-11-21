const { default: mongoose } = require("mongoose");

async function connector(){
    mongoose.connect('mongodb+srv://chaitanya:chaitanya@cluster0.g0n8l.mongodb.net/Splitzee').then(() => {
        console.log("DBCON");
    })
}

module.exports = {connector}