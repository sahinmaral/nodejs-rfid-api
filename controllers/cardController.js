const Card = require("../models/Card");

exports.verifyCard = async (req, res) => {
  try {
    const card = await Card.findOne({ uid: req.params.uid });

    if (card) {
      res.status(200).send({
        message: "Authorized access",
      });
    } else {
      res.status(404).send({
        message: "Invalid card",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
};
