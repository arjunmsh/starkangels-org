/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = 
{
	'new' : function (req, res)
	       {
	res.view(); 
            },

  create: function(req, res)
           {
    // Create a User with the params sent from
    // the sign-up form --> new.ejs
    User.create(req.params.all(), function userCreated(err, user) 
              {

      if (err)
                    {
        req.session.flash = 
                          {
          err: err
                          };
        return res.redirect('/user/new');
                    }
      return res.json(user);
      req.session.flash = {};
               });
          }, 




 
          show: function(req, res, next) 
                {
    User.findOne(req.param('id'), function foundUser(err, user) 
                    {
      if (err) return next(err);
      if (!user) return next();
      res.view({user: user});
                    });
                },
        
        index: function(req, res, next)
        {

        	console.log(new date());
        	console.log(req.session.authenticated);
        	user.find(function foundUser (err, user)

        		{
        			if (err) return next(err);
        			res.view({
        				users : users
        			}) ;
        		});
        },

        edit: function(req, res, next) 
        { 
      
        	User.findOne(req.param('id'), function foundUsers (err, users)
        	
        	{
        	if (err) return next (err);
        	if (!user) return next ('User doesn\'t exist.');
        	res.view({
        		user : user
        	});	
        	});
        },  

update: function(req, res, next) 
{
	User.update(req.param('id'), req.params.all(), function userUpdated(err)
	{
           if (err)
            {
 	             return res.redirect('/user/edit/' + req.param('id'));
                
            }
    
res.redirect('/user/show/' + req.param('id'));
    });
}
       
  
};

