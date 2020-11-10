import path from "path";
import fs from "fs";
import dataJson from "./data.json";
import dataTxt from "./data.txt";

console.log({ dataJson, dataTxt });

export function testExists(file) {
  return fs.existsSync(path.resolve(__dirname, file));
}
