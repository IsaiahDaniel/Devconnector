const express = require('express');
const connectDB = require('./config/db');


const app = express();
// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Api Running'));

// Api Routes
app.use('/api/', require('./routes/api/users'));
app.use('/api/', require('./routes/api/auth'));
app.use('/api/', require('./routes/api/post'));
app.use('/api/', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server running on port ${PORT}`));