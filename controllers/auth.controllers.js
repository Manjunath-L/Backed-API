import mongoose from "mongoose"

export const signUp = async (req, res, next) => {
    // Implement sign up  logic here
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Logic to create a new user
        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {
    // Implement sign in logic here

}

export const signOut = async (req, res, next) => {
    // Implement sign out  logic here

}