import shortUrlSchema from "../models/shorturl.models.js";

export const getShortUrl = async (id) => {
  return await shortUrlSchema.findOneAndUpdate({ short_url: id },{$inc:{clicks:1}});
};
