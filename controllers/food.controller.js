module.exports.insertFood = async (req, res) => {
  res.status(200).json({message: "insertFood OK"})
}
module.exports.getFoods = async (req, res) => {
  console.log('getFoods')
  res.status(200).json({message: "getFood OK"})
}
module.exports.deleteFood = async (req, res) => {
  res.status(200).json({message: "deleteFood OK"})
}
module.exports.updateFood = async (req, res) => {
  res.status(200).json({message: "updateFood OK"})
}