import { NextResponse } from "next/server";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import multer from "multer";

const storage = new ThirdwebStorage({
  secretKey: process.env.SECRET_KEY,
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
    console.log("1");
    if (err) {
      console.log("2");
      console.error("Error uploading file:", err);
      return new NextResponse({ error: "Error uploading file" });
    }
    const data = await req.formData();

    // Now req.file should be populated with information about the uploaded file
    console.log(data);
    // const imagePath = req.file.path;

    try {
      // const uploadResult = await storage.upload(fs.readFileSync(imagePath));
      // console.log(`Gateway URL - ${storage.resolveScheme(uploadResult)}`);
      console.log("3");
      return new NextResponse({ message: "Image uploaded successfully" });
    } catch (error) {
      console.log("4");
      console.error("Error uploading image:", error);
      return new NextResponse({ error: "Error uploading image" });
    }
  });
}
export { handler as POST };
