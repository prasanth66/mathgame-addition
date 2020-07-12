var lev='beginner'

//method to controlhome page
module.exports.home=async function(req,res){
    try {
        return res.render('home')
        
    } catch (error) {
        console.log("error in opening home page",error);
        return res.json(500,{
           message:"internal server error"
       });
    }
}

//method to control avatar page
module.exports.addition=async function(req,res){
    try {

        const level=(req.params.level).substring(1);
        lev=level;
       
        return res.render('avatar');
        
    } catch (error) {
        console.log("error in avatar page",error);
        return res.json(500,{
           message:"internal server error"
       });
    }
}


//method to control home page
module.exports.game=async  function(req,res){
    try {
        
        const animal=(req.params.avatar).substring(1);
        return res.render('game',{
            animal:animal,
            level:lev
        })
        
    } catch (error) {
        console.log("error in game page",error);
        return res.json(500,{
           message:"internal server error"
       });
    }
}