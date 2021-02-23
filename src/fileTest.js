import { parse } from "@vue/compiler-sfc";
import fs from "fs";

export default (filePath) => {
  if (/\.vue$/.test(filePath)) {
    const { script, scriptSetup } = parse(
      fs.readFileSync(filePath, { encoding: "utf8" })
    ).descriptor;

    return !!script && !!script.lang
      ? script.lang.toLowerCase() === "ts"
      : !!scriptSetup &&
          !!scriptSetup.lang &&
          scriptSetup.lang.toLowerCase() === "ts";
  }
  return false;
};
