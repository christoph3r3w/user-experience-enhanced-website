import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const PORT = 3001;

// Load the Api.json data
const data = JSON.parse(await readFile('./Api.json', 'utf-8'));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// WordPress REST API routes

// GET /wp-json/wp/v2/posts - Get all posts
app.get('/wp-json/wp/v2/posts', (req, res) => {
  console.log('📄 GET /wp-json/wp/v2/posts');
  res.json(data.posts || []);
});

// GET /wp-json/wp/v2/posts/:id - Get single post
app.get('/wp-json/wp/v2/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`📄 GET /wp-json/wp/v2/posts/${id}`);
  
  const post = data.posts?.find(p => p.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ 
      code: 'rest_post_invalid_id', 
      message: 'Invalid post ID.',
      data: { status: 404 }
    });
  }
});

// GET /wp-json/wp/v2/users - Get all users/authors
app.get('/wp-json/wp/v2/users', (req, res) => {
  console.log('👤 GET /wp-json/wp/v2/users');
  res.json(data.authors || []);
});

// GET /wp-json/wp/v2/users/:id - Get single user/author
app.get('/wp-json/wp/v2/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`👤 GET /wp-json/wp/v2/users/${id}`);
  
  const user = data.authors?.find(a => a.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ 
      code: 'rest_user_invalid_id', 
      message: 'Invalid user ID.',
      data: { status: 404 }
    });
  }
});

// GET /wp-json/wp/v2/categories - Get all categories
app.get('/wp-json/wp/v2/categories', (req, res) => {
  console.log('📁 GET /wp-json/wp/v2/categories');
  res.json(data.categories || []);
});

// GET /wp-json/wp/v2/categories/:id - Get single category
app.get('/wp-json/wp/v2/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`📁 GET /wp-json/wp/v2/categories/${id}`);
  
  const category = data.categories?.find(c => c.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ 
      code: 'rest_no_route', 
      message: 'No route was found matching the URL and request method.',
      data: { status: 404 }
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log('\n🚀 Mock WordPress REST API Server Started!\n');
  console.log(`   Running on: http://localhost:${PORT}\n`);
  console.log('📡 Available endpoints:');
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/posts`);
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/posts/:id`);
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/users`);
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/users/:id`);
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/categories`);
  console.log(`   GET http://localhost:${PORT}/wp-json/wp/v2/categories/:id\n`);
  console.log('📝 Data loaded from: Api.json\n');
  console.log('Press Ctrl+C to stop\n');
});
