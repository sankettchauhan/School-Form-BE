const express=require("express")
const router=express.Router()
const {Form}=require('../models/form')

router.post("/",createFormData)

async function createFormData(req, res) {
  // const {error}=validateForm(req.body)
  // if(error) return res.status(400).send(error.details[0].message)
});

module.exports=router;