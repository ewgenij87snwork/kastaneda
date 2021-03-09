import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: { type: String, required: true, minlength: 3, maxlength: 15 },
    pass:  { type: String, required: true, minlength: 3, maxlength: 15 },
    role: { type: String, enum: ['Admin', 'Director', 'User'], default: 'User' }
})

UserSchema.virtual('position').get(function () {
    return !role ? 'User' : role;
})

UserSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
}); 

const User = mongoose.model('User', UserSchema);

export default User;
