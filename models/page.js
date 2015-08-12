var mongoose = require("mongoose");
var schema = new mongoose.Schema({
   title: {
       type: String, 
       required: true
   },
   urlTitle: {
       type: String, 
       required: true
   },
   content: {
       type: String, 
       required: true
   },
   date: {
       type: Date
   },
   status: {
       type: Boolean, 
       required: true
   },
   author: {
       type: String, 
       required: true
   }
});


var Page = mongoose.model("Page", schema);
module.exports = Page;