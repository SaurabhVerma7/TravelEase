const apiKey = "77ad40d7fc9d4f4b8110e2adb6150ce4";

async function getPlacesFromGeoapify(lati, longi, catagories) {
  try {
    // Geoapify API request
    const url = "https://api.geoapify.com/v2/places";
    const params = new URLSearchParams({
      categories: `${catagories}`,
      filter: `circle:${longi},${lati},5000`,
      bias: `proximity:${longi},${lati}`,
      limit: 100,
      apiKey: apiKey,
    });

    const response = await fetch(`${url}?${params}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Geoapify data:", data);

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
