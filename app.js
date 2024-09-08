const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home - CS:GO 2' });
});

app.get('/aboutus', (req, res) => {
    res.render('partials/aboutus', { title: 'About Us - CS:GO 2' });
});

app.get('/faq', (req, res) => {
    res.render('partials/faq', { title: 'FAQ - CS:GO 2' });
});

app.get('/news', (req, res) => {
    res.render('partials/news', { title: 'News - CS:GO 2' });
});

// Error handling
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
