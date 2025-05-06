/**!
 * 
 * Kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 */

import { KmoniDataType } from "./kmoni-data-type.js";
import { KmoniDateGenerator } from "./kmoni-date-generator.js";

export class KmoniData {
    constructor(data: any) {
        this.data = data;
    }

    data: KmoniDataType;

    get isSuccess(): boolean {
        return this.data.result.status === "success";
    }

    get reportTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this.data.report_time });
    }

    get requestTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this.data.request_time });
    }

    get originTime(): Date {
        return KmoniDateGenerator.generateDate({ date: this.data.origin_time });
    }
}
