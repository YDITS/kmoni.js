/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

import { KmoniDateGenerator } from "./kmoni-date-generator.js";

export class KmoniUrlGenerator {
    static readonly BASE_URL = "https://www.lmoni.bosai.go.jp/monitor/webservice/hypo/eew/";

    static generateUrl({ date, delayOffset }: { date: Date, delayOffset?: number }): URL {
        const formattedDate = KmoniDateGenerator.generateDateString({ date, delayOffset });
        return new URL(`${KmoniUrlGenerator.BASE_URL}${formattedDate}.json`);
    }
}
