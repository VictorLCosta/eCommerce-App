import { Button, Divider, Header, Icon, Segment, Sticky } from "semantic-ui-react";

const ProductFilters = () => (
	<Sticky offset={165}>
		<Segment>
			<Header as={"h1"}>
				<Icon name="filter" size="small" />
				<Header.Content>Filters</Header.Content>
			</Header>

			<Divider />

			<Button basic fluid color="blue" style={{ fontSize: "1.4rem" }}>
				Clear filters
			</Button>
		</Segment>
	</Sticky>
);

export default ProductFilters;
