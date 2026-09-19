/* =========================================
   ONNURI KITCHEN — SITE-WIDE SEARCH
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const headerSearch = document.querySelector(".header-search");
  const searchToggle = document.querySelector(".search-toggle");
  const searchClose = document.querySelector(".search-close");
  const searchInput = document.getElementById("siteSearch");
  const searchResults = document.getElementById("searchResults");

  /* Stop if page has no search bar */
  if (
    !headerSearch ||
    !searchToggle ||
    !searchClose ||
    !searchInput ||
    !searchResults
  ) {
    return;
  }


  /* =========================================
     SEARCH DATABASE
  ========================================= */

  const searchData = [

    /* =========================================
       PRODUCT CATEGORIES
    ========================================= */

    {
      name: "Gas Ranges",
      keywords: "gas range commercial range burner stove cooking equipment",
      url: "gas-ranges.html"
    },

    {
      name: "Griddles & Grillers",
      keywords: "griddle griller grill barbecue flat top commercial cooking",
      url: "griddles-grillers.html"
    },

    {
      name: "Stainless Equipment",
      keywords: "stainless equipment sink table rack shelves preparation",
      url: "stainless.html"
    },

    {
      name: "Other Products",
      keywords: "other equipment commercial kitchen products",
      url: "other-products.html"
    },


    /* =========================================
       ST SERIES
    ========================================= */

    {
      name: "ST600-001",
      keywords: "st600 001 standard standing gas range 600 single burner",
      url: "st600-001.html"
    },

    {
      name: "ST900-020",
      keywords: "st900 020 standard standing gas range 900 two burner",
      url: "st900-020.html"
    },

    {
      name: "ST900-120",
      keywords: "st900 120 standard standing gas range 900 three burner",
      url: "st900-120.html"
    },

    {
      name: "ST1200-030",
      keywords: "st1200 030 standard standing gas range 1200 three burner",
      url: "st1200-030.html"
    },

    {
      name: "ST1200-220",
      keywords: "st1200 220 standard standing gas range 1200 four burner",
      url: "st1200-220.html"
    },

    {
      name: "ST1500-040",
      keywords: "st1500 040 standard standing gas range 1500 four burner",
      url: "st1500-040.html"
    },

    {
      name: "ST1500-230",
      keywords: "st1500 230 standard standing gas range 1500 five burner",
      url: "st1500-230.html"
    },

    {
      name: "ST1800-050",
      keywords: "st1800 050 standard standing gas range 1800 five burner",
      url: "st1800-050.html"
    },


    /* =========================================
       SK SERIES
    ========================================= */

    {
      name: "SK600-400",
      keywords: "sk600 400 multi burner gas range 600 four burner",
      url: "sk600-400.html"
    },

    {
      name: "SK600-210",
      keywords: "sk600 210 multi burner gas range 600 three burner",
      url: "sk600-210.html"
    },

    {
      name: "SK900-600",
      keywords: "sk900 600 multi burner gas range 900 six burner",
      url: "sk900-600.html"
    },

    {
      name: "SK900-410",
      keywords: "sk900 410 multi burner gas range 900 five burner",
      url: "sk900-410.html"
    },

    {
      name: "SK1200-900",
      keywords: "sk1200 900 multi burner gas range 1200 nine burner",
      url: "sk1200-900.html"
    },

    {
      name: "SK1200-610",
      keywords: "sk1200 610 multi burner gas range 1200 seven burner",
      url: "sk1200-610.html"
    },

    {
      name: "SK1200-420",
      keywords: "sk1200 420 multi burner gas range 1200 six burner",
      url: "sk1200-420.html"
    },

    {
      name: "SK1500-120",
      keywords: "sk1500 120 multi burner gas range 1500 twelve burner",
      url: "sk1500-120.html"
    },

    {
      name: "SK1500-910",
      keywords: "sk1500 910 multi burner gas range 1500 ten burner",
      url: "sk1500-910.html"
    },

    {
      name: "SK1500-620",
      keywords: "sk1500 620 multi burner gas range 1500 eight burner",
      url: "sk1500-620.html"
    },

    {
      name: "SK1800-150",
      keywords: "sk1800 150 multi burner gas range 1800 fifteen burner",
      url: "sk1800-150.html"
    },

    {
      name: "SK1800-102",
      keywords: "sk1800 102 multi burner gas range 1800 twelve burner",
      url: "sk1800-102.html"
    },

    {
      name: "SK1800-121",
      keywords: "sk1800 121 multi burner gas range 1800 thirteen burner",
      url: "sk1800-121.html"
    },


    /* =========================================
       LOW RANGE
    ========================================= */

    {
      name: "SL600-001",
      keywords: "sl600 001 low range 600 triple ring burner gas range",
      url: "sl600-001.html"
    },

    {
      name: "SHL-601",
      keywords: "shl 601 smart low height low range 600 single burner gas range",
      url: "shl-601.html"
    },

    {
      name: "SHL-1202",
      keywords: "shl 1202 smart low height low range 1200 two burner gas range",
      url: "shl-1202.html"
    },

    {
      name: "SL1200-002",
      keywords: "sl1200 002 low range 1200 two triple ring burner gas range",
      url: "sl1200-002.html"
    },


    /* =========================================
       AUTO-IGNITION GAS RANGE
    ========================================= */

    {
      name: "SA600-010",
      keywords: "sa600 010 auto ignition low range 600 burner gas range",
      url: "sa600-010.html"
    },

    {
      name: "SA700-001",
      keywords: "sa700 001 auto ignition low range 700 triple burner gas range",
      url: "sa700-001.html"
    },

    {
      name: "SA1200-002",
      keywords: "sa1200 002 auto ignition low range 1200 burner gas range",
      url: "sa1200-002.html"
    },

    {
      name: "SA900-020",
      keywords: "sa900 020 auto ignition standing gas range 900",
      url: "sa900-020.html"
    },

    {
      name: "SA900-120",
      keywords: "sa900 120 auto ignition gas range 900 three burner",
      url: "sa900-120.html"
    },

    {
      name: "SA900-410",
      keywords: "sa900 410 auto ignition gas range 900 five burner",
      url: "sa900-410.html"
    },

    {
      name: "SA900-600",
      keywords: "sa900 600 auto ignition gas range 900 six burner",
      url: "sa900-600.html"
    },

    {
      name: "SA1200-030",
      keywords: "sa1200 030 auto ignition standing gas range 1200 three burner",
      url: "sa1200-030.html"
    },

    {
      name: "SA1200-220",
      keywords: "sa1200 220 auto ignition gas range 1200 four burner",
      url: "sa1200-220.html"
    },

    {
      name: "SA1200-420",
      keywords: "sa1200 420 auto ignition gas range 1200 six burner",
      url: "sa1200-420.html"
    },

    {
      name: "SA1200-610",
      keywords: "sa1200 610 auto ignition gas range 1200 seven burner",
      url: "sa1200-610.html"
    },

    {
      name: "SA1200-800",
      keywords: "sa1200 800 auto ignition gas range 1200 eight burner",
      url: "sa1200-800.html"
    },

    {
      name: "SA1500-040",
      keywords: "sa1500 040 auto ignition standing gas range 1500 four burner",
      url: "sa1500-040.html"
    },

    {
      name: "SA1500-100",
      keywords: "sa1500 100 auto ignition gas range 1500 ten burner",
      url: "sa1500-100.html"
    },

    {
      name: "SA1500-230",
      keywords: "sa1500 230 auto ignition gas range 1500 five burner",
      url: "sa1500-230.html"
    },

    {
      name: "SA1500-620",
      keywords: "sa1500 620 auto ignition gas range 1500 eight burner",
      url: "sa1500-620.html"
    },

    {
      name: "SA1500-810",
      keywords: "sa1500 810 auto ignition gas range 1500 nine burner",
      url: "sa1500-810.html"
    },

    {
      name: "SA1800-050",
      keywords: "sa1800 050 auto ignition standing gas range 1800 five burner",
      url: "sa1800-050.html"
    },

    {
      name: "SA1800-102",
      keywords: "sa1800 102 auto ignition gas range 1800 twelve burner",
      url: "sa1800-102.html"
    },

    {
      name: "SA1800-121",
      keywords: "sa1800 121 auto ignition gas range 1800 thirteen burner",
      url: "sa1800-121.html"
    },

    {
      name: "SA1800-140",
      keywords: "sa1800 140 auto ignition gas range 1800 fourteen burner",
      url: "sa1800-140.html"
    },


    /* =========================================
       SMART RANGE
    ========================================= */

    {
      name: "SHC-601",
      keywords: "shc 601 smart chinese wok gas range 600 burner",
      url: "shc-601.html"
    },

    {
      name: "SHC-1202",
      keywords: "shc 1202 smart chinese wok gas range 1200 two burner",
      url: "shc-1202.html"
    },

    {
      name: "SHB-611-W",
      keywords: "shb 611 w smart direct flame wok gas range 600",
      url: "shb-611-w.html"
    },

    {
      name: "SHB-1222-W",
      keywords: "shb 1222 w smart direct flame wok gas range 1200",
      url: "shb-1222-w.html"
    },

    {
      name: "SHB-611-O",
      keywords: "shb 611 o smart direct flame gas range 600",
      url: "shb-611-o.html"
    },

    {
      name: "SHB-1222-O",
      keywords: "shb 1222 o smart direct flame gas range 1200",
      url: "shb-1222-o.html"
    },

    {
      name: "SHF-601",
      keywords: "shf 601 smart stir fry gas range 600 burner",
      url: "shf-601.html"
    },

    {
      name: "SHF-1202",
      keywords: "shf 1202 smart stir fry gas range 1200 two burner",
      url: "shf-1202.html"
    },

    {
      name: "SHL-601-O",
      keywords: "shl 601 o smart standing gas range 600",
      url: "shl-601-o.html"
    },

    {
      name: "SHL-1202-O",
      keywords: "shl 1202 o smart standing gas range 1200",
      url: "shl-1202-o.html"
    },

    {
      name: "SHL-601-R",
      keywords: "shl 601 r smart standing gas range 600",
      url: "shl-601-r.html"
    },

    {
      name: "SHL-1202-R",
      keywords: "shl 1202 r smart standing gas range 1200",
      url: "shl-1202-r.html"
    },


    /* =========================================
       STANDARD GRIDDLES
    ========================================= */

    {
      name: "SGD600-002",
      keywords: "sgd600 002 standard griddle 600 commercial flat top",
      url: "sgd600-002.html"
    },

    {
      name: "SGD900-003",
      keywords: "sgd900 003 standard griddle 900 commercial flat top",
      url: "sgd900-003.html"
    },


    /* =========================================
       STANDARD GRILLERS
    ========================================= */

    {
      name: "SG600-003",
      keywords: "sg600 003 standard barbecue griller grill 600 commercial",
      url: "sg600-003.html"
    },

    {
      name: "SG900-005",
      keywords: "sg900 005 standard barbecue griller grill 900 commercial",
      url: "sg900-005.html"
    },


    /* =========================================
       AUTO-IGNITION GRIDDLE
    ========================================= */

    {
      name: "SAG900-020",
      keywords: "sag900 020 kitchen blue auto ignition griddle 900 commercial",
      url: "sag900-020.html"
    }

  ];


  /* =========================================
     SETTINGS
  ========================================= */

  const maxResults = 4;


  /* =========================================
     OPEN SEARCH
  ========================================= */

  searchToggle.addEventListener("click", function () {

    headerSearch.classList.add("active");

    searchInput.focus();

  });


  /* =========================================
     CLOSE SEARCH
  ========================================= */

  searchClose.addEventListener("click", function () {

    headerSearch.classList.remove("active");

    searchInput.value = "";

    searchResults.innerHTML = "";

  });


  /* =========================================
     CREATE RESULT
  ========================================= */

  function createSearchResult(item) {

    const result = document.createElement("a");

    result.href = item.url;

    result.className = "search-result-item";

    result.textContent = item.name;

    return result;

  }


  /* =========================================
     DISPLAY LIMITED RESULTS
  ========================================= */

  function displayLimitedResults(matches) {

    searchResults.innerHTML = "";

    const visibleMatches =
      matches.slice(0, maxResults);


    visibleMatches.forEach(function (item) {

      searchResults.appendChild(
        createSearchResult(item)
      );

    });


    /* VIEW ALL BUTTON */

    if(matches.length > maxResults) {

      const viewAll =
        document.createElement("button");

      viewAll.type = "button";

      viewAll.className =
        "search-view-all";

      viewAll.textContent =
        `VIEW ALL ${matches.length} RESULTS`;


      viewAll.addEventListener("click", function () {

        displayAllResults(matches);

      });


      searchResults.appendChild(viewAll);

    }

  }


  /* =========================================
     DISPLAY ALL RESULTS
  ========================================= */

  function displayAllResults(matches) {

    searchResults.innerHTML = "";


    matches.forEach(function (item) {

      searchResults.appendChild(
        createSearchResult(item)
      );

    });


    /* SHOW LESS BUTTON */

    if(matches.length > maxResults) {

      const showLess =
        document.createElement("button");

      showLess.type = "button";

      showLess.className =
        "search-view-all";

      showLess.textContent =
        "SHOW LESS";


      showLess.addEventListener("click", function () {

        displayLimitedResults(matches);

        searchResults.scrollTop = 0;

      });


      searchResults.appendChild(showLess);

    }

  }


  /* =========================================
     SEARCH PRODUCTS
  ========================================= */

  searchInput.addEventListener("input", function () {

    const query =
      searchInput.value
        .toLowerCase()
        .trim();


    searchResults.innerHTML = "";


    /* REQUIRE AT LEAST 2 CHARACTERS */

    if(query.length < 2) {

      return;

    }


    const matches =
      searchData.filter(function (item) {

        const searchableText =
          item.name.toLowerCase()
          + " "
          + item.keywords.toLowerCase();


        return searchableText.includes(query);

      });


    /* NO RESULTS */

    if(matches.length === 0) {

      searchResults.innerHTML = `
        <div class="search-no-results">
          No products found
        </div>
      `;

      return;

    }


    /* SHOW FIRST 4 */

    displayLimitedResults(matches);

  });


  /* =========================================
     ESC KEY CLOSE
  ========================================= */

  document.addEventListener("keydown", function (event) {

    if(event.key === "Escape") {

      headerSearch.classList.remove("active");

      searchInput.value = "";

      searchResults.innerHTML = "";

    }

  });

});
