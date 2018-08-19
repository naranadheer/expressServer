const express=require('express');

const view=require('hbs');



var app=express();
app.set('view engine','hbs')
app.get('/help',(req,res)=>{

    res.send('Hello')

})

app.get('/about',(req,res)=>{
res.render('about.hbs',{
    name:'Rana'
})


})

app.get('/home',(req,res)=>{

    res.send({
    name:'Rana',
    likes:[
        'Movies',
        'Shopping'
    ]

    })

})

app.listen(3000)