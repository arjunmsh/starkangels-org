/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new' : function(req, res)

                        {                    
	res.view('session/new'); 
                        },
create: function(req,res, next)



                         {


	if (!req.param('email') || !req.param('password'))
	                             {
		var usernamepasswordRequiredError = [{name: 'usernamepasswordrequired', message: 'you must enter username ane email'}]
    req.session.flash =                 {


    	err: usernamepasswordRequiredError
                                        }

    res.redirect('/session/new');
    return;
	                             }
user.findOneByEmail(req.param('email')).done(function(err,user)
                                 {
	if (err) return next (err);
	if (!user)                         {


		var noAccountError = [{name: 'noAccount', message: 'The email address' + req.param('email') + 'not found.' }]
		req.session.flash =                 {
			err: noAccountError
		                                    }
		res.redirect('/session/new');
		return;
	                                   } 
	bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid)
	                             {
		if(err) return next(err);

		if (!valid)
                                       {
	var usernamePasswordMismatchError = [{name: 'usernamePasswordMismatch', message: 'invalid username and password combination'}]
	req.session.flash =                      {
		err: usernamePasswordMismatchError
	                                         }
	res.redirect('session/new');
	return;
                                        }
	req.session.authenticated = true;
	req.session.user = user;
	res.redirect('/user/show' + user.id);
                                 	
                      });
              });

}

};
