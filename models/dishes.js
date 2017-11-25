const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

// var commentSchema = new Schema({

//     comment:{
//         type:String,
//         required:true
//         },
//     rating:{
//         type:Number,
//         min:1,
//         max:10,
//         required:true

//     },
// },{
//     timestamps:true
// });

var dishSchema = new Schema({
         Firstname: {
            type: String,
            required: true,
            
        },
        Lastname: {
            type: String,
            required: true,
           
    
        },
        category: {
            type: String,
            required: true
        },
        ID:{
            type:Number,
            required:true
    
        }
        }    , {
        timestamps: true
    });

var Dishes = mongoose.model('dish',dishSchema);

module.exports = Dishes;

