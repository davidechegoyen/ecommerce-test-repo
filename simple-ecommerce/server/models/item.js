import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new Schema({
    prodName: {
        type: String,
        required: true
    } ,
    prodURL:{
        type: String,
        required:true
    },
    prodPrice:{
        type: Number,
        required:true
    },
    prodStock:{
        type: Number,
        required:true
    },
    prodURL:{
        type: String,
        required:true
    },
    prodDescription:{
        type: String,
        required:true
    }
},{ timestamps: true })

const Item = mongoose.model('Item', itemSchema)
module.exports = Item