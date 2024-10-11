const gridElem = document.querySelector(".grid");
let myValues = [];

fetch("compiled_data.json")
  .then((response) => response.json())
  .then((data) => {
    let innerHTML = "";
    let index = 0;
    for (let entry in data[0].dimensions) {
      data.forEach((country, sub) => {
        console.log(country, sub)
      });
      let value = data[0].dimensions[entry].scores["2024"];
      let name = data[0].dimensions[entry].key;

      //console.log(data[1].dimensions[0].subdimensions[entry].score);

      let countries = ["ALB", "BIH", "KOS", "MNE", "MKD", "SRB"];
      let colors = [
        "91C682",
        "5CACE0",
        "F76C4D",
        "CA8CE0",
        "FF9549",
        "FDEF7A",
      ];

      let values = countries.map(
        (country, index) => data[index + 1].dimensions[0].scores["2024"]
      );

      let subdimensionsHTMLALB = "";
      let TiteldimensionsHTMLALB = "";

      // Generiere Titel-Dimensionen HTML
      // TiteldimensionsHTMLALB =
      //   "<div class='SubdimTitle' style='height: calc(" +
      //   values[1] + // value_Dim1_BIH
      //   " * 10%);'>" +
      //   values[1] +
      //   "</div>";





      if (entry % 3 === 0) {
        innerHTML += "<div class='subgrid'>";
        console.log("schmeiss das subgrid rein");
      }

      innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
      innerHTML += `<div class='title'>${name}</div>`;

      // Füge die inneren Elemente für jedes Land hinzu
      countries.forEach((country, i) => {
        // Initialisiere HTML für Subdimension
        
        subdimensionsHTMLALB = "";
        data[i + 1].dimensions[index].subdimensions.forEach((subdim, subIndex) => {
          let indicatorsHTMLALB = "";
          let subdimScore = subdim.score;

          // Schleife über die Indikatoren der Subdimension
          subdim.indicators.forEach((indicator, indIndex) => {
            let indicatorScore = indicator.score;
            indicatorsHTMLALB +=
              "<div class='indicator-item' style='height: calc(" +
              indicatorScore +
              " * 5%);'></div>";
          });

          // Füge die Subdimension und ihre Indikatoren zum HTML hinzu
          subdimensionsHTMLALB +=
            "<div class='subdim-item' style='height: calc(" +
            subdimScore +
            " * 20%);'> " +
            indicatorsHTMLALB +
            "</div>";
        });
        let country_per_dimension_score = data[i + 1].dimensions[index].scores["2024"];

        innerHTML += `<div class='inner-item' style='height: calc(${country_per_dimension_score} * 20%); background-color: ${colors[i]};'>`;
        innerHTML += `<div class='inner-title'>${country} ${country_per_dimension_score}</div>`; // Optional: Anzeigen von Ländernamen und Werten
        innerHTML += `${TiteldimensionsHTMLALB}<div class='inner-item-sub inner-item-sub-${country}'>${subdimensionsHTMLALB}</div></div>`;
      });

      innerHTML += "</div>";

      if (entry % 3 === 2) {
        innerHTML += "</div>";
        console.log("schliesse das subgrid rein");
      }
      index++;
    }

    gridElem.innerHTML = innerHTML;
  })

  .catch((error) => {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  });