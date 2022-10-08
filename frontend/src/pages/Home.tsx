import { observer } from "mobx-react-lite"
import ProductDashboard from "../features/products/dashboard/ProductsDashboard"

const Home = () => {
    return (
        <ProductDashboard />
    )
}

export default observer(Home)