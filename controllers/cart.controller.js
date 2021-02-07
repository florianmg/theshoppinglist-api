const Cart = require('../models/Cart.model');

const handleErrors = (err) => {
  let errors = {};
  errors.message = err.message;
  return errors;
}

/**
 * Get a list of items in cart
 */
module.exports.getCart = async (req, res) => {
  try {
    const currentCart = await Cart.find();
    return res.status(200).json({currentCart});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * delete item from cart with cartId
 * params: cartId
 */
module.exports.deleteFromCart = async (req, res) => {
  const {cartId} = req.params;
  try {
    const deletedCart = await Cart.findByIdAndDelete({cartId});
    return res.status(200).json({deletedCart});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * add a new a item to cart
 * body: cartId
 */
module.exports.addToCart = async (req, res) => {
  const {cartId} = req.body;
  try {
    const newCart = await Cart.create({
      cartId
    });
    return res.status(200).json({newCart});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}