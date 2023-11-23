import { NextResponse } from "next/server";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import multer from "multer";

const storage = new ThirdwebStorage({
  secretKey: process.env.THIRD_WEB_SECRET_KEY,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: "uploads/" });
const uploadMiddleware = upload.single("file");

async function handler(req, res) {
  return uploadMiddleware(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return new NextResponse({ error: "Error uploading file" });
    }
    const data = await req.formData();
    const file = data.get("file");

    // Read the file data
    const fileData = await file.arrayBuffer();
    const buffer = Buffer.from(fileData);
    console.log(buffer);
    // Here we get the IPFS URI of where our metadata has been uploaded
    const uri = await storage.upload(buffer);
    // This will log a URL like ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
    console.info("uri for data is", uri);
    const url = storage.resolveScheme(uri);

    console.log("url for data is", url);

    try {
      // const uploadResult = await storage.upload(fs.readFileSync(imagePath));
      // console.log(`Gateway URL - ${storage.resolveScheme(uploadResult)}`);
      return new NextResponse({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading image:", error);
      return new NextResponse({ error: "Error uploading image" });
    }
  });
}
export { handler as POST };
