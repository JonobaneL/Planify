'use client';
import { PropsWithChildren } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

import EmailField from './EmailField';

const InviteUser: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="w-full max-w-[560px] gap-6"
        aria-describedby="invite-user"
      >
        <DialogHeader>
          <DialogTitle className="flex items-start justify-between">
            <p className="font-poppins text-3xl text-primary">
              Invite to Planify
            </p>
            <DialogClose asChild>
              <button>
                <IoCloseOutline size={22} />
              </button>
            </DialogClose>
            <DialogDescription className="hidden" />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm">Invite with email</p>
            <EmailField />
          </div>
          <div className="space-y-1">
            <p className="text-sm">Write a message (optional)</p>
            <Textarea placeholder="Add a message for a new member" />
          </div>
          <div className="flex justify-end">
            <Button className="w-28 rounded-full px-6 text-base">Invite</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteUser;
