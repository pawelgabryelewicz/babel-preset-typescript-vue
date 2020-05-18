import * as path from "path";
import fileTest from "../src/fileTest";

describe("Plugin", () => {

  describe("File test", () => {

    test("parses valid XML template with JavaScript and returns false", () => {
      const filename = path.join(__dirname, './xml-valid-js/input.vue');
      expect(fileTest(filename)).toBe(false);
    });

    test("parses valid XML template with TypeScript and returns true", () => {
      const filename = path.join(__dirname, './xml-valid-ts/input.vue');
      expect(fileTest(filename)).toBe(true);
    });

    test("parses valid SGML (non-XML) template with JavaScript and returns false", () => {
      const filename = path.join(__dirname, './sgml-valid-js/input.vue');
      expect(fileTest(filename)).toBe(false);
    });

    test("parses valid SGML (non-XML) template with TypeScript and returns true", () => {
      const filename = path.join(__dirname, './sgml-valid-ts/input.vue');
      expect(fileTest(filename)).toBe(true);
    });

  });

});
