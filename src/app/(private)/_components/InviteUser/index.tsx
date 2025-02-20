import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PropsWithChildren } from "react";
import { IoCloseOutline } from "react-icons/io5";

const InviteUser: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-start">
            <p className="text-3xl font-poppins">Invite to Planify</p>
            <button>
              <IoCloseOutline size={22} />
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm">Invite with email</p>
            <Input placeholder="Enter one or more emails" />
          </div>
          <div className="space-y-1">
            <p className="text-sm">Write a message (optional)</p>
            <Textarea placeholder="Add a message for a new member" />
          </div>
          <div className="flex justify-end">
            <Button className="text-base px-5">Invite</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteUser;
