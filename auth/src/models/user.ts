import mongoose from "mongoose";

// An  interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a User Mode has
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<any, UserModel>("User", userSchema);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

export { User };