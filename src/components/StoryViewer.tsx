import { Story } from "../model/Story";

interface Props {
    story: Story;
}

export function StoryViewer({ story }: Props) {
    const { words, title } = story;

    return (
        <div>
            <h2>{words[0]} by {title}</h2>
            <div>
                <p>I got a {words[0]}. The name on the {words[0]} said "{title}".</p>
                <p>My {words[1]}’s name. It’s ridiculous, impossible even... My face went {words[3]}... Couldn’t possibly be {words[2]} … </p>
            </div>
        </div>
    )
}

export default StoryViewer;