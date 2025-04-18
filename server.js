// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const User = require('./models/User');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// // const cors = require('cors');
// // app.use(cors({ origin: 'https://onlinegatecse-web.onrender.com/' }));
// app.use('/uploads', express.static('uploads')); // Serve uploaded files

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gate_test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch(err => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use('/api/auth', authRoutes);




// // Save Test Progress Route
// app.post('/api/progress/save', require('./middleware/auth'), async (req, res) => {
//   const { testType, testId, score, totalMarks, accuracy, correctAnswers, attempted, timeSpent } = req.body;

//   if (!testType || !testId || score === undefined || totalMarks === undefined || accuracy === undefined) {
//     return res.status(400).json({ message: 'All required fields must be provided' });
//   }

//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     user.testProgress.push({
//       testType,
//       testId,
//       score,
//       totalMarks,
//       accuracy,
//       dateTaken: new Date(),
//       details: {
//         correctAnswers,
//         attempted,
//         timeSpent,
//       },
//     });

//     user.overallStats.totalTestsTaken += 1;
//     user.overallStats.bestScore = Math.max(user.overallStats.bestScore, (score / totalMarks) * 100);
//     const totalScorePercent = user.testProgress.reduce((sum, test) => sum + (test.score / test.totalMarks * 100), 0);
//     user.overallStats.averageScore = totalScorePercent / user.testProgress.length;

//     await user.save();

//     res.status(200).json({ message: 'Progress saved successfully' });
//   } catch (err) {
//     console.error('Save Progress Error:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // Get Test Progress Route
// app.get('/api/progress', require('./middleware/auth'), async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('testProgress overallStats');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.status(200).json({
//       testProgress: user.testProgress,
//       overallStats: user.overallStats,
//     });
//   } catch (err) {
//     console.error('Get Progress Error:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // // Start Server
// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const User = require('./models/User');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use('/uploads', express.static('uploads')); // Serve uploaded files

// // CORS Configuration
// const corsOptions = {
//   origin: ['https://newgatetest.onrender.com'], // Your deployed frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true, // If using cookies or auth headers
// };
// app.use(cors(corsOptions));

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gate_test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch(err => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use('/api/auth', authRoutes);

// // Save Test Progress Route
// app.post('/api/progress/save', require('./middleware/auth'), async (req, res) => {
//   const { testType, testId, score, totalMarks, accuracy, correctAnswers, attempted, timeSpent } = req.body;

//   if (!testType || !testId || score === undefined || totalMarks === undefined || accuracy === undefined) {
//     return res.status(400).json({ message: 'All required fields must be provided' });
//   }

//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     user.testProgress.push({
//       testType,
//       testId,
//       score,
//       totalMarks,
//       accuracy,
//       dateTaken: new Date(),
//       details: {
//         correctAnswers,
//         attempted,
//         timeSpent,
//       },
//     });

//     user.overallStats.totalTestsTaken += 1;
//     user.overallStats.bestScore = Math.max(user.overallStats.bestScore, (score / totalMarks) * 100);
//     const totalScorePercent = user.testProgress.reduce((sum, test) => sum + (test.score / test.totalMarks * 100), 0);
//     user.overallStats.averageScore = totalScorePercent / user.testProgress.length || 0;

//     await user.save();

//     res.status(200).json({ message: 'Progress saved successfully' });
//   } catch (err) {
//     console.error('Save Progress Error:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // Get Test Progress Route
// app.get('/api/progress', require('./middleware/auth'), async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('testProgress overallStats');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.status(200).json({
//       testProgress: user.testProgress,
//       overallStats: user.overallStats,
//     });
//   } catch (err) {
//     console.error('Get Progress Error:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

// server.on('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use. Trying ${PORT + 1}...`);
//     server.listen(PORT + 1);
//   } else {
//     console.error('Server error:', err);
//   }
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const User = require('./models/User');

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

// CORS Configuration
const corsOptions = {
  origin: ['https://newgatetest.onrender.com'], // Your deployed frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If using cookies or auth headers
};
app.use(cors(corsOptions));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gate_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/auth', authRoutes);

// Save Test Progress Route
app.post('/api/progress/save', require('./middleware/auth'), async (req, res) => {
  const { testType, testId, score, totalMarks, accuracy, correctAnswers, attempted, timeSpent } = req.body;

  if (!testType || !testId || score === undefined || totalMarks === undefined || accuracy === undefined) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    console.log('Auth user ID:', req.user?.id); // Debug: Log the authenticated user ID
    const user = await User.findById(req.user.id);
    if (!user) {
      console.log('User not found for ID:', req.user.id);
      return res.status(404).json({ message: 'User not found' });
    }

    // Initialize testProgress and overallStats if undefined
    user.testProgress = user.testProgress || [];
    user.overallStats = user.overallStats || { totalTestsTaken: 0, bestScore: 0, averageScore: 0 };

    user.testProgress.push({
      testType,
      testId,
      score,
      totalMarks,
      accuracy,
      dateTaken: new Date(),
      details: {
        correctAnswers,
        attempted,
        timeSpent,
      },
    });

    user.overallStats.totalTestsTaken += 1;
    user.overallStats.bestScore = Math.max(user.overallStats.bestScore, (score / totalMarks) * 100);
    const totalScorePercent = user.testProgress.reduce((sum, test) => sum + (test.score / test.totalMarks * 100), 0);
    user.overallStats.averageScore = totalScorePercent / user.testProgress.length || 0;

    await user.save();
    console.log('Progress saved for user:', user._id);

    res.status(200).json({ message: 'Progress saved successfully' });
  } catch (err) {
    console.error('Save Progress Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get Test Progress Route
app.get('/api/progress', require('./middleware/auth'), async (req, res) => {
  try {
    console.log('Auth user ID:', req.user?.id); // Debug: Log the authenticated user ID
    const user = await User.findById(req.user.id).select('testProgress overallStats');
    if (!user) {
      console.log('User not found for ID:', req.user.id);
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure testProgress and overallStats are returned even if empty
    const responseData = {
      testProgress: user.testProgress || [],
      overallStats: user.overallStats || { totalTestsTaken: 0, bestScore: 0, averageScore: 0 },
    };

    console.log('Progress fetched for user:', user._id, responseData);
    res.status(200).json(responseData);
  } catch (err) {
    console.error('Get Progress Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Trying ${PORT + 1}...`);
    server.listen(PORT + 1);
  } else {
    console.error('Server error:', err);
  }
});
