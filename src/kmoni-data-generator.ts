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
        return KmoniDateGenerator.generateDate({ date: this._data.report_time });
    }

    get requestTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this._data.request_time });
    }

    get originTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this._data.origin_time });
    }

    get data(): KmoniDataType {
        return this._data;
    }
}
