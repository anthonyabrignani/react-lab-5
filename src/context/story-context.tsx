import { createContext, ReactNode, useState } from "react"
import { Story } from "../model/Story"

interface StoryContextValue {
    stories: Story[];
    addStory: (story: Story) => number;
}

const defaultValue: StoryContextValue = {
    stories: [],
    addStory: () => 0,
}

const examples: Story[] = [
    {title: "Jeremy", words: ["bike", "ocelot", "Drake", "purple",]},
    {title: "Alice", words: ["table", "tiger", "Ghandi", "red",]},
    {title: "Goblin", words: ["lamp", "fox", "Queen Elizabeth", "green",]},
    {title: "Brosef", words: ["car", "stork", "Gary Glitter", "blue",]},
]

export const StoryContext = createContext(defaultValue);

export function StoryContextProvider({ children }: { children: ReactNode }) {
    const [stories, setStories] = useState<Story[]>(examples);

    function addStory(story: Story): number {
        setStories([...stories, story]);
        return stories.length;
    }
    return (
        <StoryContext.Provider value={{ stories, addStory }}>
            {children}
        </StoryContext.Provider>
    )
}