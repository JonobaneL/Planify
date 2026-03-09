'use client';

import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';

const ProjectsSearch: React.FC = () => {
  const [query, setQuery] = useQueryState('name', {
    defaultValue: '',
    shallow: false,
  });

  const [text, setText] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text, setQuery]);
  return (
    <div className="w-64">
      <Input
        placeholder="Search projects..."
        className="rounded-full border-gray-300 shadow-sm"
        icon={<SearchIcon size={18} className="text-primary" />}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ProjectsSearch;
