import { cn } from '@/lib/utils';

type TabsProps = {
  tab: string;
  onTabChange: (value: string) => void;
  tabs: string[];
  wrapperStyles?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  tab,
  onTabChange,
  wrapperStyles,
}) => {
  return (
    <div
      className={cn(
        'relative flex px-6 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-0.5 before:w-full before:bg-gray-200',
        wrapperStyles,
      )}
    >
      {tabs.map((tabItem) => (
        <button
          key={tabItem}
          onClick={() => onTabChange(tabItem)}
          className={cn(
            'cursor-pointer border-b-2 border-transparent px-3 py-2 text-sm',
            tab === tabItem && 'border-b-primary text-primary',
          )}
        >
          {tabItem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
