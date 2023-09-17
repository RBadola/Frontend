import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
// import "./style.css";
import remarkGfm from 'remark-gfm'

const Markdown = ({ markdown }) => {
  //   const [markdown, setMarkDown] = useState("markdown Here we come");
  return (
  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  );
};

export default Markdown;
