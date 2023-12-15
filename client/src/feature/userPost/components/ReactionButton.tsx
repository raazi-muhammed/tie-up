import React from "react";
import { Button } from "@/components/ui/button";

const ReactionButton = ({ children }: any) => {
    return (
        <Button className="flex-1 gap-2 text-lg" variant="ghost">
            {children}
        </Button>
    );
};

export default ReactionButton;
