var express = require('express');
var router = express.Router();

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
          app_name: app_name,
          home_page: true
      });
  }
});

router.get('/contact', (req, res, next) => {
  let user = req.user;
  res.render('pages/contact', {
      app_name: `Test Page | ${app_name}`,
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
  console.log(req.body)
  userControl.contact.message(req.body)
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
      app_name: `${app_name}`,
      page_head: 'News & Updates',
      page_nav_name: 'Updates',
      breadcrumbs: true,
      updates_page: true
    });
});

router.get('/registration', function (req, res, next) {
  res.render('pages/registration',
    {
      app_name: `${app_name}`,
      page_head: 'Registration',
      page_nav_name: 'Registration',
    });
});

// router.get('/rank-list', function (req, res, next) {
//   res.render('pages/ranklist',
//     {
//       app_name: `Rank List | ${app_name}`,
//       page_head: 'Rank List of Online Test',
//       page_nav_name: 'rank-list'
//     });
// });

// router.get('/instructions/choosing-recruiters', function (req, res, next) {
//   res.render('pages/instructions',
//     {
//       app_name: `Instructions | ${app_name}`,
//       page_head: 'Instruction for choosing recruiters',
//       page_nav_name: 'instructions'
//     });
// });

router.get('/mocktest', function (req, res, next) {
  res.render('pages/mocktest',
    {
      app_name: `Mock Test | ${app_name}`,
      page_head: 'Mock Test',
      page_nav_name: 'mock test'
    });
});

router.get('/privacy-policy', function (req, res, next) {
  res.render('pages/privacy_policy',
    {
      app_name: `User Pricay Policy | ${app_name}`,
      page_head: 'User Pricay Policy',
      page_nav_name: 'pricay policy'
    });
});

router.get('/final-test', function (req, res, next) {
  res.render('pages/onlinetest',
    {
      app_name: `Online Test | ${app_name}`,
      page_head: 'Online Test',
      page_nav_name: 'online-test'
    });
});

router.get('/finaltest', function (req, res, next) {
  res.render('pages/onlinetest',
    {
      app_name: `Online Test | ${app_name}`,
      page_head: 'Online Test',
      page_nav_name: 'online-test'
    });
});

router.get('/online-test', function (req, res, next) {
  res.render('pages/onlinetest',
    {
      app_name: `Online Test | ${app_name}`,
      page_head: 'Online Test',
      page_nav_name: 'online-test'
    });
});

router.get('/onlinetest', function (req, res, next) {
  res.render('pages/onlinetest',
    {
      app_name: `Online Test | ${app_name}`,
      page_head: 'Online Test',
      page_nav_name: 'online-test'
    });
});

router.get('/test', (req, res, next) => {
  let user = req.user;
  res.render('test', {
      app_name: `Test Page | ${app_name}`,
      user
  });
});

router.post('/test', (req, res, next) => {
  let user = req.user;
  // console.log(req.body)
  res.send(
      {
          response: "acknowledged",
          status: true
      }
  );
});

module.exports = router;