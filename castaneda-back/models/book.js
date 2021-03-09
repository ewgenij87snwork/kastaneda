import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true, default: 'Carlos Castaneda'} ,
  number: {type: Number, required: true},
  year: {type: Number, required: true},
  subtitle: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String},
  status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Available' },
  due_back: { type: Date, default: new Date() },
})

BookSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 

const Book = mongoose.model('Book', BookSchema);

export default Book;
