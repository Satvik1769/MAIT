const fs = require("fs");
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const multer = require("multer");
const storage = new ThirdwebStorage({
  secretKey: process.env.SECRET_KEY,
});

// (async () => {
//   const upload = await storage.upload(fs.readFileSync("test.jpg"));
//   console.log(`Gateway URL - ${storage.resolveScheme(upload)}`);
// })();

export const config = {
  api: {
    bodyParser: false,
  },
};
const upload = multer({ dest: "uploads/" });
const uploadMiddleware = upload.single("file");

// async function handler(req, res) {
//   uploadMiddleware
//     (req,res,async function(err)){
//       if(err){
//         console.error("Error uploading file:", err);
//       return res.status(500).json({ error: "Error uploading file" });
//       }
//   }
//   console.log(req.file);
//   const imagePath = req.file.path;
//   console.log(imagePath);
//   const upload = await storage.upload(fs.readFileSync(imagePath));
//   console.log(`Gateway URL - ${storage.resolveScheme(upload)}`);
// }

async function handler(req, res) {
  // Use the multer middleware
  uploadMiddleware(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return new Response({ error: "Error" });
    }

    // Now req.file should be populated with information about the uploaded file
    console.log(req.file);
    const imagePath = req.file;

    try {
      // const uploadResult = await storage.upload(fs.readFileSync(imagePath));
      // console.log(`Gateway URL - ${storage.resolveScheme(uploadResult)}`);
      return new Response({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading image:", error);
      return new Response({ error: "Error uploading image" });
    }
  });
}

export { handler as POST };
