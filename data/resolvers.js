import mongoose from 'mongoose';
import User from '../models/user';


export const resolvers = {
  Query: {
    getOneUser: async (root, {id}) => {

      try {

        const foundUser = await User.findById(id);

        return foundUser;

      } catch(err) {
        console.log(err, ' this is')
        return err
      }

    },
    getUsers: async () => {
      try {
        const users = await User.find();

        return users;

      } catch(err){
        return err
      }
    }
  },
  Mutation: {
    createUser: async (root, args) => {
      console.log(args)
      try {
        const newUser = await User.create(args.input);
        console.log(newUser, ' this is new User')
        return newUser

      } catch(err) {
        return err
      }
    },
    updateUser: async (root, {input}) => {
      try {
        const updateUser = await  User.findOneAndReplace(input._id, input,{new: true});

        return updateUser
      } catch(err) {
        return err
      }
    },
    deleteUser: async (id) => {
      try {
        await User.findOneAndDelete(id)

        return 'User has been deleted'
      } catch(err){
        return err
      }
    }
  }
}
