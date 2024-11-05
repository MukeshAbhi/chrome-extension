// src/contentScript.js
console.log("Content script loaded!");

// Example functionality: Calculate reading time
 const calculateReadingTime = () => {
  const text = document.body.innerText;
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  console.log(`Estimated Reading Time: ${readingTime} minutes`);

  // src/contentScript.js
console.log("Content script loaded!");


};

calculateReadingTime();



