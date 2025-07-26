'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { LuPlus } from 'react-icons/lu';

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
import Members from './Members';
import { formSchema, ProjectForm } from './schema';
import ViewSelect from './ViewSelect';

const NewProjectModal: React.FC = () => {
  const { data } = useSession();
  const userId = data?.user?.id;
  const { register, handleSubmit, control, formState } = useForm<ProjectForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      view: 'table',
      description: null,
    },
  });
  const onSubmit = async (data: ProjectForm) => {
    try {
      // TODO: add some response handling
      await createProject(data, userId!);
    } catch (e) {
      // TODO: same for error handling
      console.error(e);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-fit rounded-full" variant="outline">
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
            <Controller
              name="view"
              control={control}
              render={({ field }) => (
                <ViewSelect value={field.value} onChange={field.onChange} />
              )}
            />

            <div className="space-y-2">
              <p className="text-gray-700">Description</p>
              <Textarea
                {...register('description')}
                placeholder="Add some details (optional)"
                className="max-h-[10rem] min-h-12"
              />
            </div>
          </div>
          <div className="border-t px-6 pt-4">
            <Members />
          </div>
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
