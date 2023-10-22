import passport from "passport";

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (err) {
            console.error('Error in passport.authenticate:', err);
            next(err);
        }
        if (!user) {
            console.error('User not found in passport.authenticate');
            return res.status(401).json({
                message: 'Unauthorised access'
            });
        }
        req.user = user;
        console.log('Authenticated user:', user);
        next();
    })(req, res, next);
};
