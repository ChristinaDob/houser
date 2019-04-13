module.exports = {
  getHouses: (req, res) => {
    console.log('get houses endpoint');
    const db = req.app.get('db');
    db.get_houses()
      .then(response => {
        console.log('houses');
        res.status(200).send(response);
      })
      .catch(err => {
        console.log('error message', err);
        send.status(500).send(err);
      });
  },
  createHouse(req, res) {
    const db = req.app.get('db');
    const { name, address, city, state, zip } = req.body;
    console.log('create house', req.body);
    db.create_house([name, address, city, state, zip])
      .then(response => {
        console.log('house created');
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(`there was an error posting to the server`, err);
        send.status(500).send(err);
      });
  },
  deleteHouse(req, res) {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log(`deleting house from db`, id);
    db.delete_house({ id }).then(response => {
      res.status(200).send(response);
      console.log(`delete house`);
    });
  }
};
