import TablesList from './_components/TablesList';
import BoardNav from '../_components/nav';
import TaskOverview from '../_components/taskOverview';

const TablesPage = () => {
  return (
    <main className="pt-6">
      <div className="px-8">
        <BoardNav />
      </div>
      <TablesList />
      <TaskOverview />
    </main>
  );
};

export default TablesPage;
