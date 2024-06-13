const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE).then(out=>{
    console.log("______mongodb server connected____");
}).catch(err=>{
    console.log(`mongodb server not connected reason::${err}_____`);
})