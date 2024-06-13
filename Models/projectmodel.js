const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
title:{
 type:String,
 required:true
},
description:{
 type:String,
 required:true
},
tecnologies:{
 type:String,
 required:true
},
coverImg:{
 type:String,
 required:true
},
website:{
 type:String,
 required:true,
 unique:true
},
github:{
 type:String,
 required:true,
//  unique:true
},
userId:{
 type:String,
 required:true
}

});

//model creation - name same as db collection 

const projects = mongoose.model("projects",userSchema)

//exporting model to be used in controllers
module.exports=projects;