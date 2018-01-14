var express = require("express")
var Sequelize = require("sequelize")
var nodeadmin = require("nodeadmin")

//FASJNDSAIC CORS = 4 ore din viata 
var cors=require('cors')
var app=express()
//app.use(cors()); down



var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//connection

var sequelize = new Sequelize('tracklist', 'root', '', {
    dialect:'mysql',
    host:'localhost'
})

sequelize.authenticate().then(function(){
    console.log('Success!!!')
})

//define sequelize Model
var Categories = sequelize.define('categories', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
})

var Tracks = sequelize.define('tracks', {
    name: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
    locstart: Sequelize.STRING,
    locend: Sequelize.STRING,
    rating: Sequelize.STRING
})

Tracks.belongsTo(Categories, {foreignKey: 'category_id', targetKey: 'id'})

var app = express()
app.use('/nodeamin', nodeadmin(app))

//access static files
app.use(express.static('public'))
app.use('/admin', express.static('admin'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors());



// cat
// get a list of categories
app.get('/categories',cors(), function(request, response) {
    Categories.findAll().then(function(categories){
        response.status(200).send(categories)
    })
        
})


//create new category
app.post('/categories',cors(), function(request, response) {
    Categories.create(request.body).then(function(category) {
        response.status(201).send(category)
    })
})

// read category by id
app.get('/categories/:id',cors(), function(request, response) {
    Categories.findOne({where: {id:request.params.id}}).then(function(category) {
        if(category) {
            response.status(200).send(category)
        } else {
            response.status(404).send()
        }
    })
})


//update category by id
app.put('/categories/:id',cors(), function(request, response) {
    Categories.findById(request.params.id).then(function(category) {
        if(category) {
            category.update(request.body).then(function(category){
                response.status(201).send(category)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//delete category by id
app.delete('/categories/:id',cors(), function(request, response) {
    Categories.findById(request.params.id).then(function(category) {
        if(category) {
            category.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//endof cat
//tracks

// get a list of tracks

app.get('/tracks', cors(), function(request, response) {
    Tracks.findAll(
        {
            include: [{
                model: Categories,
                where: { id: Sequelize.col('tracks.category_id') }
            }]
        }
        
        ).then(
            function(track) {
                response.status(200).send(track)
            }
        )
})

// read track by id

app.get('/tracks/:id', cors(),function(request, response) {
    Tracks.findById(request.params.id).then(
            function(track) {
                response.status(200).send(track)
            }
        )
})

//create new track

app.post('/tracks',cors(), function(request, response) {
    Tracks.create(request.body).then(function(track) {
        response.status(201).send(track)
    })
})



//update existing track by id

app.put('/tracks/:id',cors(), function(request, response) {
    Tracks.findById(request.params.id).then(function(track) {
        if(track) {
            track.update(request.body).then(function(track){
                response.status(201).send(track)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//delete track by id

app.delete('/tracks/:id',cors(), function(request, response) {
    Tracks.findById(request.params.id).then(function(track) {
        if(track) {
            track.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//show track by category_id

app.get('/categories/:id/track',cors(), function(request, response) {
    Tracks.findAll({where:{category_id: request.params.id}}).then(
            function(track) {
                response.status(200).send(track)
            }
        )
})

app.listen(8080);