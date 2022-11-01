import colors from "../lib/colors";

export default function ColorDot({ active, className, onClick, color }) {
    return (
        <div style={{ borderColor: active ? colors[color] : 'transparent' }} onClick={onClick} className={`${className} border relative p-0.5 rounded-full cursor-pointer`}>
            <div style={{ background: colors[color] }} className={`absolute inset-0.5 rounded-full`}></div>
        </div>
    )
}