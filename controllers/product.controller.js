const products = [];

exports.getAllProducts = (req, res) => {
  res.status(200).send(products);
};

exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }
  res.status(200).send(product);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).send(newProduct);
};

exports.updateProduct = (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }
  Object.assign(product, req.body);
  res.status(200).send(product);
};

exports.deleteProduct = (req, res) => {
  const productIndex = products.findIndex((p) => p.id == req.params.id);
  if (productIndex === -1) {
    return res.status(404).send({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(200).send({ message: "Product deleted" });
};
