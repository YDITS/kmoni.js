/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 */

import { KmoniDateGenerator } from "./kmoni-date-generator.js";

export class KmoniUrlGenerator {
    constructor() { }

    static generateUrl({ date, delayOffset }: { date: Date, delayOffset?: number }): URL {
        const targetDate: Date = new Date(date);
        const formatedTargetDate: string = KmoniDateGenerator.generateDateString({ date: targetDate, delayOffset: delayOffset });
        return new URL(`https://www.lmoni.bosai.go.jp/monitor/webservice/hypo/eew/${formatedTargetDate}.json`);
    }
}
