import fs from "fs";
import path from "path";
import SiteShell from "@/components/SiteShell";

// This stays a Server Component so `fs`/`path` work — all the interactive
// stuff (header, tour, guide modal, markdown rendering) lives in SiteShell.
export default function Home() {
  const readmePath = path.join(process.cwd(), "README.md");
  const markdown = fs.readFileSync(readmePath, "utf8");

  return <SiteShell markdown={markdown} />;
}