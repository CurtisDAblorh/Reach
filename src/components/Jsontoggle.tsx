import { useEffect, useState } from "react";

const Jsontoggle = () => {
  const [data, setData] = useState<[][] | null>(null);
  const [isJsonVisible, setIsJsonVisible] = useState(false);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const annotationURL =
        "https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json";

      try {
        const response = await fetch(annotationURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: [][] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetData();
  }, []);

  const toggleJsonVisibility = () => {
    setIsJsonVisible(!isJsonVisible);
  };

  const downloadJson = () => {
    // JSON content to be downloaded
    const jsonData = { key1: "value1", key2: "value2" };

    // Convert JSON object to a string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Set the file name for the download
    link.download = "reach_annotation_data.json";

    // Simulate click on the link to trigger the download
    link.click();
  };

  return (
    <div className="flex flex-col">
      <div className=" flex-1 font-bold text-white text-sm mt-6 max-w-[200px] flex flex-row rounded-lg">
        <button
          onClick={toggleJsonVisibility}
          className="bg-gray-100 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 border-2 border-slate-600 hover:border-blue-500/[0.5] rounded"
        >
          Display JSON
        </button>
        <button
          onClick={downloadJson}
          className="border-2 border-slate-600 bg-gray-100  hover:bg-blue-400 hover:border-blue-500/[0.5] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download </span>
        </button>
      </div>

      {isJsonVisible && (
        <div
          className="bg-slate-300 flex-2 h-36 hover:bg-blue-400 hover:border-blue-500/[0.5]
     text-black font-bold overflow-auto rounded-lg border-2 border-slate-600"
        >
          {JSON.stringify(data, null, 2)}
        </div>
      )}
    </div>
  );
};

export default Jsontoggle;
