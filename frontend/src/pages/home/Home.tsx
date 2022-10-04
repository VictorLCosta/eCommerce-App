import { useStore } from "../../stores/store"
import { useEffect } from "react"

const Home = () => {
    const { productStore: { loadProducts, productRegistry } } = useStore()

    useEffect(() => {
        if (productRegistry.size <= 1) loadProducts();
    }, [productRegistry.size, loadProducts])

    return (
        <ul>
            {Array.from(productRegistry.values()).map(product => (
                <li>
                    {product.name}
                </li>
            ))}
        </ul>
    )
}

export default Home