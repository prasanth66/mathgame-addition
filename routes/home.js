const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');



router.get('/',homeController.home);
router.get('/addition:level',homeController.addition);
router.get('/game:avatar',homeController.game);


module.exports=router;  