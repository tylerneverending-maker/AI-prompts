import React, { FC } from 'react';
import PromptItem from './PromptItem';

export const samplePrompts = [
  'Explain this code and its functionality.',
  'Refactor this code for better readability and performance.',
  'Write unit tests for this function.',
  'Find potential bugs in this code and suggest fixes.',
  'Translate this Python code to TypeScript.',
];

const PromptSuggestions: FC = () => {
  const handlePromptClick = async (prompt: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(prompt);
        // Optional: Add a toast notification here
        console.log('Copied to clipboard:', prompt);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Useful Prompts</h1>
      <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
        {samplePrompts.map((prompt) => (
          <PromptItem key={prompt} prompt={prompt} onClick={handlePromptClick} />
        ))}
      </ul>
    </div>
  );
};

export default PromptSuggestions;