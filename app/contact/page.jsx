"use client";

import { motion } from "framer-motion";

const VideoPlayer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="flex justify-center items-center"
        style={{ transform: "translateY(-50px)" }} // 약간 위로 이동
      >
        <video
          src="/Kevin_intro_video.mp4" // 동영상 파일 경로
          controls // 재생 컨트롤 표시
          autoPlay // 자동 재생
          loop // 반복 재생
          muted // 음소거
          className="w-full max-w-md rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;