const prettierConfig = require("./package.json").prettier;

module.exports = {
    ignorePatterns: ["**/*.d.ts", "**/*.js"],
    root: true,
    env: {
        node: true,
        browser: false,
        es2020: true,
    },
    parserOptions: {
        parser: require.resolve("@typescript-eslint/parser"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
        // ecmaFeatures: {
        //   jsx: false,
        // },
    },
    plugins: ["@typescript-eslint", "prettier", "import", "promise", "unicorn", "header"],
    extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    settings: {
        "import/resolver": {
            [require.resolve("eslint-import-resolver-typescript")]: {},
            [require.resolve("eslint-import-resolver-node")]: {},
            // [require.resolve("eslint-import-resolver-webpack")]: {
            //     config: path.resolve(__dirname, "./build/webpack.config.js"),
            // },
        },
    },
    overrides: [],
    // reduce?
    // "import/no-require": "off",
    // while true ???
    // no-await-in-loop // warrning
    // unicorn/explicit-length-check // disable
    // Promise resolve reject // disable
    // eror name disable // disable
    // disable eslint for every file
    // unicorn/better-regex // ?? warrning
    // return arrow function types networkInspectorServer
    // @typescript-eslint/require-await // warrning
    // unicorn/no-null       // warrning
    // unicorn/import-style // disable
    // @typescript-eslint/ numbers something concatination.
    // unicorn/no-object-as-default-parameter // disable
    // prefer-object-spread // disable
    // prefer-object-spread // disable
    // no esle something // fix
    // src/common/customRequire // disable eslint rule for eval
    // src/common/entryPointHandler // disable eslint rule for process.exit
    // no-promise-in-callback // disable
    // unicorn/no-for-loop // warrning
    // consistent return // disable
    // unicorn/prefer-spread // disable
    // @typescript-eslint/no-namespace // disable
    // @typescript-eslint/no-misused-promises // disable
    // @typescript-eslint/no-misused-promises // warrning
    // @typescript-eslint/no-misused-promises // warrning
    // prefer-arrow-function // ?warrning
    // func-names // ?disable
    // no-return-assignment // warrning
    // @typescript-eslint/prefer-regexp-exec // disable
    // @typescript-eslint/prefer-regexp-exec // disable
    //
    //the code is borrowed from // disable eslint
    //
    // promise always resolve // ?
    // global-require // ?disable
    // should be listed in devdeps disable // !!
    // no-template-curly-in-string // disable
    // @typescript-eslint/dot-notation
    // no-array-push // disable ?
    // unicorn/explicit-length-check // disable
    //
    // import/no-extraneous-dependences // disable
    rules: {
        "import/no-mutable-exports": "off", // please fix this
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "import/no-extraneous-dependencies": "off",
        "no-await-in-loop": "warn",
        "@typescript-eslint/require-await": "warn",
        "unicorn/no-null": "off",
        "unicorn/import-style": "off",
        "consistent-return": "off",
        "unicorn/error-message": "off",
        "unicorn/explicit-length-check": "off",
        "unicorn/no-array-reduce": "warn",
        "promise/catch-or-return": "off",
        // too much hassle, too little value
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "unicorn/catch-error-name": "off",
        "import/no-require": "off",
        "unicorn/no-array-for-each": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        // '@typescript-eslint/member-ordering': [
        //   'warn',
        //   {
        //     classes: {
        //       memberTypes: [
        //         'static-field',
        //         'static-method',
        //         'instance-field',
        //         'constructor',
        //         'public-instance-method',
        //         'protected-instance-method',
        //         'private-instance-method',
        //       ],
        //     },
        //   },
        // ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "warn",
            {
                allowArgumentsExplicitlyTypedAsAny: true,
            },
        ],
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-inferrable-types": [
            "warn",
            {
                ignoreParameters: true,
                ignoreProperties: false,
            },
        ],
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-use-before-define": [
            // function hoisting is a common, accepted pattern
            "error",
            {
                classes: true,
                functions: false,
                typedefs: true,
                variables: true,
            },
        ],
        // disallow function implicitly returning any
        "class-methods-use-this": "off",
        "unicorn/no-abusive-eslint-disable": "off",
        "header/header": [
            "error",
            "line",
            [
                " Copyright (c) Microsoft Corporation. All rights reserved.",
                " Licensed under the MIT license. See LICENSE file in the project root for details.",
            ],
        ],
        "import/extensions": [
            "error",
            "always",
            {
                js: "never",
                jsx: "never",
                mjs: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "import/no-cycle": "off",
        "import/no-unresolved": "off",
        "import/order": "warn",
        // default exports are bad
        "import/prefer-default-export": "off",
        // git auto-fixes this
        "linebreak-style": "off",
        "lines-between-class-members": "off",
        // eslint considers too many things to be a class
        "max-classes-per-file": "off",
        // superseeded by unicorn/no-nested-ternary
        "no-nested-ternary": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": [
            "error",
            {
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
                selector: "ForInStatement",
            },
            {
                message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
                selector: "LabeledStatement",
            },
            {
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
                selector: "WithStatement",
            },
        ],
        "no-underscore-dangle": "off",
        // interferes with @typescript-eslint/no-floating-promises
        "no-void": [
            "error",
            {
                allowAsStatement: true,
            },
        ],
        "prefer-destructuring": "off",
        "prettier/prettier": ["error", prettierConfig],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "off",
        quotes: "off",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "spaced-comment": "warn",
        "no-param-reassign": "warn",
        "@typescript-eslint/no-unsafe-call": "off", // !
        semi: ["error", "always"],
        "promise/param-names": "off",
        "unicorn/no-array-push-push": "warn",
        "unicorn/filename-case": [
            "warn",
            {
                cases: {
                    camelCase: true, // pascalCase: true,
                },
                ignore: [/rn-extension\.ts/],
            },
        ],
        "unicorn/no-useless-undefined": "off",
        "unicorn/prefer-ternary": "warn",
        "unicorn/no-null": "warn",
        // interferes with typescript best practices
        "unicorn/prevent-abbreviations": "off", // most abbreviations are well-known
    },

    globals: {
        process: "readonly",
    },
};
