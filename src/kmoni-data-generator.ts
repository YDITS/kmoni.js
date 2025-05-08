/**!
 * 
 * Kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

import { KmoniDataType } from "./kmoni-data-type.js";
import { KmoniDateGenerator } from "./kmoni-date-generator.js";

export class KmoniData {
    constructor(data: KmoniDataType) {
        this._data = data;
    }

    private _data: KmoniDataType;

    get isSuccess(): boolean {
        return this._data.result?.status === "success";
    }

    get reportTime(): Date {
        function generateDate(date: string): Date {
            // "YYYY/MM/DD HH:mm:ss"
            const year = Number(date.slice(0, 4));
            const month = Number(date.slice(5, 7)) - 1;
            const day = Number(date.slice(8, 10));
            const hour = Number(date.slice(11, 13));
            const minute = Number(date.slice(14, 16));
            const second = Number(date.slice(17, 19));

            return new Date(year, month, day, hour, minute, second);
        }
        return generateDate(this._data.report_time);
    }

    get requestTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this._data.request_time });
    }

    get originTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this._data.origin_time });
    }

    get isWarning(): boolean {
        return this._data.alertflg === "警報";
    }

    get data(): KmoniDataType {
        return this._data;
    }
}
