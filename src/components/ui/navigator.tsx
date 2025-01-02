import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  className?: string;
};

export default function Navigator({ className }: Props) {
  return (
    <>
      <div
        className={cn(
          `border rounded-2xl dark:bg-[#1F3241] shadow-md py-2 px-6 space-x-4 ${className}`
        )}
      >
        <Link
          href={'/'}
          className="hover:cursor-pointer hover:text-green-400 font-semibold text-sm"
        >
          About
        </Link>
        <Link
          href={'projects'}
          className="hover:cursor-pointer hover:text-green-400 font-semibold text-sm"
        >
          Projects
        </Link>
        <Link
          href={'skills'}
          className="hover:cursor-pointer hover:text-green-400 font-semibold text-sm"
        >
          Skills
        </Link>
      </div>
    </>
  );
}
