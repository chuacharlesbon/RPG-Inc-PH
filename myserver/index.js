const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./routes/userRoutes')

/*

const productRoutes = require('./routes/productRoutes')

const orderRoutes = require('./routes/orderRoutes')

const messageRoutes = require('./routes/messageRoutes')

const chatRoutes = require('./routes/chatRoutes')*/

mongoose.connect("mongodb+srv://admin_chua:batch169@batch169chua.g8jtg.mongodb.net/RPG-Inc-Ph?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));

db.once('open', () => console.log('Connected to New MongoDb Project'));

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);

/*app.use('/messages', messageRoutes);

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use('/chats', chatRoutes);*/

app.listen(port, () => console.log (`Server is now running at port ${port}`))