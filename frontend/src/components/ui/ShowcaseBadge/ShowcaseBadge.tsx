import "./ShowcaseBadge.css";

interface Props {
	content: string;
	angle?: boolean;
}

const ShowcaseBadge = ({ content, angle }: Props) => {
	const classes = angle ? "showcase-badge angle" : "showcase-badge";

	return <p className={classes}>{content}</p>;
};

export default ShowcaseBadge;
