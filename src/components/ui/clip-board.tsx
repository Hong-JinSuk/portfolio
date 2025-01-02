'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ClipBoard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onClickClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast(`'${text}'이 복사되었습니다`);
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <span>{text}</span>
      {copied ? (
        <Check className="hover:cursor-pointer" onClick={onClickClipBoard} />
      ) : (
        <Copy
          className="hover:cursor-pointer opacity-40 hover:opacity-100"
          onClick={onClickClipBoard}
        />
      )}
    </div>
  );
}
