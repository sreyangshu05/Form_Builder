const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(process.env.UPLOADS_DIR));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
