import { create as createQRCode } from "qrcode/mod.ts";

export async function generateQRCodeUrl(data: string): Promise<string> {
  // returns a PNG data URI for front end print/scan
  return await createQRCode(data, { type: "data-url" });
}