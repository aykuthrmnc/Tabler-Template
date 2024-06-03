var fs = require("fs");
var chalk = require("chalk");

const defaultLng = "en";

module.exports = {
  input: [
    "src/**/*.{ts,tsx}",
    // Use ! to filter out files or directories
    "!src/**/*.spec.{ts,tsx}",
    "!src/i18n/**",
    "!**/node_modules/**",
  ],
  output: "./",
  options: {
    compatibilityJSON: "v3",
    debug: true,
    removeUnusedKeys: false,
    sort: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".ts", ".tsx"],
    },
    fallbackKey: (ns, value) => {
      return value;
    },
    // trans: {
    //   component: "Trans",
    //   i18nKey: "i18nKey",
    //   defaultsKey: "defaults",
    //   extensions: [".ts", ".tsx"],
    //   fallbackKey: function (ns, value) {
    //     return value;
    //   },
    //   acorn: {
    //     ecmaVersion: 2020,
    //     sourceType: "module", // defaults to 'module'
    //     // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
    //   },
    // },
    lngs: ["tr", "en"],
    ns: ["translation"],
    defaultLng: defaultLng,
    defaultNs: "translation",
    defaultValue: (lng, ns, key) => {
      if (lng === defaultLng) {
        return key;
      }
      return "__NOT_TRANSLATED__";
    },
    resource: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
      savePath: "locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    allowDynamicKeys: true,
  },
  transform: function customTransform(file, enc, done) {
    "use strict";
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ["i18next.t", "i18n.t", "t"] }, (key, options) => {
      parser.set(
        key,
        Object.assign({}, options, {
          nsSeparator: false,
          keySeparator: false,
        }),
      );
      ++count;
    });

    if (count > 0) {
      console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
    }

    done();
  },
};
