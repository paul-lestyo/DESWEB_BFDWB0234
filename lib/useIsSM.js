import { useEffect, useState } from "react";

export default function useIsSM() {
    const [isSM, setIsSM] = useState();
    useEffect(() => {
        function handleResize() {
            setIsSM(window.matchMedia('(max-width: 640px)').matches)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isSM;
}