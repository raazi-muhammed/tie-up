import { getAPI } from "@/lib/API";
import React from "react";

const UserPage = async () => {
    const response = await getAPI("/user/profile");
    return (
        <div>
            <p>UserPage</p>
            <p>{JSON.stringify(response)}</p>
        </div>
    );
};

export default UserPage;
