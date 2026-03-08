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

  // 1. Local state for immediate input feedback
  const [text, setText] = useState(query);

  // 2. Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(text);
    }, 500); // Wait 500ms after last keystroke

    return () => clearTimeout(timer);
  }, [text, setQuery]);
  return (
    <div className="w-64">
      <Input
        placeholder="Search projects..."
        className="rounded-full"
        icon={<SearchIcon size={18} className="text-primary" />}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ProjectsSearch;
