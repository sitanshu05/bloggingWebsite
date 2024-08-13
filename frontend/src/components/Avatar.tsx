
export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {

    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-500 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-white dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}