// components/DownloadButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/AI_Kevin_Lee.pdf"); // 서버 PDF 경로
      if (!response.ok) {
        throw new Error("Failed to fetch the CV file.");
      }
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "My_CV.pdf"; // 다운로드 시 파일 이름 지정
      a.click();
      window.URL.revokeObjectURL(url); // 메모리 해제
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <Button
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;