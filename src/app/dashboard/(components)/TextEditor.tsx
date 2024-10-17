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
  BlockQuote,
  Strikethrough,
  List,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

type TextEditorProps = {
  label: string;
  isRequired?: boolean;
  placeholder?: string;
};

const TextEditor = ({
  label,
  placeholder,
  isRequired = false,
}: TextEditorProps) => {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-1 text-sm font-medium capitalize">
        {label} {isRequired && <span className="text-destructive">*</span>}
      </label>
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
            BlockQuote,
            Strikethrough,
            List,
          ],

          placeholder,
        }}
      />
    </div>
  );
};

export default TextEditor;
