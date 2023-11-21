import { useEffect, useState } from "react";

type FrameData = [number, number, number, number];

const AnnotationViewer = ({ isPlaying }: { isPlaying: boolean }) => {
  const [data, setData] = useState<FrameData[][] | null>(null);
  const [frameIndex, setFrameIndex] = useState<number>(0);
  const [currentFrame, setCurrentFrame] = useState<FrameData[] | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const annotationURL =
        "https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json";

      try {
        const response = await fetch(annotationURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: FrameData[][] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetData();
  }, []);

  useEffect(() => {
    // Clear the interval when isPlaying becomes false
    if (!isPlaying && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    // Start mapping when isPlaying becomes true
    if (isPlaying && data && frameIndex < data.length && intervalId === null) {
      const newIntervalId = setInterval(() => {
        setFrameIndex((prevFrameIndex) => {
          if (prevFrameIndex + 1 < data.length) {
            setCurrentFrame(data[prevFrameIndex + 1]);
            return prevFrameIndex + 1;
          } else {
            // Stop mapping when the end of the data is reached
            clearInterval(newIntervalId);
            setIntervalId(null);
            return prevFrameIndex;
          }
        });
      }, 1000 / 30);

      setIntervalId(newIntervalId);
    }
  }, [isPlaying, data, frameIndex, intervalId]);

  return (
    <div>
      <h2>Annotation Data</h2>
      {currentFrame && (
        <div>
          <h3>Frame {frameIndex}</h3>
          {currentFrame.map((rect, index) => (
            <div key={`rect_${index}`}>
              <p>
                Rect {index + 1}: Center X: {rect[0]}, Center Y: {rect[1]},
                Width: {rect[2]}, Height: {rect[3]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnotationViewer;
