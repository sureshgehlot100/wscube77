const { error } = require('console');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sureshgehlot7860:ghc4XMpxq8wV36gj@suresh.0qp461h.mongodb.net/file_uploadation_tmp?retryWrites=true&w=majority&appName=suresh')
.then(()=>{
    console.log('database connected successfully')
})
.catch((error)=>{
    console.log(error)
});


