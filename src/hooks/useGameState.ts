import { useState } from "react";
import { story } from "@/data/story";

type StoryKey = keyof typeof story;

export function useGameState() {
  const [currentScene, setCurrentScene] = useState<StoryKey>("start");

  function chooseOption(nextScene: StoryKey) {
    setCurrentScene(nextScene);
  }

  return { currentScene, story, chooseOption };
}
