import {books} from '../../../data'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(books)
  } else if (req.method === 'POST') {
    const title = req.body.title;
    const slug = req.body.slug;
    const category = req.body.category;
    const author = req.body.author;

    const newBook = {
      id: Date.now(),
      title,
      slug,
      category,
      author
    };

    books.push(newBook);

    res.status(201).json(newBook);
  }
}
