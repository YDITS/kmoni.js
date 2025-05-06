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
    static generateDateString({ date, delayOffset }: { date: Date, delayOffset?: number }): string {
        const jstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // JST (UTC+9)

        if (delayOffset) {
            jstDate.setSeconds(jstDate.getSeconds() - 2);
        }

        const pad = (n: number) => String(n).padStart(2, "0");

        return [
            jstDate.getFullYear(),
            pad(jstDate.getMonth() + 1),
            pad(jstDate.getDate()),
            pad(jstDate.getHours()),
            pad(jstDate.getMinutes()),
            pad(jstDate.getSeconds()),
        ].join("");
    }

    static generateDate({ date }: { date: string }) {
        if (!/^\d{14}$/.test(date)) {
            throw new Error("Invalid date format. Expected YYYYMMDDHHmmss.");
        }

        const year = Number(date.slice(0, 4));
        const month = Number(date.slice(4, 6)) - 1;
        const day = Number(date.slice(6, 8));
        const hour = Number(date.slice(8, 10));
        const minute = Number(date.slice(10, 12));
        const second = Number(date.slice(12, 14));

        return new Date(year, month, day, hour, minute, second);
    }
}