import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
interface ReactionButtonProps {
    children: React.ReactNode;
}

const ReactionButton: React.FC<ReactionButtonProps & ButtonProps> = ({
    children,
    ...buttonProps
}) => {
    return (
        <Button
            className="flex-1 gap-2 text-lg font-light"
            variant="ghost"
            {...buttonProps}
        >
            {children}
        </Button>
    );
};

export default ReactionButton;
