"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MotionLayout() {

    const [ isToggle, setIsToggle ] = useState(false);

    const handleToggle = () => {
        setIsToggle(prev => !prev);
    }

    return (
        <>
            <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-teal-500 grid place-content-center">
                <motion.div className="w-[250px] h-[150px] bg-white/[0.5] rounded-full shadow-2xl flex justify-start p-5"
                    onClick={handleToggle}
                    style={{ justifyContent : isToggle ? "flex-end" : "flex-start"}}
                >
                    <motion.div layout className="aspect-square bg-white rounded-full shadow-2xl"/>
                </motion.div>
            </div>
        </>
    );
};