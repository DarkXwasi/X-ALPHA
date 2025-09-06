const axios = require("axios");
const fs = require("fs");
const path = require("path");
const ytSearch = require("yt-search");

module.exports = {
  config: {
    name: "music",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "𝐖𝐀𝐒𝐈𝐌 𝐀𝐁𝐁𝐀𝐒𝐒𝐈",
    description: "Download YouTube song from keyword search and link",
    commandCategory: "Media",
    usages: "[songName] [audio/video]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

  run: async function ({ api, event, args }) {
    let songName, type;

    // Determine type (audio/video)
    if (
      args.length > 1 &&
      (args[args.length - 1].toLowerCase() === "audio" ||
        args[args.length - 1].toLowerCase() === "video")
    ) {
      type = args.pop().toLowerCase();
      songName = args.join(" ");
    } else {
      songName = args.join(" ");
      type = "audio";
    }

    const processingMessage = await api.sendMessage(
      "✅ Processing your request. Please wait...",
      event.threadID,
      null,
      event.messageID
    );

    try {
      // Search YouTube
      const searchResults = await ytSearch(songName);
      if (!searchResults || !searchResults.videos.length) {
        throw new Error("No results found for your search query.");
      }

      const topResult = searchResults.videos[0];
      const videoId = topResult.videoId;

      const apiKey = "your-api-key"; // Replace with your API key if needed
      const apiUrl = `https://priyanshuapi.xyz/youtube?id=${videoId}&type=${type}&apikey=${apiKey}`;

      api.setMessageReaction("⌛", event.messageID, () => {}, true);

      // Download file
      const downloadResponse = await axios.get(apiUrl);
      const downloadUrl = downloadResponse.data.downloadUrl;

      const safeTitle = topResult.title.replace(/[^a-zA-Z0-9 \-_]/g, "");
      const filename = `${safeTitle}.${type === "audio" ? "mp3" : "mp4"}`;
      const downloadPath = path.join(__dirname, "cache", filename);

      if (!fs.existsSync(path.dirname(downloadPath))) {
        fs.mkdirSync(path.dirname(downloadPath), { recursive: true });
      }

      const response = await axios({
        url: downloadUrl,
        method: "GET",
        responseType: "stream",
      });

      const fileStream = fs.createWriteStream(downloadPath);
      response.data.pipe(fileStream);

      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });

      api.setMessageReaction("✅", event.messageID, () => {}, true);

      await api.sendMessage(
        {
          attachment: fs.createReadStream(downloadPath),
          body: `🖤 Title: ${topResult.title}\n\n Here is your ${
            type === "audio" ? "audio" : "video"
          } 🎧:`,
        },
        event.threadID,
        () => {
          fs.unlinkSync(downloadPath);
          api.unsendMessage(processingMessage.messageID);
        },
        event.messageID
      );
    } catch (error) {
      console.error(`Failed to download and send song: ${error.message}`);
      api.sendMessage(
        `❌ Failed to download song: ${error.message}`,
        event.threadID,
        event.messageID
      );
    }
  },
};