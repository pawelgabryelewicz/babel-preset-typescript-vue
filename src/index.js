import { declare } from "@babel/helper-plugin-utils";
import * as fs from "fs";
import {parse as parseXml} from "fast-xml-parser";

import pluginTransformTypeScript from "@babel/plugin-transform-typescript";
import presetTypeScript from "@babel/preset-typescript";


export default declare(
  (api, { jsxPragma, allExtensions = false, isTSX = false }) => {

    api.assertVersion(7);

    return {
      "presets": [
        [presetTypeScript, { jsxPragma, allExtensions, isTSX }]
      ],
      "overrides": [{
        "test": filePath => {
          if(/\.vue$/.test(filePath)) {

            const json = parseXml(fs.readFileSync(filePath, {encoding: "utf8"}), {
              ignoreAttributes: false
            });

            if(typeof json.script !== "undefined" && typeof json.script["@_lang"] && json.script["@_lang"].toLowerCase() === "ts") {
              return true;
            }

          }

          return false;

        },
        "plugins": [
          [pluginTransformTypeScript, {
            jsxPragma,
            allExtensions,
            isTSX
          }]
        ]
      }]
    };
  }
);
