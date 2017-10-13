var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saludos' });
});

router.post('/', function(req, res, next){
   var response = req.body
   response['Check'] = 'ok'
   res.status = 200;
   res.send(response)
})

router.get('/:name/:id', function(req, res, next){
   res.send({
     username : req.params.name,
     id : req.params.id
   })
})


module.exports = router;
