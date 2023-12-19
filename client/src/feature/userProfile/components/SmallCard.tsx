import { Card } from "@/components/ui/card";
import React from "react";

type SmallCardProps = {
    caption: string;
    number: number;
};
const SmallCard = ({ caption, number }: SmallCardProps) => {
    return (
        <section className="text-center rounded h-full w-28 m-0 p-3 hover:bg-card">
            <p className="text-lg font-bold">{number}</p>
            <p className="text-xs m-0">{caption}</p>
        </section>
    );
};

export default SmallCard;
