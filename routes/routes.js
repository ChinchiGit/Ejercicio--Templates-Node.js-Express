const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('index.pug')
})

router.get('/about', function (req, res) {
    res.render('about.pug')
})

router.get('/location', function (req, res) {
    res.render('location.pug')
})

router.get('/mission', function (req, res) {
    res.render('mission.pug')
})

router.get('/contact', function (req, res) {
    res.render('contact.pug')
})

module.exports = router;