import axios from "axios";

function AuthUser() {
    const http = axios.create ({ // axios is used to make http requests
        baseURL: "http://localhost:8000/api", // baseURL is the base url of the api
        headers: { // headers are used to send the data in JSON format
            "Content-Type": "application/json",
            Accept: "application/json", // accept the data in JSON format
        },
    });
    return http;
}

export default AuthUser;