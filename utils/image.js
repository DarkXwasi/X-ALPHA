// utils/image.js
const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
    download: async function(url, filename) {
        const imgPath = path.join(__dirname, "..", "cache", filename);
        const res = await axios.get(url, { responseType: "arraybuffer" });
        fs.writeFileSync(imgPath, Buffer.from(res.data, "binary"));
        return imgPath;
    }
};