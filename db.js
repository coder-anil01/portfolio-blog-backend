import mongose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongose.connect(process.env.MONGO_URI);
        console.log(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;