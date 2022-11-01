import CategoryItem from "./CategoryItem";

export default function Category() {
    const data = [
        {
            name: 'Top',
            total: 10,
            img: 'https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg'
        },
        {
            name: 'Bottoms',
            total: 10,
            img: 'https://static.independent.co.uk/2021/12/07/10/Weeklash.png'
        },
        {
            name: 'Shoes',
            total: 10,
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f8ee038-906a-47a9-8296-be17b4bdda94/air-jordan-1-retro-high-og-shoes-G8hcQx.png'
        },
        {
            name: 'Acessories',
            total: 10,
            img: 'https://assets.lenscrafters.com/is/image/LensCrafters/8053672808469__STD__shad__qt.png'
        },
        {
            name: 'Backpack',
            total: 10,
            img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/BontragerCommuterBackpack_33188_A_Primary?wid=1200'
        },
        {
            name: 'Cosmetics',
            total: 10,
            img: 'https://media.istockphoto.com/photos/pastel-pink-makeup-picture-id1390665987?b=1&k=20&m=1390665987&s=170667a&w=0&h=KASn1mouQ00q9XKFGhmQiPah_1UYJyEHqP2vOIGeiU4='
        },
    ]
    return (
        <div className="mt-24 bg-neutral-100/70 py-24">
            <h1 className="text-center mb-16 text-2xl font-bold">Shop by Category</h1>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 container mx-auto p-4">
                {data.map((tag,i)=>(
                    <CategoryItem data={tag} key={i}/>
                ))}
            </div>
        </div>
    )
}