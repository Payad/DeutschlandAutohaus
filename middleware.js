module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
// console.log('REQ USER...', req.user)
        return next();
    }
        req.flash('error', 'You must be signed in' )
        res.redirect('/login')
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {

}
}

function isAdmin(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('deutchlandautohaus/admin_dashboard');
    }

    if (req.user.role !== 'admin') {
        return res.status(403).send('Access denied');
    }

    next();
}

module.exports = { isAdmin };