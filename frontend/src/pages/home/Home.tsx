import { useStore } from "../../stores/store"
import { useEffect } from "react"

const Home = () => {
    const { productStore: { loadProducts, productRegistry } } = useStore()

    useEffect(() => {
        if (productRegistry.size <= 1) loadProducts()
    }, [productRegistry.size, loadProducts])

    return (
        <>
            {productRegistry.forEach(product => (
                <span>
                    adsad
                </span>
            ))}
        </>
    )
}

export default Home