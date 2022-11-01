import Link from "next/link";

export default function CategoryItem({ data }) {
    return (
        <Link href={'/'}>
            <a className="bg-white rounded-2xl overflow-hidden group relative aspect-square flex flex-col shadow-sm hover:shadow-xl transition-shadow group">
                <div className="mx-4 mt-4 rounded-lg flex-1 overflow-hidden">
                    <img src={data.img} className="object-cover object-center w-full h-full"/>
                </div>
                <div className="px-[30px] py-[20px] flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-xl mb-1">{data.name}</h1>
                        <p className="text-[15px] text-gray-500">{data.total} items</p>
                    </div>
                    <button className="w-[40px] h-[40px] bg-white border shadow-sm rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto group-hover:text-blue-500 transition">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </a>
        </Link>
    )
}