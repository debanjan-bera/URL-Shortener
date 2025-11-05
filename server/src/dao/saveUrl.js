import shortUrlSchema from "../models/shorturl.models.js";

export const saveShortUrl = async (longUrl, shortUrl,userId) => {
  const newURL = new shortUrlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });
  if(userId){
    newURL.user_id = userId
  }
  await newURL.save();
};
