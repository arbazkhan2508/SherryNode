var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
     ownerId:{
          type: mongoose.Schema.Types.ObjectId, 
          ref:"user"
     },
     name:String,
     review:String,
    stars: { type: Number, min: 1, max: 5 },  // Rating (1 to 5 stars)

},{timestamps:true,})

module.exports = mongoose.model("review", reviewSchema);
