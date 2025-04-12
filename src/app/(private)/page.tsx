import { mockProjects } from '@/data/mock/projects';

import ProjectCard from './_components/projectCard';

export default function Home() {
  return (
    <main className="grid h-full grid-cols-[1fr_360px] grid-rows-[auto_1fr] gap-4">
      <header className="col-span-2 mx-8">
        <h1 className="font-poppins text-2xl font-bold text-gray-800">
          Welcome to Planify
        </h1>
        <p className="font-medium text-gray-600">
          Your all-in-one platform for project management and team
          collaboration.
        </p>
      </header>
      <section className="h-full w-full space-y-4 pl-8">
        <div className="grid h-full w-full auto-rows-min grid-cols-3 gap-4 rounded-t-2xl bg-[hsl(220,60%,97%)] p-4">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="space-y-4 pr-8">
        <div className="flex cursor-pointer justify-between rounded-2xl border border-gray-100 p-4 transition-shadow hover:shadow">
          <div>
            <p className="text-lg text-gray-800">Hello,</p>
            <h2 className="text-primary">Alex</h2>
          </div>
          <div className="bg-profile flex size-14 items-center justify-center rounded-full bg-auto">
            <p className="font-poppins text-2xl font-semibold text-white">A</p>
          </div>
        </div>
        <div className="space-y-2 rounded-2xl border border-gray-100 py-2 pt-4 transition-shadow hover:shadow">
          <div className="flex items-center justify-between px-4">
            <h4 className="font-semibold text-primary">Schedule</h4>
            <p className="text-sm text-gray-600">10 April</p>
          </div>
          {/* <div>
            <p className="text-sm text-gray-600">
              You don&apos;t have any events today
            </p>
          </div> */}
          <div>
            <div className="mx-2 cursor-pointer space-y-1 rounded-xl p-2 transition-colors hover:bg-[hsl(220,60%,97%)]">
              <p className="font-medium text-gray-800">Daily meeting</p>
              <p className="text-sm font-medium text-gray-500">
                11:00am - 11:30am
              </p>
            </div>
            <div className="mx-2 cursor-pointer space-y-1 rounded-xl p-2 transition-colors hover:bg-[hsl(220,60%,97%)]">
              <p className="font-medium text-gray-800">Quarterly report</p>
              <p className="text-sm font-medium text-gray-500">
                14:00pm - 15:30pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
