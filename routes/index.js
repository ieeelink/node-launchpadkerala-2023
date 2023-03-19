var express = require('express');
var router = express.Router();

var title = 'Launchpad Kerala'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: `${title}`,
    home_page: true
  });
});

router.get('/updates', function (req, res, next) {
  res.render('updates',
    {
      title: `${title}`,
      page_head: 'News & Updates',
      page_nav_name: 'Updates'
    });
});

router.get('/rank-list', function (req, res, next) {
  res.render('pages/ranklist',
    {
      title: `Rank List | ${title}`,
      page_head: 'Rank List of Online Test',
      page_nav_name: 'rank-list'
    });
});

router.get('/instructions/choosing-recruiters', function (req, res, next) {
  res.render('pages/instructions',
    {
      title: `Instructions | ${title}`,
      page_head: 'Instruction for choosing recruiters',
      page_nav_name: 'instructions'
    });
});

// router.get('/mocktest', function (req, res, next) {
//   res.render('pages/mocktest',
//     {
//       title: 'Mock Test | ${title}`,
//       page_head: 'Mock Test',
//       page_nav_name: 'mock test'
//     });
// });

// router.get('/final-test', function (req, res, next) {
//   res.render('pages/finaltest',
//     {
//       title: 'Online Test | ${title}`,
//       page_head: 'Online Test',
//       page_nav_name: 'online-test'
//     });
// });

// router.get('/online-test', function (req, res, next) {
//   res.render('pages/finaltest',
//     {
//       title: 'Online Test | ${title}`,
//       page_head: 'Online Test',
//       page_nav_name: 'online-test'
//     });
// });

module.exports = router;
