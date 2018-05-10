import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLegth: [4, 'Title must be at least 4 caracters long'],
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
    ],
  },
  { timestamps: true, usePushEach: true }
);

CategorySchema.statics.addCategory = async function (id, args) {
  const Recipe = mongoose.model('Recipe');

  const recipe = await new Recipe({ ...args, category: id });

  const category = await this.findByIdAndUpdate(id, {
    $push: { recipes: recipe.id },
  });

  return {
    recipe: await recipe.save(),
    category,
  };
};

export default mongoose.model('Category', CategorySchema);
