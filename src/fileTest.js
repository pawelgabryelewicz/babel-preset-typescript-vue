import { parse } from "@vue/compiler-sfc";
import fs from "fs";

export default (filePath) => {
  if (/\.vue$/.test(filePath)) {
    const { script } = parse(
      fs.readFileSync(filePath, { encoding: "utf8" })
    ).descriptor;
    return !!script.lang && script.lang.toLowerCase() === "ts";
  }

  return false;
};
