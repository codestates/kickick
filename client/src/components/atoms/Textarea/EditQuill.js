import React, { useMemo } from "react";
import { useRef } from "react";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "@looop/quill-image-resize-module-react";
Quill.register("modules/ImageResize", ImageResize);

export default function EditQuill({
  image = true,
  content,
  setContent,
  handleContent,
}) {
  const quill = useRef(null);
  //quill.current.state.value

  const handleImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];

      console.log(file);

      const reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = (finishedEvent) => {
          const {
            currentTarget: { result },
          } = finishedEvent;

          const editor = quill.current.getEditor();
          const range = editor.getSelection()?.index;

          if (typeof range !== "number") return;
          /*range는 0이 될 수도 있으므로 null만 생각하고 !range로 체크하면 잘못 작동할 수 있다.
            따라서 타입이 숫자이지 않을 경우를 체크해 리턴해주었다.*/

          editor.setSelection(range, 1);
          /* 사용자 선택을 지정된 범위로 설정하여 에디터에 포커싱할 수 있다. 
               위치 인덱스와 길이를 넣어주면 된다.*/

          editor.clipboard.dangerouslyPasteHTML(
            range,
            `<img src=${result} alt="image" />`
          );
        };
      }

      // const formData = new FormData();
      // formData.append('img', file);

      // try {
      //   const result = await axios.post('http://localhost:4050/img', formData);
      //   const IMG_URL = result.data.url;
      //   const editor = quill.current.getEditor();
      //   const range = editor.getSelection();

      //   editor.insertEmbed(range, 'image', IMG_URL);
      // } catch (error) {
      //   console.log('실패했어요ㅠ');
      // }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ color: [] }, { background: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          image ? ["link", "image", "video", "code-block", "clean"] : ["clean"],
        ],
        handlers: { image: handleImage },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "italic",
    "size",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];
  return (
    <Container>
      <ReactQuill
        ref={quill}
        value={content}
        onChange={setContent}
        onBlur={handleContent}
        theme="snow"
        style={{
          height: "50rem",
          display: "flex",
          flexDirection: "column",
        }}
        modules={modules}
        formats={formats}
      />
    </Container>
  );
}
const Container = styled.div`
  z-index: 1;
`;
