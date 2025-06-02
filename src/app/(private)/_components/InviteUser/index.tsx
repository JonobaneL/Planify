'use client';
import { PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
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
        className="w-full max-w-[560px] gap-6 sm:rounded-2xl"
        aria-describedby="invite-user"
      >
        <DialogHeader>
          <DialogTitle className="font-poppins text-3xl text-primary">
            Invite to Planify
          </DialogTitle>
          <DialogDescription className="sr-only" />
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-gray-700">Invite with email</p>
            <EmailField />
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">Write a message (optional)</p>
            <Textarea placeholder="Add a message for a new member" />
          </div>
          <div className="flex justify-end">
            <Button size="lg">Invite</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteUser;
