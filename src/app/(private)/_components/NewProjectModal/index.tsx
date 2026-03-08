'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { LuPlus } from 'react-icons/lu';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { createProject } from './actions';
import { formSchema, ProjectForm } from './schema';

const NewProjectModal: React.FC = () => {
  const { data } = useSession();
  const userId = data?.user?.id;
  const { register, handleSubmit, formState, reset } = useForm<ProjectForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });
  const onSubmit = async (data: ProjectForm) => {
    try {
      toast.promise(createProject(data, userId!), {
        loading: 'Creating project...',
        success: (data: { name: string }) => {
          return `Project ${data.name} was created successfully`;
        },
        error: {
          message: 'Failed to create new project',
          description: 'Please try again later',
        },
      });
      reset();
    } catch (e) {
      toast.error('Failed to create new project', {
        description: 'Please try again later',
      });
      console.error(e);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-10 w-fit items-center gap-2 rounded-full border border-white/20 bg-blue-400/10 px-4 text-[15px] font-medium text-white shadow-xl backdrop-blur-md transition-colors duration-200 hover:bg-blue-400/15">
          <LuPlus />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[520px] p-0 sm:rounded-2xl">
        <DialogHeader className="flex flex-row items-start justify-between space-y-0 p-6 pb-0">
          <DialogTitle className="font-poppins text-3xl text-primary">
            New Project
          </DialogTitle>
          <DialogDescription className="sr-only" />
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 px-6">
            <Input placeholder="Project Name" {...register('name')} />

            <div className="space-y-2">
              <p className="text-gray-700">Description</p>
              <Textarea
                {...register('description')}
                placeholder="Add some details (optional)"
                className="max-h-[10rem] min-h-12"
              />
            </div>
          </div>
          {/* TODO: Add members section */}
          <DialogFooter className="justify-end p-6 pt-0">
            <DialogClose asChild>
              <Button
                size="lg"
                className="text-base"
                type="submit"
                disabled={formState.isSubmitting || !formState.isValid}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;
