//1
//import modules
const express = require('express');
const books = require('../../Books')

//2
//initialize  routes
const router = express.Router();

//3
//create routes
//get request
router.get('/', (req, res)=>{
    console.log(req.params)
    res.render('books', {
        data: books
    })
})

router.get('/:id', (req, res)=>{
    const reqParams = parseInt(req.params.id)
    const found =  books.some(book => book.id === reqParams);

    if(found){
        books.filter(book =>{
            if(book.id === reqParams){
                res.render('books-list', {
                    data: book
                })
            }
        })
    }
})

router.post('/', (req, res)=>{
    const newId = books.length + 1;
    const addNewBook =  {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    }
    console.log(req.body);
    

    books.push(addNewBook);
    res.redirect('/api/book')
})

module.exports = router;