import Snippet from '../../models/snippet';
import Boom from '@hapi/boom';

const all = async (request, h) => {
  try {
    const snippets = await Snippet.find({ isDeleted: false });
    return h.response(snippets).code(200);
  } catch (error) {
    return h.response(Boom.badRequest(error.toString())).code(400);
  }
}

const byId = async (request, h) => {
  try {
    const snippet = await Snippet.findOne({ _id: request.params.id, isDeleted: false });
    if(!snippet) return h.response().code(404);
    return h.response(snippet).code(200);
  } catch (error) {
    return h.response(Boom.badRequest(error.toString())).code(400)
  }
}

export default {
  all,
  byId
}