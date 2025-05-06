/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

import { KmoniData } from "./kmoni-data-generator.js";
import { KmoniUrlGenerator } from "./kmoni-url-generator.js";

export class KmoniClient {
    constructor() {
        if (typeof fetch !== "function") {
            throw new TypeError("fetch function is not defined.");
        }
    }

    static DEFAULT_POLLING_INTERVAL_MS = 2000;
    static POLLING_LIMIT_MS = 900;

    lastFetchDate: Date = new Date(0);

    async fetch({
        targetDate
    }: { targetDate?: Date }): Promise<KmoniData> {
        const nowDate = new Date();
        if (nowDate.getTime() - this.lastFetchDate.getTime() < KmoniClient.POLLING_LIMIT_MS) {
            throw new Error("Polling interval is too short. Please wait a moment.");
        }

        targetDate = targetDate || nowDate;
        const targetUrl = KmoniUrlGenerator.generateUrl({ date: targetDate });

        const response = await fetch(targetUrl);
        this.lastFetchDate = new Date();

        const data = await response.json();
        const kmoniData = new KmoniData({ data });

        return kmoniData;
    }

    startPolling({
        intervalMs = KmoniClient.DEFAULT_POLLING_INTERVAL_MS,
        loop,
        onError,
    }: {
        intervalMs?: number,
        loop: (data: KmoniData) => void,
        onError?: (error: Error) => void
    }): void {
        if (intervalMs < 1000) {
            throw new Error("`intervalMs` must be greater than 1000ms.");
        }

        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
        }

        this.pollingInterval = setInterval(async () => {
            try {
                const data = await this.fetch({});
                loop(data);
            } catch (error) {
                if (onError && error instanceof Error) {
                    onError(error);
                } else {
                    console.error("Polling error:", error);
                }
            }
        }, intervalMs);

        return;
    }

    private pollingInterval: number | null = null;
}