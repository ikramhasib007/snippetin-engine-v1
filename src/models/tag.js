const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tagSchema = new Schema({
  language: { type: String, required: true },
  tags: [
    {
      name: { type: String },
    }
  ],
  isDeleted: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;