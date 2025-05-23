import CodeBlock from '@tiptap/extension-code-block';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskList from '@tiptap/extension-task-list';
import Underline from '@tiptap/extension-underline';
import { UseEditorOptions, useEditor as useTipTap } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { cn } from '@/lib/utils';

import { CustomTaskItem } from './utils/taskItem';

type EditorProps = {
  autoFocus?: boolean;
  className?: string;
  placeholder?: string;
} & UseEditorOptions;

export const useEditor = (
  value: string,
  setValue: (value: string) => void,
  config: EditorProps,
) => {
  const { autoFocus = false, className, placeholder } = config;
  const editor = useTipTap({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          HTMLAttributes: {
            class: 'list-disc ml-4',
          },
        },
        orderedList: {
          keepMarks: true,
          HTMLAttributes: {
            class: 'list-decimal ml-4',
          },
        },
        heading: {
          levels: [1, 2, 3],
        },
        paragraph: {
          HTMLAttributes: {
            class: 'min-h-[1rem]',
          },
        },
      }),
      Placeholder.configure({
        placeholder({ editor }) {
          return !editor.isEmpty ? '' : (placeholder ?? '');
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        HTMLAttributes: {
          class:
            'underline text-primary hover:text-primary-80 cursor-pointer hover:no-underline',
        },
        shouldAutoLink: (url) => url.startsWith('https://'),
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':')
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto'];
            const protocol = parsedUrl.protocol.replace(':', '');

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === 'string' ? p : p.scheme,
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
      }),
      Highlight.configure({
        multicolor: true,
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class:
            'bg-neutral-100 dark:bg-neutral-800 p-2 text-[12.5px] rounded-md',
        },
      }),
      CustomTaskItem,
      TaskList.configure({
        HTMLAttributes: {
          class: 'flex flex-col gap-1 mb-0.5',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell.configure({
        HTMLAttributes: {
          class: 'p-1 border',
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      setValue(editor.isEmpty ? '' : editor.getHTML());
    },
    immediatelyRender: false,
    autofocus: autoFocus,
    editorProps: {
      attributes: {
        class: cn('outline-none text-sm prose prose-sm', className),
      },
    },
  });

  return editor;
};
