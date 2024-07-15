const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const db = require('./src/models');
require('dotenv').config();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
