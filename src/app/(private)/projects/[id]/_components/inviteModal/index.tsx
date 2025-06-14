import { PropsWithChildren } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import Members from './Members';

const InviteModal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="w-full max-w-[560px] gap-6 sm:rounded-2xl"
        aria-describedby="invite-user"
      >
        <DialogHeader>
          <DialogTitle className="font-poppins text-3xl text-primary">
            Invite to this project
          </DialogTitle>
          <DialogDescription className="sr-only" />
        </DialogHeader>
        <div className="min-h-[200px] space-y-4">
          <Input placeholder="Search by username or email" />
          <Members />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
