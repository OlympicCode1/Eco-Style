
  // Mock data for wardrobe items
  const wardrobe = [
    { brand: "Brand A", usageTime: "30 hours", wearCount: 10 },
    { brand: "Brand B", usageTime: "15 hours", wearCount: 5 },
    { brand: "Brand C", usageTime: "45 hours", wearCount: 20 },
  ];
  
  // Load wardrobe data
  function loadWardrobe() {
    const wardrobeDiv = document.getElementById("wardrobe");
    wardrobe.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p><strong>Usage Time:</strong> ${item.usageTime}</p>
        <p><strong>Wear Count:</strong> ${item.wearCount}</p>
      `;
      itemDiv.style.border = "1px solid #ccc";
      itemDiv.style.padding = "1rem";
      itemDiv.style.margin = "1rem 0";
      wardrobeDiv.appendChild(itemDiv);
    });
  }
  
  // Load wardrobe on page load
  window.onload = loadWardrobe;
  