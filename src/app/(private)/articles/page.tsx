import Image from 'next/image';
import { LuSearch } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Articles() {
  return (
    <main className="grid h-full grid-cols-[20rem_1fr]">
      <div className="w-full border-r px-4 py-6">
        <Input
          className="h-9 rounded-lg"
          placeholder="Search"
          icon={<LuSearch className="size-4 text-primary" />}
        />
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/add-notes.svg"
            alt="add-notes"
            width={400}
            height={400}
          />
          <p className="text-center font-poppins text-sm text-gray-800">
            Select an article or create a new one
          </p>
          <Button
            size="sm"
            variant="outline"
            className="w-fit rounded-full px-4"
          >
            Add article
          </Button>
        </div>
      </div>
    </main>
  );
}
