import mongoose, { Schema } from 'mongoose';

const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [5, '5 characters long at least'],
    },
    description: {
      type: String,
      required: true,
      minLength: [5, '20 characters long at least'],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true, usePushEach: true }
);

export default mongoose.model('Recipe', RecipeSchema);
