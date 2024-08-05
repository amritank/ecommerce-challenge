const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(data);


  } catch (err) {
    console.log(`Error during Get tags call: ${err}`);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id, {
      include: [Product]
    })
    // res.status(200).json(data);
    console.log("data: ", data);
    if (data !== null) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ msg: "No record foudn with that id!" })
    }


  } catch (err) {
    console.log(`Error during Get tags call: ${err}`);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const data = await Tag.create(
      {
        tag_name: req.body.tag_name
      }
    )
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error during Post tag call: ${err}`);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {

    const data = await Tag.update(
      { tag_name: req.body.tag_name, },
      { where: { id: req.params.id } }
    );
    if (data[0] === 0) {
      return res.status(404).json({ msg: "No record found with that id." });
    }
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error while updating tag: ${err}`);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (data === 0) {
      return res.status(404).json({ msg: "No record found with that id." });
    }
    res.status(200).json(data);

  } catch (err) {
    console.log(`Error while deleting tag: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;
