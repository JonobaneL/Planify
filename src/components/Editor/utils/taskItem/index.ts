import TaskItem from '@tiptap/extension-task-item';
import { mergeAttributes } from '@tiptap/react';
import './styles.css';

export const CustomTaskItem = TaskItem.extend({
  renderHTML({ HTMLAttributes, node }) {
    return [
      'li',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'taskItem',
        class: 'task-item',
      }),
      [
        'label',
        { class: 'task-item' },
        [
          'input',
          {
            type: 'checkbox',
            checked: node.attrs.checked ? 'checked' : null,
            class: 'checkbox',
          },
        ],
        ['span', { class: 'task-content' }, 0],
      ],
    ];
  },
  addAttributes() {
    return {
      checked: {
        default: false,
        renderHTML: (attributes) => {
          return attributes.checked ? { 'data-checked': 'true' } : null; // Custom attribute example
        },
      },
    };
  },
  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      const listItem = document.createElement('li');
      const checkboxWrapper = document.createElement('label');
      const checkbox = document.createElement('input');
      const content = document.createElement('div');

      listItem.classList.add('task-item');
      checkboxWrapper.classList.add('task-label');
      checkbox.classList.add('checkbox');
      content.classList.add('task-content');

      checkboxWrapper.contentEditable = 'false';
      checkbox.type = 'checkbox';
      checkbox.addEventListener('mousedown', (event) => event.preventDefault());
      checkbox.addEventListener('change', (event) => {
        // if the editor isn’t editable and we don't have a handler for
        // readonly checks we have to undo the latest change
        if (!editor.isEditable && !this.options.onReadOnlyChecked) {
          checkbox.checked = !checkbox.checked;

          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { checked } = event.target as any;

        if (editor.isEditable && typeof getPos === 'function') {
          editor
            .chain()
            .focus(undefined, { scrollIntoView: false })
            .command(({ tr }) => {
              const position = getPos();

              if (typeof position !== 'number') {
                return false;
              }
              const currentNode = tr.doc.nodeAt(position);

              tr.setNodeMarkup(position, undefined, {
                ...currentNode?.attrs,
                checked,
              });

              return true;
            })
            .run();
        }
        if (!editor.isEditable && this.options.onReadOnlyChecked) {
          // Reset state if onReadOnlyChecked returns false
          if (!this.options.onReadOnlyChecked(node, checked)) {
            checkbox.checked = !checkbox.checked;
          }
        }
      });

      Object.entries(this.options.HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });

      listItem.dataset.checked = node.attrs.checked;
      checkbox.checked = node.attrs.checked;

      checkboxWrapper.append(checkbox);
      listItem.append(checkboxWrapper, content);

      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });

      return {
        dom: listItem,
        contentDOM: content,
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }

          listItem.dataset.checked = updatedNode.attrs.checked;
          checkbox.checked = updatedNode.attrs.checked;

          return true;
        },
      };
    };
  },
});
