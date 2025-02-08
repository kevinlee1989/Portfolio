"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const StartButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/home");
    }

    return(
        <Button
        onClick = {handleClick}
        className = "uppercase flex items-center gap-2"
        >
            Start
        </Button>
    );
};

export default StartButton;