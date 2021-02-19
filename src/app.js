const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;


//Set view engine for using template engines
const template_path = path.join(__dirname, '/templates/views');
const partials_path = path.join(__dirname, '/templates/views/partials');

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

//Public static path.
const staticPagePath = path.join(__dirname, '../public');

//Rendering static page.
app.use(express.static(staticPagePath));


//Routing.
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/weather', (req, res) => {
	res.render('weather');
});

app.get('*', (req, res) => {
	res.render('404error');
});

app.listen(port, () => {
	console.log(`Listening on port number ${port} for project.`);
});