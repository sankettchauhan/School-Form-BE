const express = require("express");
const router = express.Router();
const { Form } = require("../models/form");

router.post("/", createFormData);

async function createFormData(req, res) {
  // const {error}=validateForm(req.body)
  // if(error) return res.status(400).send(error.details[0].message)
  let form = new Form({ ...req.body });
  try {
    form = await form.save();
    res.status(200).send(form);
  } catch (error) {
    res.status(500).send(`An Error Occured.\n ${error}`);
  }
}

module.exports = router;
