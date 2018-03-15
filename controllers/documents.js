const models = require('../models');
const Document = models.Document;

// Callback function to add a new Document to the database
const add = (req, res) => {
  let newDocument = new Document(req.body);
  newDocument.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model)
  });
}

// Callback function to retrieve all Documents from the database
const showAll = (req, res) => {
  Document.find({}, (err, Documents) => {
    if (err) {
      res.send(err);
    }
    res.json(Documents);
  });
}

// Callback function to retrieve one Document from the database by id
const showOne = (req, res) => {
  Document.find({_id: req.params.Document_id}, (err, Document) => {
    if (err) {
      res.send(err);
    }
    res.json(Document);
  })
}

// Callback function to update one Document by id
const update = (req, res) => {
  Document.findOne({_id: req.params.Document_id}, (err, Document) => {
    Document.type = 'document';
    Document.childID = req.body.body.childID;
    Document.date = req.body.body.;
    Document.template = 'documentEat';
    Document.rest = req.body.body.rest;
    Document.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
}

// Callback function to remove one Document from the database by id
const remove = (req, res) => {
  Document.findByIdAndRemove(req.params.Document_id, (err, Document) => {
    if (err) {
      res.send(err);
    }
    res.json(Document);
  })
}

module.exports.add = add;
module.exports.showAll = showAll;
module.exports.showOne = showOne;
module.exports.update = update;
module.exports.remove = remove;