const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

// Routes
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));