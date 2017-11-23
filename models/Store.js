import slug from 'slugs';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
});

storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
});

export default mongoose.model('Store', storeSchema);
