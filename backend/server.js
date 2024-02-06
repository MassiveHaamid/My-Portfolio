const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URI)

//   .then(() => {
//     console.log("connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Routes
const homeRoutes = require('./routes/homeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const proficiencyRoutes = require('./routes/proficiencyRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/', homeRoutes);
app.use('/profile', profileRoutes);
app.use('/proficiency', proficiencyRoutes);
app.use('/projects', projectsRoutes);
app.use('/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
