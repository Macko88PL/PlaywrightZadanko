export interface Config {
    password: string;
    day: string;
    months: string;
    year: string;
    address: string;
    city: string;
    postalCode: string;
    mobilePhone: string
    state: string;
}

export const config = require('./data.json') as Config;