const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

var deviceSchema = new Schema({

    name:{
        type:String,
        required:true
        },
    status:{
        type:String,
        required:true

    }
},{
    timestamps:true
});

var promoSchema = new Schema({
    Room: {
        type: Number,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
       
    },
    device: [deviceSchema],

    ID:{
        type:Number,
        required:true
    }
    } ,
    {
    timestamps: true
});

var Promos = mongoose.model('promo',promoSchema);

module.exports = Promos;

