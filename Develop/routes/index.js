const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');


router.use('/apiRoutes', apiRoutes);
router.use('/homeRoutes', homeRoutes);

module.exports = router;
