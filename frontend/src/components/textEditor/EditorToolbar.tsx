import { Quill } from 'react-quill';
import { Button } from '../ui/button';

const CustomUndo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='6 10 4 12 2 10 6 10' />
    <path
      className='ql-stroke'
      d='M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9'
    />
  </svg>
);

const CustomRedo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='12 10 14 12 16 10 12 10' />
    <path
      className='ql-stroke'
      d='M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5'
    />
  </svg>
);

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

const Font = Quill.import('formats/font');
Font.whitelist = [
  'arial',
  'comic-sans',
  'courier-new',
  'georgia',
  'helvetica',
  'lucida',
];
Quill.register(Font, true);

export const modules = {
  toolbar: {
    container: '#toolbar',
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
];

export const QuillToolbar = () => (
  <div id='toolbar' className='text-left'>
    <span className='ql-formats'>
      <select className='ql-font' defaultValue='arial' title='font-family'>
        <option value='arial'>Arial</option>
        <option value='comic-sans'>Comic Sans</option>
        <option value='courier-new'>Courier New</option>
        <option value='georgia'>Georgia</option>
        <option value='helvetica'>Helvetica</option>
        <option value='lucida'>Lucida</option>
      </select>
      <select className='ql-size' defaultValue='medium' title='size'>
        <option value='extra-small'>Size 1</option>
        <option value='small'>Size 2</option>
        <option value='medium'>Size 3</option>
        <option value='large'>Size 4</option>
      </select>
      <select className='ql-header' defaultValue='3' title='header'>
        <option value='1'>Heading</option>
        <option value='2'>Subheading</option>
        <option value='3'>Normal</option>
      </select>
    </span>
    <span className='ql-formats'>
      <Button className='ql-bold' />
      <Button className='ql-italic' />
      <Button className='ql-underline' />
      <Button className='ql-strike' />
    </span>
    <span className='ql-formats'>
      <Button className='ql-list' value='ordered' />
      <Button className='ql-list' value='bullet' />
      <Button className='ql-indent' value='-1' />
      <Button className='ql-indent' value='+1' />
    </span>
    <span className='ql-formats'>
      <Button className='ql-script' value='super' />
      <Button className='ql-script' value='sub' />
      <Button className='ql-blockquote' />
      <Button className='ql-direction' />
    </span>
    <span className='ql-formats'>
      <select className='ql-align' title='align' />
      <select className='ql-color' title='color' />
      <select className='ql-background' title='background color' />
    </span>
    <span className='ql-formats'>
      <Button className='ql-link' />
      <Button className='ql-image' />
      <Button className='ql-video' />
    </span>
    <span className='ql-formats'>
      <Button className='ql-formula' />
      <Button className='ql-code-block' />
      <Button className='ql-clean' />
    </span>
    <span className='ql-formats'>
      <Button className='ql-undo'>
        <CustomUndo />
      </Button>
      <Button className='ql-redo'>
        <CustomRedo />
      </Button>
    </span>
  </div>
);

export default QuillToolbar;
