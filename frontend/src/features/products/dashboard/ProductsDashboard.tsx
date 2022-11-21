import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Loading from "../../../components/ui/Loading";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { useStore } from "../../../stores/store";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";

const ProductDashboard = () => {
	const {
		productStore: { loadProducts, loadingInitial, productRegistry },
	} = useStore();

	useEffect(() => {
		if (productRegistry.size <= 1) loadProducts();
	}, [productRegistry.size, loadProducts]);

	const { isXs, isSm, isMd } = useBreakpoints();

	if (loadingInitial) return <Loading content="Aguarde..." />;

	return (
		<Grid container centered relaxed>
			{isSm || isXs || isMd ? (
				<>
					<Grid.Column width={16}>
						<ProductList />
					</Grid.Column>
				</>
			) : (
				<>
					<Grid.Column width={4}>
						<ProductFilters />
					</Grid.Column>
					<Grid.Column width={12}>
						<ProductList />
					</Grid.Column>
				</>
			)}
		</Grid>
	);
};

export default observer(ProductDashboard);
