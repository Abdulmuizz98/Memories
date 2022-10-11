import express from 'express';
import bp from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js';

const app = express();

app.use(bp.json({limit: '30mb', extended: true}));
app.use(bp.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', postsRoutes);

const CONNECTION_URL = "mongodb+srv://oraio:Lightening1998@cluster0.fbw2pow.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL /*{useNewUrlParser: true, useUnifiedTopology: true}*/)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);