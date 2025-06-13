import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    extname: {
        type:String,
        required: true
    },
    bdate: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    }, 
    phone: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created_at: {
        type:Date, 
        default: Date.now
    },
    status: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    facial_Recognition: {
        type: String,
        required: true
    }
});

const staff = mongoose.model("Staff", staffSchema, "staff");

export default staff

//ig import a model sa repository







