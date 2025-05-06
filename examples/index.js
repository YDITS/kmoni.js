/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 */

let KmoniClient = null;
let KmoniData = null;

try {
    ({ KmoniClient, KmoniData } = await import("../dist/index.js"));
} catch (error) {
    console.error("Error: Could not found the KmoniClient module.\nPlease build the project with `npm run build`.");
    process.exit(1);
}

class Example {
    constructor() {
        this.#kmoniClient = new KmoniClient();

        this.#kmoniClient.startPolling({
            intervalMs: 1000,
            loop: (data) => this.mainloop(data),
            onError: (error) => this.onError(error),
        });
    }

    /**
     * @param {KmoniData} data 
     * @returns {void}
     */
    mainloop(data) {
        if (!(data instanceof KmoniData)) {
            console.error("Invalid data type:", data);
            return;
        }

        console.log(JSON.stringify(data));
    }

    /**
     * @param {Error} error 
     * @returns {void}
     */
    onError(error) {
        if (error instanceof Error) {
            console.error("Polling error:", error.message);
        } else {
            console.error("Polling error:", error);
        }
    }

    /**
     * @type {KmoniClient | null}
     */
    #kmoniClient = null;
}

new Example();
