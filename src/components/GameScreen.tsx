"use client";

import { useGameState } from "@/hooks/useGameState";

export default function GameScreen() {
  const { currentScene, story, chooseOption } = useGameState();

  return (
    <div>
      <h1>{story[currentScene].text}</h1>
      <div>
        {story[currentScene].choices.map((choice, index) => (
          <button key={index} onClick={() => chooseOption(choice.next)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
