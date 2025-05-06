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

interface FetchOptions {
    targetDate?: Date;
}

interface PollingOptions {
    intervalMs?: number;
    loop: (data: KmoniData) => void;
    onError?: (error: Error) => void;
}

export class KmoniClient {
    constructor() {
        if (typeof fetch !== "function") {
            throw new TypeError("Global `fetch` function is not available.");
        }
    }

    static readonly DEFAULT_POLLING_INTERVAL_MS = 2000;
    static readonly POLLING_LIMIT_MS = 900;

    private lastFetchDate: Date = new Date(0);
    private pollingInterval: ReturnType<typeof setInterval> | null = null;

    async fetch({ targetDate }: FetchOptions = {}): Promise<KmoniData> {
        const nowDate = new Date();
        const elapsed = nowDate.getTime() - this.lastFetchDate.getTime();

        if (elapsed < KmoniClient.POLLING_LIMIT_MS) {
            throw new Error("Polling interval is too short.");
        }

        const date = targetDate ?? nowDate;
        const targetUrl = KmoniUrlGenerator.generateUrl({ date });

        const response = await fetch(targetUrl);
        this.lastFetchDate = new Date();

        const jsonData = await response.json();
        return new KmoniData({ data: jsonData });
    }

    startPolling({
        intervalMs = KmoniClient.DEFAULT_POLLING_INTERVAL_MS,
        loop,
        onError,
    }: PollingOptions): void {
        if (intervalMs < 1000) {
            throw new Error("`intervalMs` must be at least 1000ms.");
        }

        this.stopPolling();

        this.pollingInterval = setInterval(async () => {
            try {
                const data = await this.fetch();
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


    stopPolling(): void {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
            this.pollingInterval = null;
        }
    }
}