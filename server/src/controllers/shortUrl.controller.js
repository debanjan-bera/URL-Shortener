import { shortUrlWithoutUserServices } from "../services/shortUrl.service.js";
import { getShortUrl } from "../utils/shortUrlHelper.js";

export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const shortUrl = await shortUrlWithoutUserServices(url);

    res.status(201).json({
      message: "Short URL created successfully",
      shortUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating short URL", error });
  }
};

export const redirectMainUrl = async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id) // returns full objects!!!
  if (url) res.redirect(url.full_url);
  else res.status(404).send("Not Found");
}