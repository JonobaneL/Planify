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

const PROJECT_PLACEHOLDERS = [
  'Q4 Marketing Blitz',
  'Product Launch: Gamma',
  'Cross-Platform UI Redesign',
  'Client Pitch: Project Apollo',
  'Beta Feature Testing',
];

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
      <DialogContent className="w-full max-w-[520px] gap-2 overflow-hidden p-0 sm:rounded-2xl">
        <DialogHeader className="flex flex-row items-start justify-between space-y-0 p-6 pb-0">
          <DialogTitle className="font-poppins text-3xl text-primary">
            New Project
          </DialogTitle>
          <DialogDescription className="sr-only" />
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6">
            <label
              className="text-[15px] text-gray-600"
              htmlFor="projectNameFiled"
            >
              Project Name
            </label>
            <Input
              id="projectNameFiled"
              placeholder={`e.g., ${
                PROJECT_PLACEHOLDERS[
                  Math.floor(Math.random() * PROJECT_PLACEHOLDERS.length)
                ]
              }`}
              className="mb-4 mt-1 h-[42px] rounded-lg"
              {...register('name')}
            />

            <div className="space-y-1">
              <label
                className="text-[15px] text-gray-600"
                htmlFor="projectDescriptionFiled"
              >
                Description
              </label>
              <Textarea
                id="projectDescriptionFiled"
                {...register('description')}
                placeholder="Add project goals, timeline, and deliverables (optional)"
                className="max-h-[10rem] min-h-12 rounded-lg"
              />
            </div>
          </div>
          {/* TODO: Add members section */}
          <DialogFooter className="justify-end border-t border-primary-20 bg-primary-5 px-6 py-4">
            <DialogClose asChild>
              <Button
                className="w-28 rounded-lg bg-gradient-to-br from-primary-60 to-primary-80 font-poppins text-[15px] disabled:opacity-80"
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
