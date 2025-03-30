import { Editor } from '@tiptap/react';

import AdditionalControls from './AdditionalControls';
import HighlightSelect from './HighlightSelect';
import LinkControl from './LinkControl';
import TextSelect from './TextSelect';
import { getControls } from './utils';
import { Toggle } from '../ui/toggle';

type ControlsProps = {
  editor: Editor | null;
};

const EditorControls: React.FC<ControlsProps> = ({ editor }) => {
  if (!editor) return null;
  const controls = getControls(editor);
  return (
    <div className="flex items-center gap-0.5">
      <TextSelect editor={editor} />
      <HighlightSelect editor={editor} />
      {controls.map((control, i) => (
        <Toggle
          key={i}
          size="sm"
          title={control.tooltip}
          pressed={control.pressed}
          onPressedChange={control.onClick}
        >
          {control.icon}
        </Toggle>
      ))}

      <LinkControl editor={editor} />
      <AdditionalControls />
    </div>
  );
};

export default EditorControls;
