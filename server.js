import express from "express";
import path from "path";
import crypto from "crypto";
import {readFile, writeFile } from "fs/promises";

const app = express();

const DATA_FILE = path.join("data", "links.json");

app.use(express.static("public"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw err;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

// Home route: shows all shortened links
app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    const links = await loadLinks();

    const content = file.toString().replace(
      "{{shortned-urls}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.hostname}/${shortCode}</a> - ${url}</li>`
        )
        .join("")
    );

    return res.send(content);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
});

// Shorten URL (create)
app.post("/", async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();
    if (links[finalShortCode]) {
      return res.status(400).send("Short code already exists. Please choose another.");
    }

    links[finalShortCode] = url;
    await saveLinks(links);
    if(res.status(201)) res.redirect("/");

    // res.status(201).send(`Short URL created: /${finalShortCode}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});




app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();
    if (!links[shortCode]) return res.status(404).send("404 error");
    return res.redirect(links[shortCode]);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
