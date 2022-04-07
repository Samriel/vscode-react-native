// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import * as nls from "vscode-nls";
import { basicCheck } from "../util";
import { IValidation, ValidationCategoryE, ValidationResultT } from "./types";

nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})();
const toLocale = nls.loadMessageBundle();

const label = "xcodeCLI";

async function test(): Promise<ValidationResultT> {
    const result = await basicCheck({
        command: "xcode-select",
    });
    if (result.exists) {
        return {
            status: "success",
        };
    }
    return {
        status: "failure",
        comment: "Xcode cli is not installed",
    };
}

const main: IValidation = {
    label,
    platform: ["darwin"],
    description: toLocale("xcodeCLICheckDescription", "Required for building RN apps"),
    category: ValidationCategoryE.macOS,
    exec: test,
};

export default main;
