import { useState } from "react";
import { reachvid } from "../assets";
import AnnotationViewer from "./AnnotationViewer";
import Livechat from "./Livechat";
import Jsontoggle from "./Jsontoggle";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="max-w-[1040px] mx-auto h-full  px-4 py-10 ">
      <div className=" flex justify-between max-h-[310px] content-evenly">
        <div className="relative w-max h-max">
          <video
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            src={reachvid}
            width="550"
            height="310"
            controls
            autoPlay
            muted
            className=" rounded-lg border-2 border-white-600 overflow-hidden"
          />
          <div className="hover:bg-blue-600/[0.3] bg-blue-600/[0.1] absolute top-0 right-0 w-1/2 rounded-md text-black text-base font-bold   border-2 border-grey-600 p-1 m-0.4 ">
            <h1>Annotation Data Viewer</h1>
            <AnnotationViewer isPlaying={isPlaying} />
          </div>
        </div>
        <Livechat />
      </div>

      <Jsontoggle />
    </div>
  );
};

export default Hero;
