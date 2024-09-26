import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header className="">
        <p  className="text-white">text</p>
      </Header>
      <Editor/>
    </div>
  );
};

export default page;
