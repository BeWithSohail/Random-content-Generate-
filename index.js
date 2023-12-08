// Array of paragraphs
const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lorem in justo fringilla fringilla.",
    "Nulla facilisi. Integer eget lorem vitae purus condimentum laoreet vel id felis.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed id consequat libero.",
    // Add more paragraphs as needed
  ];
  
  function getRandomParagraph(number) {
    const length = String(number).length;
    console.log("string length", length);
      const filteredParagraphs = paragraphs.filter((para) => {
          console.log("para", para.split(','))
         return  para.split(" ").length >= length
      });
      
     // console.log("filtered para", filteredParagraphs)
      
    if (filteredParagraphs.length === 0) {
      return "No suitable paragraph found for the input length.";
    }
    
      const randomIndex = Math.floor(Math.random() * filteredParagraphs.length);
      console.log("Rnadom Index", randomIndex)
    return filteredParagraphs[randomIndex];
  }
  

  function generateRandomParagraphs() {
    const itemsInput = document.getElementById("items");
    const numberOfParagraphs = parseInt(itemsInput.value);
  
    if (isNaN(numberOfParagraphs) || numberOfParagraphs <= 0) {
      alert("Please enter a valid number greater than zero.");
      return;
    }
  
    let generatedParagraphs = '';
    for (let i = 0; i < numberOfParagraphs; i++) {
      const randomNumber = Math.floor(Math.random() * 10000); // You can use any number here
      const randomParagraph = getRandomParagraph(randomNumber);
      generatedParagraphs += `<p>${randomParagraph}</p>`;
    }
  
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = generatedParagraphs;
  }
  