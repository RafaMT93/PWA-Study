import express from 'express';
import cors from 'cors';
import economy from './economy.json';
import technology from './technology.json';
import world from './world.json';

const GROUP_NEWS = {
  economy,
  technology,
  world
}

const APP = express();
const PORT = process.env.PORT || 3000;

APP.use(cors());

APP.get('/api', function(req, res) {
  res.json({
    economy,
    technology,
    world
  })
});

APP.get('/api/:subject', function(req, res) {
  const { subject } = req.params;
  res.json(GROUP_NEWS[subject])
});

APP.get('/api/:subject/:id', function(req, res) {
  const { subject, id } = req.params;
  const allNews = GROUP_NEWS[subject];
  const news = allNews.value.find(news => news.id === id);
  res.json(news);
})

APP.listen(PORT, function() {
  console.log(`Server running on ${PORT} PORT`);
})