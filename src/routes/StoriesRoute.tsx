import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoryContext } from "../context/story-context";

export function ListStoriesRoute() {
  const { stories } = useContext(StoryContext);

  return (
    <div>
      {stories.map((story, i) => (
        <li key={i}>
          <Link to={`/stories/${i}`}>{story.title}</Link>{" "}
        </li>
      ))}
    </div>
  );
}
