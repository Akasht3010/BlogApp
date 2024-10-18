import React, { forwardRef } from "react";
import ReactQuill from "react-quill";

const Editor = forwardRef(({ value, onChange }, ref) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  return (
    <ReactQuill
      ref={ref} // Use ref here
      value={value}
      theme="snow"
      onChange={onChange}
      modules={modules}
    />
  );
});

export default Editor;
