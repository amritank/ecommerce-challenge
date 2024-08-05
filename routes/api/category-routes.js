const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: [Product]
    })
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error during Get categories call: ${err}`);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [Product]
    })
    if (data === null) {
      return res.status(500).json({ "msg": "No record found with that id" });
    }
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error during Get categories call: ${err}`);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create(
      {
        category_name: req.body.category_name
      }
    )
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error during Post categories call: ${err}`);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    console.log("updating");
    const data = await Category.update(
      { category_name: req.body.category_name, },
      { where: { id: req.params.id } }
    );
    if (data[0] === 0) {
      return res.status(404).json({ msg: "No record found with that id." });
    }
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error while updating product: ${err}`);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: { id: req.params.id }
    });
    if (data === 0) {
      return res.status(404).json({ msg: "No record found with that id." });
    }
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error while deleting category: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;
