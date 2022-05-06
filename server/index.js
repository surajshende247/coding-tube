const express = require('express');
require("dotenv").config();
const cors = require('cors');
const mongoose = require('mongoose');
const Video = require('./models/Video');


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true}, 
  ()=>{
  console.log('connected to mongoDB');
});


app.get('/', (req, res) =>{
  res.send('This is the home page');
})

app.get('/videos/all', async (req, res) => {
  const videoData = await Video.find();
  res.send(videoData);
});

app.post('/videos/add', async(req, res) => {

  const videoObject = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    channel: req.body.channel,
    thumbnail: req.body.thumbnail,
    keywords: req.body.keywords,
    videoUrl: req.body.videoUrl
  }

  const video = new Video(videoObject)
  await video.save()

  res.send({
    message: 'Video added successfully'
  })
 
});

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});