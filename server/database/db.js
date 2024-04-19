import mongoose from 'mongoose';

const Connection = async () => {
    const URL = "mongodb+srv://nandanupadhyay1234:pkPPznLjgogmQZkC@cluster0.5ltnqvy.mongodb.net/blogApp";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;