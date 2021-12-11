import React, { useState, useEffect, useRef } from "react";

export default function InfiniteScroll({ callback }) {
  const [loading, setLoading] = useState(true);
  const fetchSection = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-150px",
      threshold: 1,
    };

    let observer;
    const fetchelement = fetchSection.current;

    if (fetchelement) {
      observer = new IntersectionObserver(handleFetch, options);
      observer.observe(fetchelement);
    }
    return () => observer.disconnect(fetchelement);
  }, []);

  const handleFetch = (entry) => {
    if (entry[0].isIntersecting) {
      console.log("e");
      callback();
    }
  };

  return <div ref={fetchSection}></div>;
}
