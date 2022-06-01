import axios from "axios";

export const api = axios.create({
    baseURL: "http://motion-school-two.herokuapp.com/"
})