import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { StoryContextProvider } from "./context/story-context";
import CreateStoryRoute from "./routes/CreateStoryRoute";
import { ViewStoryRoute } from "./routes/ViewStoryRoute";
import { ListStoriesRoute } from "./routes/StoriesRoute";

function App() {
  return (
    <div className="App">
      <StoryContextProvider>
        <Router>
          <h1>GC Mad Libs</h1>
          <nav>
            <Link to="/stories">See Saved Stories</Link>{" "}
            <Link to="/create-story">Create a New Story</Link>
          </nav>
          <Switch>
            <Route path="/stories/:num" exact>
              <ViewStoryRoute />
            </Route>
            <Route path="/create-story" exact>
              <CreateStoryRoute />
            </Route>
            <Route path="/stories">
              <ListStoriesRoute />
            </Route>
          </Switch>
        </Router>
      </StoryContextProvider>
    </div>
  );
}

export default App;
