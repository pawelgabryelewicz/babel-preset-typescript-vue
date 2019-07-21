import { declare } from "@babel/helper-plugin-utils";
import * as fs from "fs";

import pluginTransformTypeScript from "@babel/plugin-transform-typescript";

export default declare(
  (api, { jsxPragma, allExtensions = false, isTSX = false }) => {

    api.assertVersion(7);

    return {
      "overrides": [{
        "test": filePath => /\.vue$/.test(filePath) && /lang="?ts"?/.test(fs.readFileSync(filePath, {encoding: "utf8"})),
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
