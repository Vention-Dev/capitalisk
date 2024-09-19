import React, { useState, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";

import { Card } from "./Card";
import { SelectableCard } from "./SelectableCard";

export const Carousel = () => {
  const { sendRequest } = useHttpClient();
  const [loadedOptions, setLoadedOptions] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cachedSlides, setCachedSlides] = useState({});

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const interval = 1800;
  useEffect(() => {
    if (!loadedOptions) return;
    const timeout = setTimeout(() => {
      setCurrentIndex(
        currentIndex === loadedOptions.length - 1 ? 0 : currentIndex + 1
      );
    }, interval);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, loadedOptions]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const responseData = await sendRequest(
          `/options`,
          "POST",
          JSON.stringify({}),
          {
            Authorization: "Bearer " + process.env.REACT_APP_AUTH_TOKEN,
            "Content-Type": "application/json",
          }
        );
        setLoadedOptions(responseData.options);
      } catch (e) {
        console.log(e);
      }
    };
    fetchOptions();
  }, [sendRequest]);

  useEffect(() => {
    const fetchSlide = async () => {
      if (!loadedOptions) return;
      const id = loadedOptions[currentIndex].slideId;
      let slide;
      try {
        const responseData = await sendRequest(
          "/option",
          "POST",
          JSON.stringify({ slideId: id }),
          {
            Authorization: "Bearer " + process.env.REACT_APP_AUTH_TOKEN,
            "Content-Type": "application/json",
          }
        );
        slide = responseData.slide;
        setCachedSlides((prevState) => {
          return { ...prevState, [currentIndex]: slide };
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchSlide();
  }, [sendRequest, currentIndex, loadedOptions, cachedSlides]);

  return (
    <div className="bg-neutral-50 h-full w-full p-10 ">
      <div className="md:mt-32">
        <h1 className="md:p-4 text-center text-2xl md:text-4xl font-semibold">
          JOIN THE FAMILY
        </h1>
        <Card {...cachedSlides[currentIndex.toString()]} />
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none">
          {loadedOptions &&
            loadedOptions.map((option, optionIndex) => {
              return (
                <SelectableCard
                  key={optionIndex}
                  index={optionIndex}
                  action={goToSlide}
                  content={option}
                  currIndex={currentIndex}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
