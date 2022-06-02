import {news} from '../../../data'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(news)
  } else if (req.method === 'POST') {
    const title = req.body.title;
    const slug = req.body.slug;
    const content = req.body.content;
    const img = req.body.img;

    const newNews = {
      id: Date.now(),
      title,
      slug,
      content,
      img
    };

    news.push(newNews);

    res.status(201).json(newNews);
  } else if (req.method === 'DELETE') {
    const id = req.id;
    var removeIndex = news.map(item => item.id).indexOf(id);

    removeIndex && news.splice(removeIndex, 1);

    res.status(200).json({deleted:'true'});
  }
}
