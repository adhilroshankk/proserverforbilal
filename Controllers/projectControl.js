exports.addProject=(req,res)=>{
    const {title,description,technologies,website,gitHub,userId}=req.body 
    // image access from multer
    const coverImg=req.file?filename
}