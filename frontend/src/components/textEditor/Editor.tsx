'use client';
import { useRef } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';

import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  return (
    <div>
      <EditorToolbar />

      <ReactQuill
        className='h-[10rem] text-right'
        theme='snow'
        modules={modules}
        formats={formats}
        placeholder='Write something amazing...'
      />
    </div>
  );
};

export default Editor;
