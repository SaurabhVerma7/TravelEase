async function getAccessToken() {
  const response = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=vpZpJHun8Sgh5qHDCoJdbrnBZJsYsqGV&client_secret=ylKl1aNGF9Jh8TdH",
    }
  );
  const data = await response.json();
  return data.access_token;
}

async function AirportAndCitySearch(accessToken, cityName) {
  return await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${cityName}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

async function AirportAndCitySearch2(accessToken, countryCode, cityName) {
  return await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/cities?countryCode=${countryCode}&keyword=${cityName}&max=10`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

async function citycoordinates(
  cityName,
  departDate,
  returnDate,
  category,
  originCity
) {
  try {
    const capitalizedCityName =
      cityName.charAt(0).toUpperCase() + cityName.slice(1);

    const accessToken = await getAccessToken();
    const cityResponse = await AirportAndCitySearch(accessToken, cityName);
    if (!cityResponse.ok) {
      throw new Error(`Failed to fetch city data: ${cityResponse.statusText}`);
    }

    const cityData = await cityResponse.json();
    let countryCode = cityData.data[0].address.countryCode;
    console.log(cityData);

    const cityResponse4 = await AirportAndCitySearch2(
      accessToken,
      countryCode,
      cityName
    );
    if (!cityResponse4.ok) {
      throw new Error(`Failed to fetch city data: ${cityResponse4.statusText}`);
    }

    const cityData3 = await cityResponse4.json();
    const lati = cityData3.data[0].geoCode.latitude;
    const longi = cityData3.data[0].geoCode.longitude;

    category = category.slice(0, -1);

    const placesData = await getPlacesFromGeoapify(lati, longi, category);
    localStorage.setItem("data1", JSON.stringify(placesData));

    const flightdata = await searchFlightOffers(
      departDate,
      cityName,
      originCity
    );
    const flightdata2 = await searchFlightOffers(
      returnDate,
      originCity,
      cityName
    );
    console.log(departDate, returnDate);
    localStorage.setItem("data2", JSON.stringify(flightdata));
    localStorage.setItem("data10", JSON.stringify(flightdata2));
    localStorage.setItem("originCity", originCity);
    localStorage.setItem("destinationCity", capitalizedCityName);

    const hotelCategory = "accommodation.hotel";
    const hotelData = await getPlacesFromGeoapify(lati, longi, hotelCategory);
    localStorage.setItem("data3", JSON.stringify(hotelData));

    window.location.href = "geoapify_module/display.html";
  } catch (error) {
    console.error("Error:", error);
  }
}

let category = "";

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons
  var buttons = document.querySelectorAll("#interestsDiv");

  // Add event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var buttonId = event.target.id;
      if (buttonId != "interestsDiv") {
        category += `${buttonId},`;
        event.target.classList.add("highlighted");
      }
      // Remove the 'highlighted' class from all buttons
      // buttons.forEach(function(btn) {
      //     btn.classList.remove('highlighted');
      // });
      event.target.disabled = true;
      // Add the 'highlighted' class to the clicked button
      console.log(category); // Log category after button click
    });
  });
});

// Remove the automatic invocation of initializeApp() at the end of your script
document.getElementById("button").addEventListener("click", function () {
  initializeApp();
});

function initializeApp() {
  let cityName = document.querySelector(".CityName1").value;
  cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const enter_city = document.querySelector(".enter_city");
  const departDate = document.getElementById("result_from").value;
  const returnDate = document.getElementById("result_to").value;
  const enterDate = document.querySelector(".enter_date");
  const enterTag = document.querySelector(".enter_tag");
  const showSpinner = document.querySelector(".spinner");
  let originCity = document.querySelector(".CityName2").value;
  originCity = originCity.charAt(0).toUpperCase() + originCity.slice(1);

  // Reset text content and hide elements
  enter_city.style.visibility = "hidden";
  enter_city.innerText = "";
  enterDate.innerText = "";
  enterDate.style.visibility = "hidden";
  enterTag.innerText = "";
  enterTag.style.visibility = "hidden";

  if (cityName !== "") {
    if (category !== "") {
      if (departDate !== "") {
        citycoordinates(cityName, departDate, returnDate, category, originCity);
        showSpinner.style.visibility = "visible";
      } else {
        // Show enter date message
        enterDate.innerText = "Enter Date!!";
        enterDate.style.visibility = "visible";

        // Hide enter date message after 700 milliseconds
        setTimeout(() => {
          enterDate.style.visibility = "hidden";
        }, 700);
      }
    } else {
      // Show select category message
      enterTag.innerText = "Select at least one category!!";
      enterTag.style.visibility = "visible";

      // Hide select category message after 700 milliseconds
      setTimeout(() => {
        enterTag.style.visibility = "hidden";
      }, 700);
    }
  } else if (category === "" && departDate === "" && cityName === "") {
    // Show enter city message
    enter_city.innerText = "Enter City!!";
    enter_city.style.visibility = "visible";
    // Show enter date message
    enterDate.innerText = "Enter Date!!";
    enterDate.style.visibility = "visible";

    // Show select category message
    enterTag.innerText = "Select at least one category!!";
    enterTag.style.visibility = "visible";

    // Hide both messages after 700 milliseconds
    setTimeout(() => {
      enter_city.style.visibility = "hidden";
      enterDate.style.visibility = "hidden";
      enterTag.style.visibility = "hidden";
    }, 700);
  } else if (category === "" && departDate === "") {
    // Show enter date message
    enterDate.innerText = "Enter Date!!";
    enterDate.style.visibility = "visible";

    // Show select category message
    enterTag.innerText = "Select at least one category!!";
    enterTag.style.visibility = "visible";

    // Hide both messages after 700 milliseconds
    setTimeout(() => {
      enterDate.style.visibility = "hidden";
      enterTag.style.visibility = "hidden";
    }, 700);
  } else if (category === "" && cityName === "") {
    // Show enter date message
    enter_city.innerText = "Enter Date!!";
    enter_city.style.visibility = "visible";

    // Show select category message
    enterTag.innerText = "Select at least one category!!";
    enterTag.style.visibility = "visible";

    // Hide both messages after 700 milliseconds
    setTimeout(() => {
      enterDate.style.visibility = "hidden";
      enterTag.style.visibility = "hidden";
    }, 700);
  } else if (cityName === "" && departDate === "") {
    // Show enter date message
    enterDate.innerText = "Enter Date!!";
    enterDate.style.visibility = "visible";

    // Show select category message
    enter_city.innerText = "Enter City!!";
    enter_city.style.visibility = "visible";

    // Hide both messages after 700 milliseconds
    setTimeout(() => {
      enterDate.style.visibility = "hidden";
      enterTag.style.visibility = "hidden";
    }, 700);
  } else if (category === "") {
    // Show select category message
    enterTag.innerText = "Select at least one category!!";
    enterTag.style.visibility = "visible";

    // Hide select category message after 700 milliseconds
    setTimeout(() => {
      enterTag.style.visibility = "hidden";
    }, 700);
  } else if (departDate === "") {
    // Show enter date message
    enterDate.innerText = "Enter Date!!";
    enterDate.style.visibility = "visible";

    // Hide enter date message after 700 milliseconds
    setTimeout(() => {
      enterDate.style.visibility = "hidden";
    }, 700);
  } else if (cityName === "") {
    // Show enter date message
    enter_city.innerText = "Enter City!!";
    enter_city.style.visibility = "visible";

    // Hide enter date message after 700 milliseconds
    setTimeout(() => {
      enter_city.style.visibility = "hidden";
    }, 700);
  }
}
