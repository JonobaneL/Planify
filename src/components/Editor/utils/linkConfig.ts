import Link from '@tiptap/extension-link';
import { Plugin, PluginKey } from '@tiptap/pm/state';

export const CustomLink = Link.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: false,
    };
  },
  addProseMirrorPlugins() {
    const plugins = this.parent?.() || [];
    const clickHandler = new Plugin({
      key: new PluginKey('handleCtrlClick'),
      props: {
        handleClick(view, pos, event) {
          const { state } = view;
          console.log(state);
          const $pos = state.doc.resolve(pos); // Resolve the clicked position
          console.log($pos);

          // Check if the position has a link mark
          const linkMark = state.schema.marks.link.isInSet($pos.marks());

          if (
            linkMark &&
            linkMark.attrs.href &&
            (event.ctrlKey || event.metaKey)
          ) {
            window.open(linkMark.attrs.href, '_blank'); // Open link in new tab
            return true; // Prevent further handling
          }

          return false; // Allow normal editor behavior
        },
      },
    });

    plugins.push(clickHandler);
    return plugins;
  },
});
