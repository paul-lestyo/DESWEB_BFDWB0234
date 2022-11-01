import { motion } from "framer-motion";

export default function PrevBtn({ onClick }) {
    return (
        <motion.button whileTap={{ scale: 1.7 }} onClick={onClick} className="w-[40px] h-[40px] border rounded-full text-gray-500 hover:text-black transition shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
        </motion.button>
    )
}