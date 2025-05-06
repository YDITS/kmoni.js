/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

export class KmoniDateGenerator {
    constructor() {
        if (typeof parseInt !== "function") {
            throw new TypeError("`parseInt` function is not defined.");
        }
    }

    static generateDateString({ date, delayOffset }: { date: Date, delayOffset?: number }): string {
        const _date = new Date(date);
        _date.setHours(_date.getUTCHours() + 9);

        if (delayOffset) {
            _date.setSeconds(_date.getSeconds() - 2);
        }

        return `${_date.getFullYear()}${String(_date.getMonth() + 1).padStart(2, '0')}${String(_date.getDate()).padStart(2, '0')}${String(_date.getHours()).padStart(2, '0')}${String(_date.getMinutes()).padStart(2, '0')}${String(_date.getSeconds()).padStart(2, '0')}`;
    }

    static generateDate({ date }: { date: string }) {
        const year = parseInt(date.slice(0, 4), 10);
        const month = parseInt(date.slice(4, 6), 10) - 1;
        const day = parseInt(date.slice(6, 8), 10);
        const hour = parseInt(date.slice(8, 10), 10);
        const minute = parseInt(date.slice(10, 12), 10);
        const second = parseInt(date.slice(12, 14), 10);
        return new Date(year, month, day, hour, minute, second);
    }
}