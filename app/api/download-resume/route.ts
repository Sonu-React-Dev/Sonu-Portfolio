import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const layout = searchParams.get("layout") === "detailed" ? "detailed" : "single";
    const mode = searchParams.get("mode") === "modern" ? "modern" : "ats";

    const isDark = mode === "modern";
    const filename = layout === "single"
      ? (isDark ? "Sonu_Kumar_Resume_1Page_Dark.pdf" : "Sonu_Kumar_Resume_1Page.pdf")
      : (isDark ? "Sonu_Kumar_Resume_Dark.pdf" : "Sonu_Kumar_Resume.pdf");

    const filePath = path.join(process.cwd(), "public", filename);

    if (!fs.existsSync(filePath)) {
      return new NextResponse(`File not found: ${filename}`, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Download route error:", message);
    return new NextResponse(`Error: ${message}`, { status: 500 });
  }
}
