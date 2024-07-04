const carts = {};

exports.getCart = (req, res) => {
  const userId = req.user.id;
  const cart = carts[userId] || [];
  res.status(200).send(cart);
};

exports.addItemToCart = (req, res) => {
  const userId = req.user.id;
  if (!carts[userId]) {
    carts[userId] = [];
  }
  carts[userId].push(req.body);
  res.status(201).send(carts[userId]);
};

exports.removeItemFromCart = (req, res) => {
  const userId = req.user.id;
  const itemIndex = carts[userId].findIndex((item) => item.id == req.params.id);
  if (itemIndex === -1) {
    return res.status(404).send({ message: "Item not found in cart" });
  }
  carts[userId].splice(itemIndex, 1);
  res.status(200).send(carts[userId]);
};
