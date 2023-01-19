import React from "react";

import Button from "../../components/Button";

function UnValidPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">
        잘못된 접근입니다!!!
      </h1>

      <Button submitMode={false} isValid={null}>
        되돌아가기
      </Button>
    </div>
  );
}

export default UnValidPage;
