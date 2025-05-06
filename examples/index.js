/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

let KmoniClient = null;
let KmoniData = null;

try {
    ({ KmoniClient, KmoniData } = await import("../dist/index.js"));
} catch (error) {
    console.error("Error: Failed to load the Kmoni module.\nPlease ensure the project is built by running `npm run build`.");
    process.exit(1);
}

class Example {
    constructor() {
        this.#kmoniClient = new KmoniClient();

        this.#kmoniClient.startPolling({
            intervalMs: 1000,
            loop: this.handleData.bind(this),
            onError: this.handleError.bind(this),
        });
    }

    /**
     * @param {KmoniData} data
     */
    handleData(data) {
        if (!(data instanceof KmoniData)) {
            console.error("Invalid data type received:", data);
            return;
        }

        console.log(JSON.stringify(data, null, 2));
    }

    /**
     * @param {Error} error
     */
    handleError(error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Polling error:", message);
    }

    /**
     * @type {KmoniClient}
     */
    #kmoniClient;
}

new Example();
