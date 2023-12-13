import { getAPI } from "@/lib/API";
import React from "react";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: { username: string } }) => {
    const username = params.username;
    const response = await getAPI(`/user/get-user/${username}`);

    if (!response) {
        return notFound();
    }

    return (
        <main>
            <section>
                <p>{response.userData.username}</p>
                <p>{response.userData.email}</p>
            </section>
            {JSON.stringify(response.userData)}
        </main>
    );
};

export default UserPage;
