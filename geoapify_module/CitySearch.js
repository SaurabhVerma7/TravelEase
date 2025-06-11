// const countryCodes = {
//   "afghanistan": "AF",
//   "aland islands": "AX",
//   "albania": "AL",
//   "algeria": "DZ",
//   "american samoa": "AS",
//   "andorra": "AD",
//   "angola": "AO",
//   "anguilla": "AI",
//   "antarctica": "AQ",
//   "antigua and barbuda": "AG",
//   "argentina": "AR",
//   "armenia": "AM",
//   "aruba": "AW",
//   "australia": "AU",
//   "austria": "AT",
//   "azerbaijan": "AZ",
//   "bahamas": "BS",
//   "bahrain": "BH",
//   "bangladesh": "BD",
//   "barbados": "BB",
//   "belarus": "BY",
//   "belgium": "BE",
//   "belize": "BZ",
//   "benin": "BJ",
//   "bermuda": "BM",
//   "bhutan": "BT",
//   "bolivia": "BO",
//   "bosnia and herzegovina": "BA",
//   "botswana": "BW",
//   "bouvet island": "BV",
//   "brazil": "BR",
//   "british indian ocean territory": "IO",
//   "brunei darussalam": "BN",
//   "bulgaria": "BG",
//   "burkina faso": "BF",
//   "burundi": "BI",
//   "cambodia": "KH",
//   "cameroon": "CM",
//   "canada": "CA",
//   "cape verde": "CV",
//   "cayman islands": "KY",
//   "central african republic": "CF",
//   "chad": "TD",
//   "chile": "CL",
//   "china": "CN",
//   "christmas island": "CX",
//   "cocos (keeling) islands": "CC",
//   "colombia": "CO",
//   "comoros": "KM",
//   "congo": "CG",
//   "congo, democratic republic": "CD",
//   "cook islands": "CK",
//   "costa rica": "CR",
//   "cote d'ivoire": "CI",
//   "croatia": "HR",
//   "cuba": "CU",
//   "cyprus": "CY",
//   "czech republic": "CZ",
//   "denmark": "DK",
//   "djibouti": "DJ",
//   "dominica": "DM",
//   "dominican republic": "DO",
//   "ecuador": "EC",
//   "egypt": "EG",
//   "el salvador": "SV",
//   "equatorial guinea": "GQ",
//   "eritrea": "ER",
//   "estonia": "EE",
//   "ethiopia": "ET",
//   "falkland islands (malvinas)": "FK",
//   "faroe islands": "FO",
//   "fiji": "FJ",
//   "finland": "FI",
//   "france": "FR",
//   "french guiana": "GF",
//   "french polynesia": "PF",
//   "french southern territories": "TF",
//   "gabon": "GA",
//   "gambia": "GM",
//   "georgia": "GE",
//   "germany": "DE",
//   "ghana": "GH",
//   "gibraltar": "GI",
//   "greece": "GR",
//   "greenland": "GL",
//   "grenada": "GD",
//   "guadeloupe": "GP",
//   "guam": "GU",
//   "guatemala": "GT",
//   "guernsey": "GG",
//   "guinea": "GN",
//   "guinea-bissau": "GW",
//   "guyana": "GY",
//   "haiti": "HT",
//   "heard island & mcdonald islands": "HM",
//   "holy see (vatican city state)": "VA",
//   "honduras": "HN",
//   "hong kong": "HK",
//   "hungary": "HU",
//   "iceland": "IS",
//   "india": "IN",
//   "indonesia": "ID",
//   "iran, islamic republic of": "IR",
//   "iraq": "IQ",
//   "ireland": "IE",
//   "isle of man": "IM",
//   "israel": "IL",
//   "italy": "IT",
//   "jamaica": "JM",
//   "japan": "JP",
//   "jersey": "JE",
//   "jordan": "JO",
//   "kazakhstan": "KZ",
//   "kenya": "KE",
//   "kiribati": "KI",
//   "korea": "KR",
//   "north korea": "KP",
//   "kuwait": "KW",
//   "kyrgyzstan": "KG",
//   "lao people's democratic republic": "LA",
//   "latvia": "LV",
//   "lebanon": "LB",
//   "lesotho": "LS",
//   "liberia": "LR",
//   "libyan arab jamahiriya": "LY",
//   "liechtenstein": "LI",
//   "lithuania": "LT",
//   "luxembourg": "LU",
//   "macao": "MO",
//   "macedonia": "MK",
//   "madagascar": "MG",
//   "malawi": "MW",
//   "malaysia": "MY",
//   "maldives": "MV",
//   "mali": "ML",
//   "malta": "MT",
//   "marshall islands": "MH",
//   "martinique": "MQ",
//   "mauritania": "MR",
//   "mauritius": "MU",
//   "mayotte": "YT",
//   "mexico": "MX",
//   "micronesia, federated states of": "FM",
//   "moldova": "MD",
//   "monaco": "MC",
//   "mongolia": "MN",
//   "montenegro": "ME",
//   "montserrat": "MS",
//   "morocco": "MA",
//   "mozambique": "MZ",
//   "myanmar": "MM",
//   "namibia": "NA",
//   "nauru": "NR",
//   "nepal": "NP",
//   "netherlands": "NL",
//   "netherlands antilles": "AN",
//   "new caledonia": "NC",
//   "new zealand": "NZ",
//   "nicaragua": "NI",
//   "niger": "NE",
//   "nigeria": "NG",
//   "niue": "NU",
//   "norfolk island": "NF",
//   "northern mariana islands": "MP",
//   "norway": "NO",
//   "oman": "OM",
//   "pakistan": "PK",
//   "palau": "PW",
//   "palestinian territory, occupied": "PS",
//   "panama": "PA",
//   "papua new guinea": "PG",
//   "paraguay": "PY",
//   "peru": "PE",
//   "philippines": "PH",
//   "pitcairn": "PN",
//   "poland": "PL",
//   "portugal": "PT",
//   "puerto rico": "PR",
//   "qatar": "QA",
//   "reunion": "RE",
//   "romania": "RO",
//   "russian federation": "RU",
//   "rwanda": "RW",
//   "saint barthelemy": "BL",
//   "saint helena": "SH",
//   "saint kitts and nevis": "KN",
//   "saint lucia": "LC",
//   "saint martin": "MF",
//   "saint pierre and miquelon": "PM",
//   "saint vincent and grenadines": "VC",
//   "samoa": "WS",
//   "san marino": "SM",
//   "sao tome and principe": "ST",
//   "saudi arabia": "SA",
//   "senegal": "SN",
//   "serbia": "RS",
//   "seychelles": "SC",
//   "sierra leone": "SL",
//   "singapore": "SG",
//   "slovakia": "SK",
//   "slovenia": "SI",
//   "solomon islands": "SB",
//   "somalia": "SO",
//   "south africa": "ZA",
//   "south georgia and sandwich isl.": "GS",
//   "spain": "ES",
//   "sri lanka": "LK",
//   "sudan": "SD",
//   "suriname": "SR",
//   "svalbard and jan mayen": "SJ",
//   "swaziland": "SZ",
//   "sweden": "SE",
//   "switzerland": "CH",
//   "syrian arab republic": "SY",
//   "taiwan": "TW",
//   "tajikistan": "TJ",
//   "tanzania": "TZ",
//   "thailand": "TH",
//   "timor-leste": "TL",
//   "togo": "TG",
//   "tokelau": "TK",
//   "tonga": "TO",
//   "trinidad and tobago": "TT",
//   "tunisia": "TN",
//   "turkey": "TR",
//   "turkmenistan": "TM",
//   "turks and caicos islands": "TC",
//   "tuvalu": "TV",
//   "uganda": "UG",
//   "ukraine": "UA",
//   "united arab emirates": "AE",
//   "united kingdom": "GB",
//   "united states": "US",
//   "united states outlying islands": "UM",
//   "uruguay": "UY",
//   "uzbekistan": "UZ",
//   "vanuatu": "VU",
//   "venezuela": "VE",
//   "vietnam": "VN",
//   "virgin islands, british": "VG",
//   "virgin islands, u.s.": "VI",
//   "wallis and futuna": "WF",
//   "western sahara": "EH",
//   "yemen": "YE",
//   "zambia": "ZM",
//   "zimbabwe": "ZW"
// };

// function getCountryCode(countryName) {
//     return countryCodes[countryName.toLowerCase()];
// }

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
