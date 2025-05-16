import { Suspense } from 'react';

import Loader from '@/components/Loader';

import ProjectsList from './_components/ProjectsList';
import Schedule from './_components/Schedule';
import UserCard from './_components/UserCard';

export default function Home() {
  return (
    <main className="grid h-full grid-cols-[1fr_360px] grid-rows-[auto_1fr] gap-4 pt-6">
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
        <div className="relative grid h-full w-full auto-rows-min grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-stretch gap-4 rounded-t-3xl bg-primary-5 p-4">
          <Suspense
            fallback={
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Loader />
              </div>
            }
          >
            <ProjectsList />
          </Suspense>
        </div>
      </section>
      <section className="space-y-4 pr-8">
        <UserCard />
        <Schedule />
      </section>
    </main>
  );
}
