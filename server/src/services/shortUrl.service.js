import { nanoid } from "nanoid";
import shortUrlSchema from "../models/shorturl.models.js";
import { saveShortUrl } from "../dao/saveUrl.js";
export const shortUrlWithoutUserServices = async (url) => {
  try {
    const shortUrl = await nanoid(7); // removed await

    await saveShortUrl(url,shortUrl)
    return shortUrl
    
  } catch (err) {
    console.log(err);
  }
};

export const shortUrlWithUserServices = async (url,userId) => {
  try {
    const shortUrl = await nanoid(7); // removed await
    await saveShortUrl(url,shortUrl,userId)
    return shortUrl
    
  } catch (err) {
    console.log(err);
  }
};

