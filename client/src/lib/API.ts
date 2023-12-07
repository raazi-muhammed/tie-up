import server from "@/config/server";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = server;

export async function getAPI(url: string, params = {}) {
    return axios({
        url,
        method: "GET",
        params,
    })
        .then((res) => res.data)
        .catch((err) =>
            toast.error(err.response?.data?.message || "Invalid Details")
        );
}

export async function postAPI(url: string, data = {}) {
    return axios({
        url,
        method: "POST",
        data,
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            toast.error(err.response?.data?.message || "An Error occurred");
        });
}
