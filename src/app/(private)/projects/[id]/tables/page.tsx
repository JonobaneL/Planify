import BoardNav from '../_components/nav/BoardNav';

import TablesList from './_components/TablesList';

const TablesPage = () => {
  return (
    <div>
      <div className="px-8">
        <BoardNav />
      </div>
      <TablesList />
    </div>
  );
};

export default TablesPage;
