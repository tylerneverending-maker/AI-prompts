import React, { FC } from 'react';

interface PromptItemProps {
  prompt: string;
  onClick: (prompt: string) => void;
}

const PromptItem: FC<PromptItemProps> = ({ prompt, onClick }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(prompt)}
        className="h-full w-full rounded-lg border p-4 text-left shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
      >
        {prompt}
      </button>
    </li>
  );
};

export default PromptItem;