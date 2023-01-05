const express = require("express");
const app = express();
const postBank = require('./postBank');

app.use(express.static('public'))


app.get("/", (req, res) => {
  const posts = postBank.list()
  //console.log(posts)
  res.send (
`<html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
          <header><img src="/logo.png"/>Wizard News</header>
         ${posts.map(post => `
         <a href="/posts/${post.id}">${post.title}</a>
           <div class='news-item'>
             <p>
             <span class="news-position">${post.id}. ▲</span>
             ${post.title}
               <small>(by ${post.name})</small>
             </p>
               <small class="news-info">
               ${post.upvotes} upvotes | ${post.date}
              </small>
            </div>`
         ).join('')}
       </div>
    </body>
</html>
`);
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(`<html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
      <p>
      <span class="news-position">${post.id}. ▲</span>
      ${post.title}
        <small>(by ${post.name})</small>
      </p>
      <p>
      ${post.content}
      </p>
        <small class="news-info">
        ${post.upvotes} upvotes | ${post.date}
       </small>
     </div>
  </body>
</html>
`);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
