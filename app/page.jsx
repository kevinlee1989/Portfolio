"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import "./Dashboard.css";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadButton";
import StartButton from "@/components/StartButton";

const Start = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-animated bg-gray-900 text-white">
      <div className="text-center">
        <div className="text-4xl font-bold mb-4">Welcome</div>
        <StartButton />
      </div>
    </section>
  );
};

export default Start;
