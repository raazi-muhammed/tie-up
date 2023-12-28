import server from "@/config/server";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = server;
type Options = {
    showAlerts?: boolean;
};

export async function getAPI(url: string, params = {}, options: Options = {}) {
    return axios({
        url,
        method: "GET",
        withCredentials: true,
        params,
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            if (options.showAlerts) {
                toast.error(err.response?.data?.message || "Invalid Details");
            }
        });
}

export async function postAPI(url: string, data = {}, options: Options = {}) {
    return axios({
        url,
        method: "POST",
        withCredentials: true,
        data,
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            if (options.showAlerts) {
                toast.error(err.response?.data?.message || "Invalid Details");
            }
            return err.response.data;
        });
}
