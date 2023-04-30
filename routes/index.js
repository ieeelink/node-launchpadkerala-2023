var express = require('express');
var router = express.Router();
const controller = require('../controller/user');

var app_name = 'Launchpad Kerala'

/* GET home page. */

/* GET home page. */
router.get('/', (req, res, next) => {
    let user = req.user
    // console.log(req.user);
    if (user && user.permissions.admin) {
        res.redirect('/admin/')
    } else {
        res.render('index', {
            title: app_name,
            home_page: true
        });
    }
});

router.get('/contact', (req, res, next) => {
    let user = req.user;
    res.render('pages/contact', {
        title: `Test Page | ${app_name}`,
        user
    });
});

router.post('/contact', (req, res, next) => {
    let user = req.user;
    if (user) {
        req.body.user = user.id;
    } else {
        req.body.user = null;
    }
    // console.log(req.body)
    controller.contact.message(req.body)
        .then((response) => {
            res.send(
                {
                    response: "acknowledged",
                    status: true
                }
            );
        })
        .catch((error) => {
            res.send(
                {
                    error,
                    status: false
                }
            );
        })
});

router.get('/updates', function (req, res, next) {
    res.render('updates',
        {
            title: `Updates | ${app_name}`,
            page_head: 'News & Updates',
            page_nav_name: 'Updates',
            breadcrumbs: true,
            updates_page: true
        });
});


router.get('/privacy-policy', function (req, res, next) {
    res.render('pages/privacy_policy',
        {
            title: `User Pricay Policy | ${app_name}`,
            page_head: 'User Pricay Policy',
            page_nav_name: 'pricay policy'
        });
});

router.get('/results', function (req, res, next) {
    res.render('pages/results',
        {
            title: `Results | ${app_name}`,
            page_head: 'Results',
            page_nav_name: 'Results',
            reults_page: true
        });
});

router.get('/results/view', function (req, res, next) {
    let message = req.flash('message');
    res.render('pages/result',
        {
            title: `Results | ${app_name}`,
            page_head: 'Results',
            page_nav_name: 'Results',
            reults_page: true,
            no_preloader: true,
            message,
        });
});

router.post('/results/view', function (req, res, next) {
    controller.candidate.view(req.body)
        .then((candidate) => {
            res.render('pages/view_result',
                {
                    title: `View Result | ${app_name}`,
                    page_head: 'Results',
                    page_nav_name: 'Results',
                    reults_page: true,
                    candidate
                });
        })
        .catch((error) => {
            req.flash('message', error);
            res.redirect('/results/view');
        })
});

router.get('/allotment', function (req, res, next) {
    res.render('pages/allotment',
        {
            title: `Allotment | ${app_name}`,
            page_head: 'Allotment',
            page_nav_name: 'Allotment',
            allotment_page: true
        });
});

router.get('/allotment/apply', function (req, res, next) {
    let message = req.flash('message');
    res.render('pages/allotment/apply',
        {
            title: `Allotment Application| ${app_name}`,
            page_head: 'Allotment',
            page_nav_name: 'Allotment',
            allotment_page: true,
            message
        });
});

router.post('/allotment/apply', function (req, res, next) {
    res.render('pages/allotment/apply',
        {
            title: `Allotment Application | ${app_name}`,
            page_head: 'Allotment',
            page_nav_name: 'Allotment',
            allotment_page: true
        });
});

router.get('/allotment/recruiters', function (req, res, next) {
    res.render('pages/allotment/recruiters',
        {
            title: `Allotment | ${app_name}`,
            page_head: 'Allotment',
            page_nav_name: 'Allotment',
            allotment_page: true
        });
});

module.exports = router;