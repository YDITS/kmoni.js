/**!
 * 
 * kmoni.js
 * 
 * Copyright (C) よね/Yone
 * 
 * Licensed under the MIT License.
 * 
 */

export type KmoniDataType = {
    "result": {
        "status": string,
        "message": string,
        "is_auth": boolean,
    },
    "report_time": string,
    "region_code": string,
    "request_time": string,
    "region_name": string,
    "longitude": string,
    "is_cancel": boolean,
    "depth": string,
    "calcintensity": string,
    "is_final": boolean,
    "is_training": boolean,
    "latitude": string,
    "origin_time": string,
    "security": {
        "realm": string,
        "hash": string,
    },
    "magunitude": string,
    "report_num": string,
    "request_hypo_type": string,
    "report_id": string,
    "alertflg": string,
    "avrarea": string,
    "avrval": string,
    "avrrank": string,
    "avrarea_list": string[],
}