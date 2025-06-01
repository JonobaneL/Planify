import BoardNav from './_components/nav';
import TablesList from './_components/TablesList';
import TaskOverview from './_components/taskOverview';

const TablesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <main className="pt-6">
      <div className="px-8">
        <BoardNav />
      </div>
      <TablesList projectId={slug} />
      <TaskOverview />
    </main>
  );
};

export default TablesPage;
