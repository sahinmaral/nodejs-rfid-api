exports.getIndexPage = (req, res) => {
  return res.status(200).send({ message: "This is Node-JS RFID Card API" });
};
