import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    randomToken: { // Random token ke liye naya field
        type: String,
        required: true, // Agar ye field hamesha hona chahiye toh true rakhein
    },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
