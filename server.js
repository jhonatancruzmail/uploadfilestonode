const express=require('express');
const multer=require('multer');
const mimeTypes=require('mime-types');
const storage=multer.diskStorage({
    destination:"uploads/",
    filename: function (req,file,cb) {
        cb("",Date.now() + "." + file.originalname)
    }
});
const app=express();

const upload = multer({
    storage:storage
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})
app.post("/files",upload.single('file_name'),(req,res)=>{
    res.send('UPLOAD REQUEST FINE')
})

app.listen(3000,()=>console.log("server stated"));