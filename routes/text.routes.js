const {Router} = require('express')
const Text = require('../models/Text')
const Subject = require('../models/Subject')
const Event = require('../models/Event')
const router = Router()

router.post('/addsubject', async(req, res) =>{
  try {

    const {name, officehours, contact, mark, state} = req.body
    const subject = new Subject({state , name, officehours, contact, mark})
    subject.save()

    res.status(201).json({ message:"обьект создан" })
  } catch (e) {

  }
})

router.post('/addevent', async(req, res) =>{
  try {

    const {name, date, place, type, state} = req.body
    const event1 = new Event({name, date, place, type, state})
    event1.save()

    res.status(201).json({ message:"обьект создан" })
  } catch (e) {

  }
})


router.post('/delsubject', async (req, res) => {
  try {

    const {name} = req.body
    const delsubject = await Subject.updateOne({name}, {$set: {state : "0"}})

    res.status(201).json({message:name})
  } catch (e) {
    res.status(500).json({e})
  }
})

router.post('/takesubject', async (req, res) => {
  try {

    const {name} = req.body
    const takesubject = await Subject.updateOne({name}, {$set: {state : "1"}})

    res.status(201).json({message:name})
  } catch (e) {
    res.status(500).json({e})
  }
})


router.get('/getevent1', async(req,res)=>{
  try {

    const type = "развлекательные"

    const event1 = await Event.find({type:type})

    res.status(201).json(event1)

  } catch (e) {

  }
})

router.get('/getevent2', async(req,res)=>{
  try {

    const type = "учебные"

    const event1 = await Event.find({type:type})
    res.status(201).json(event1)

  } catch (e) {

  }
})

router.get('/getsubject', async(req,res)=>{
  try {

    const state = "1"

    const subject = await Subject.find({state:state})
    res.status(201).json(subject)

  } catch (e) {

  }
})

router.get('/getsubject0', async(req,res)=>{
  try {

    const state = "0"

    const subject = await Subject.find({state:state})
  res.status(201).json(subject)

  } catch (e) {

  }
})

router.post('/addtext', async (req, res) => {
  try {

    const {text, key} = req.body
    const text1 = text.toLowerCase()
    const key1 = key.toLowerCase()

    const mes = new Text({text, key})
    mes.save()
    res.status(201).json({message:"обьект создан"})
  } catch (e) {
    res.status(500).json({e})
  }
})

router.post('/textsearch', async (req, res) => {
  try {
  const {key} = req.body
    const key1 = key.toLowerCase()
    const str = key1;
    const arr = str.split(" ");
    let mes;
    for(let i=0; i<arr.length; i++){
      console.log(arr[i]);
      const re = new RegExp(arr[i]);
      mes = await Text.findOne({"key" : re});
      if(mes !== null){
        return res.status(201).json({message:mes.text})
      }
    }
  } catch (e) {
    res.status(500).json({e})
  }
})

router.get('/gettext', async(req,res)=>{
  try {
    const text = await Text.find({state:"1"})
    res.status(201).json(text)
  } catch (e) {

  }
})




module.exports = router
