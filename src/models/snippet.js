const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  description: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  slug: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  snippet: {
    type: String,
    minlength: 1,
    trim: true
  },
  tags: [
    {
      id: { type: Schema.Types.ObjectId },
      language: { type: String },
      tags: [
        {
          id: { type: Schema.Types.ObjectId },
          name: { type: String },
        }
      ]
    }
  ],
  comments: [
    {
      id: { type: Schema.Types.ObjectId },
      name: { type: String },
      comment: { type: String },
      likes: [
        {
          id: { type: Schema.Types.ObjectId },
          name: { type: String },
          isDetach: { type: Boolean, default: false }
        }
      ],
      hearts: [
        {
          id: { type: Schema.Types.ObjectId },
          name: { type: String },
          isDetach: { type: Boolean, default: false }
        }
      ],
      isDeleted: { type: Boolean, default: false },
      updatedAt: { type: Date },
      replies: [
        {
          id: { type: Schema.Types.ObjectId },
          name: { type: String },
          comment: { type: String },
          likes: [
            {
              id: { type: Schema.Types.ObjectId },
              name: { type: String },
              isDetach: { type: Boolean, default: false },
            }
          ],
          hearts: [
            {
              id: { type: Schema.Types.ObjectId },
              name: { type: String },
              isDetach: { type: Boolean, default: false }
            }
          ],
          isDeleted: { type: Boolean, default: false },
          updatedAt: { type: Date }
        }
      ]
    }
  ],
  shares: [
    {
      id: { type: Schema.Types.ObjectId },
      name: { type: String },
    }
  ],
  reputations: [
    {
      id: { type: Schema.Types.ObjectId },
      name: { type: String },
      isDetach: { type: Boolean, default: false },
    }
  ],
  visited: { type: Number },
  isDeleted: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;