const express = require('express')
const app = express()



app.get('/', (request,  response) => {
  response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (request, response) => {
  response.redirect('https://en.wikipedia.org/wiki/List_of_Anthony_Hopkins_performances#Film')
})

app.get('/photogallery', (request, response) => {
  response.redirect('https://www.google.com/search?q=anthony+hopkins+movies+album&tbm=isch&ved=2ahUKEwjbzvqlx-HyAhUK_xoKHbGFAlAQ2-cCegQIABAA&oq=anthony+hopkins+movies+album&gs_lcp=CgNpbWcQAzoECAAQQzoFCAAQgAQ6BAgAEB46BggAEAUQHjoECAAQEzoGCAAQHhATOggIABAFEB4QEzoGCAAQCBAeUNGnAVjjwgFg5MMBaABwAHgAgAGtAYgBnA-SAQQwLjEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=em0xYdupD4r-a7GLioAF&bih=714&biw=1386')
})

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'))