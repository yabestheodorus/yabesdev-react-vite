// generate-pdf.mjs
import puppeteer from "puppeteer";
import { resolve } from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log("🖨️ Generating resume.pdf from public/resume.html...");

  // Resolve path to public/resume.html
  const htmlPath = resolve(__dirname, "public", "resume.html");
  const pdfPath = resolve(__dirname, "public", "resume.pdf");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Load local HTML file
  await page.goto(`file://${htmlPath}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  // Generate PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true, // or true if you want light backgrounds
    // margin: {
    //   top: "10mm",
    //   bottom: "10mm",
    //   left: "10mm",
    //   right: "10mm",
    // },
  });

  await writeFile(pdfPath, pdfBuffer);
  await browser.close();

  console.log("✅ Saved:", pdfPath);
}

generatePDF().catch((err) => {
  console.error("❌ PDF generation failed:", err);
  process.exit(1);
});
