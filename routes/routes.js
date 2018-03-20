var appRouter = function(app, data) {

  app.get('/things', (req, res) => {
    res.send(data.get.things);
  });

  app.get('/thing/:thingId', (req, res) => {
    const thing = data.get.things.find(thing => {
      return thing.id == req.params.thingId
    })

    if (!thing) {
      return res.send({
        'status': 'error',
        'message': `thing ${req.params.thingId} does not exist, try 18`
      })
    } else {
      res.send(thing);
    }
  });

  app.post('/things', (req, res) => {
    if (!Object.keys(req.body).length) {
      return res.send({
        'status': 'error', 
        'message': 'missing request body'
      });
    } else {
      for (key in req.body) {
        data.post[key] = req.body[key];
      }
      res.send(data.post);
    }
  });

  app.put('/thing/:thingId', (req, res) => {
    if (!Object.keys(req.body).length) {
      return res.send({
        'status': 'error', 
        'message': 'missing request body'
      });
    } else {
      for (key in req.body) {
        data.put[key] = req.body[key];
      }
      res.send(data.put);
    }
  });

  app.delete('/thing/:thingId', (req, res) => {
    res.send({
      'status': 'ok',
      'message': 'successful delete',
      'id': req.params.thingId
    })
  })

}

module.exports = appRouter;