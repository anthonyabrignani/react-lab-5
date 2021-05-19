import { useContext } from "react";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { StoryContext } from "../context/story-context";
import { StoryViewer } from "../components/StoryViewer";

interface RouteParams {
  num: string;
}

export function ViewStoryRoute() {
  const storyIndex = parseInt(useParams<RouteParams>().num);
  const { stories } = useContext(StoryContext);
  const story = stories[storyIndex];
  const prevStoryIndex = storyIndex - 1;
  const nextStoryIndex = storyIndex + 1;
  if (!story) {
    return <Redirect to="/stories" />;
  }
  return (
    <div>
      <StoryViewer story={story} />
      {prevStoryIndex >= 0 && (
        <Link to={`/stories/${prevStoryIndex}`}>Previous Story</Link>
      )}

      {nextStoryIndex < stories.length && (
        <Link to={`/stories/${nextStoryIndex}`}>Next Story</Link>
      )}
    </div>
  );
}
