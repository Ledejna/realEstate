import { useState, useEffect } from "react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const photoText = [
    "Categorize",
    "Show in Funnel",
    "Drive Campaign",
    "Send Online Form",
    "Send Application",
    "Go see Live",
    "Make the Deal",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://picsum.photos/v2/list?limit=7");
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex justify-center gap-[20px] mb-[70px]">
        {images.map((_, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => handleDotClick(index)}
              className="w-[39px] h-[39px] mx-2 rounded-full bg-[#EDE9FE]"
            >
              <div
                className={`m-auto border border-white border-[3px] w-[17px] h-[17px] rounded-full ${
                  index === currentIndex ? "bg-[#8B5CF6]" : "bg-[#EDE9FE]"
                }`}
              ></div>
            </button>
            <p className="text-[14px] font-semibold">{photoText[index]}</p>
          </div>
        ))}
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } inset-x-0 mx-auto w-[695px] transition-opacity duration-500`}
        >
          <img className="w-[695px] h-[365px]" src={image.download_url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Slider;
