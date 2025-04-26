import TablesList from './_components/TablesList';
import BoardNav from '../_components/nav';

const TablesPage = () => {
  return (
    <main className="pt-6">
      <div className="px-8">
        <BoardNav />
      </div>
      <TablesList />
    </main>
  );
};

export default TablesPage;
