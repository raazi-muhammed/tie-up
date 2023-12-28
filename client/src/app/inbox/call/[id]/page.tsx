"use client";

import React from "react";

type Props = { params: { id: string } };

const CallPage = ({ params }: Props) => {
    const callId = params.id;
    return (
        <section>
            <p>{callId}</p>
            <p>Hooi</p>
        </section>
    );
};

export default CallPage;
