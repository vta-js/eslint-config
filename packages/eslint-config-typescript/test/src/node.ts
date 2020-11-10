import path from "path";
import fs from "fs";

export function testExists(file: string): boolean {
  return fs.existsSync(path.resolve(__dirname, file));
}
