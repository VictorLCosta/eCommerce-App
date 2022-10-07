import { useStore } from "../../stores/store"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"

const Home = () => {
    const { productStore: { loadProducts, productRegistry } } = useStore()

    useEffect(() => {
        if (productRegistry.size <= 1) loadProducts();
    }, [productRegistry.size, loadProducts])

    return (
        <ul>
            {Array.from(productRegistry.values()).map((product, i) => (
                <li key={i}>
                    {product.name}
                </li>
            ))}
        </ul>
    )
}

export default observer(Home)