const JSZip = require("jszip");
const fs = require("fs");
const path = require("path");
const zip = new JSZip();
const distDir = path.resolve(__dirname, "../dist");

function pushZip(folder, pPath) {
  const files = fs.readdirSync(pPath, { withFileTypes: true });
  for (const directory of files) {
    if (directory.name.includes(".map") || directory.name.includes(".jpg")) {
      continue;
    }
    let filePath = `${pPath}/${directory.name}`;
    if (directory.isDirectory()) {
      let zipFolder = zip.folder(filePath.replace(distDir, ""));
      pushZip(zipFolder, filePath);
    } else {
      folder.file(directory.name, fs.readFileSync(filePath));
    }
  }
}

pushZip(zip, distDir);
zip
  .generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9,
    },
  })
  .then(function (content) {
    fs.writeFile(
      path.resolve(__dirname, "../chrome-calendar.zip"),
      content,
      (err) => {
        if (err) throw err;
        console.log("文件已被保存");
      }
    );
  });
