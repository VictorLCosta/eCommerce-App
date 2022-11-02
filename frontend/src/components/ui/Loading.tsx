import { Dimmer, Loader } from "semantic-ui-react"

interface Props {
    content?: string,
    inverted?: boolean
}

const Loading = ({ content, inverted }: Props) => {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} size="big" />
        </Dimmer>
    )
}

export default Loading