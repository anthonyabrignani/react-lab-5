  import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router";
import { StoryContext } from "../context/story-context";
import { Story } from "../model/Story";

function CreateStoryRoute() {
  const { addStory } = useContext(StoryContext);
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const story: Story = {
        title: title, words: [word1, word2, word3, word4],
    };

    addStory(story);
    setWord1("");
    setWord2("");
    setWord3("");
    setWord4("");
    history.push("/");
  }

  return (
    <form className="CreateStoryRoute" onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
            - Your Name
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
          />
            - A Noun
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
          />
            - An Animal
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            value={word3}
            onChange={(e) => setWord3(e.target.value)}
          />
            - A Famous Person
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            value={word4}
            onChange={(e) => setWord4(e.target.value)}
          />
            - A Color
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateStoryRoute;