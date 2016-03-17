/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    'register' : function(req,res) { res.view(); },
            

    create : function (req,res,next){
       User.create(req.params.all(), function userCreated ( err, user ) {
              if(err) {  console.log(err); res.redirect('/user/register');}
              res.json(user);
		});
              
 } 
};

