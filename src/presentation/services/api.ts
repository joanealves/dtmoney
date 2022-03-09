import axios from "axios";

export const api = axios.create({
    baseURL: 'https://joanealves.github.io/dtmoney/api',
})