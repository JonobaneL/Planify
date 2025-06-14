import BoardNav from './_components/nav';
import ProjectHeader from './_components/projectHeader';
import TablesList from './_components/TablesList';
import TaskOverview from './_components/taskOverview';

const TablesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <main className="pt-6">
      <div className="space-y-2 px-8">
        <ProjectHeader projectId={id} />
        <BoardNav />
      </div>
      <TablesList projectId={id} />
      <TaskOverview />
    </main>
  );
};

export default TablesPage;
