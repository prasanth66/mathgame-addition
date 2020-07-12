const express=require('express');
const app=express();
const port=process.env.PORT || 8000;




app.use(express.static('./assests'));
app.set('view engine','ejs');
app.set('views','./views');





app.use('/',require('./routes'))
app.listen(port,(error)=>{
   if(error) {console.log('error in connecting to server',error);return;}
   console.log('server is up and running on port',port);
})