import { SearchParams } from 'nuqs';
import { Suspense } from 'react';

import Loader from '@/components/Loader';

import BoardNav from './_components/nav';
import ProjectHeader from './_components/projectHeader';
import TablesList from './_components/TablesList';
import TaskOverview from './_components/taskOverview';
import { searchParamsCache } from './_utils/searchParams';

const TablesPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}) => {
  const { id } = await params;
  await searchParamsCache.parse(searchParams);

  return (
    <main className="pt-6">
      <div className="space-y-2 px-8">
        <ProjectHeader projectId={id} />
        <BoardNav />
      </div>
      <Suspense fallback={<Loader />}>
        <TablesList projectId={id} />
      </Suspense>
      <TaskOverview />
    </main>
  );
};

export default TablesPage;
