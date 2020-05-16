import { declare } from "@babel/helper-plugin-utils";
import * as fs from "fs";
import {parse as parseXml} from "fast-xml-parser";

import pluginTransformTypeScript from "@babel/plugin-transform-typescript";
import presetTypeScript from "@babel/preset-typescript";


export default declare(
  (api, options = {}) => {

    api.assertVersion(7);

    return {
      "presets": [
        [presetTypeScript, options]
      ],
      "overrides": [{
        "test": filePath => {
          if(/\.vue$/.test(filePath)) {

            const json = parseXml(fs.readFileSync(filePath, {encoding: "utf8"}), {
              ignoreAttributes: false
            });

            if(json.script && typeof json.script === "object" && typeof json.script["@_lang"] === "string" && json.script["@_lang"].toLowerCase() === "ts") {
              return true;
            }

          }

          return false;

        },
        "plugins": [
          [pluginTransformTypeScript, options]
        ]
      }]
    };
  }
);
