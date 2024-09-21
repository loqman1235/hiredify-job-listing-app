"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Heading,
  Image,
  Link,
  MediaEmbed,
  BlockQuote,
  Strikethrough,
  List,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

const TextEditor = () => {
  return (
    <div className="min-h-[300px] w-full">
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "heading",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "imageUpload",
              "mediaEmbed",
              "code",
              "horizontalLine",
              "removeFormat",
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Italic,
            Mention,
            Paragraph,
            Undo,
            Heading,
            Image,
            Link,
            MediaEmbed,
            BlockQuote,
            Strikethrough,
            List,
          ],

          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        }}
      />
    </div>
  );
};

export default TextEditor;
