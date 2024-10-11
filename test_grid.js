const gridElem = document.querySelector(".grid");
let myValues = [];

fetch("compiled_data.json")
  .then((response) => response.json())
  .then((data) => {
    let innerHTML = "";

    for (let entry in data[0].dimensions) {
      let value = data[0].dimensions[entry].scores["2024"];
      let name = data[0].dimensions[entry].key;
      let name_ALB = data[1].key;
      let name_BIH = data[2].key;
      let name_KOS = data[3].key;
      let name_MNE = data[4].key;
      let name_MKD = data[5].key;
      let name_SRB = data[6].key;

      //console.log(data[1].dimensions[0].subdimensions[entry].score);

      if (name === "INVESTMENT") {
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
        TiteldimensionsHTMLALB =
          "<div class='SubdimTitle' style='height: calc(" +
          values[1] + // value_Dim1_BIH
          " * 10%);'>" +
          values[1] +
          "</div>";

        if (data[1].dimensions[0].subdimensions) {
          data[1].dimensions[0].subdimensions.forEach((subdim, subIndex) => {
            let subdimScore = subdim.score;

            // Initialisiere HTML für Subdimension
            let indicatorsHTMLALB = "";

            // Schleife über die Indikatoren der Subdimension
            subdim.indicators.forEach((indicator, indIndex) => {
              let indicatorScore = indicator.score;
              indicatorsHTMLALB +=
                "<div class='indicator-item' style='height: calc(" +
                indicatorScore +
                " * 5%);'> " +
                indicatorScore +
                "</div>";
            });

            // Füge die Subdimension und ihre Indikatoren zum HTML hinzu
            subdimensionsHTMLALB +=
              "<div class='subdim-item' style='height: calc(" +
              subdimScore +
              " * 0%);'> " +
              subdimScore +
              indicatorsHTMLALB +
              "</div>";
          });
        }

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        // Füge die inneren Elemente für jedes Land hinzu
        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%); background-color: ${colors[i]};'>`;
          innerHTML += `${country} ${values[i]}`; // Optional: Anzeigen von Ländernamen und Werten
          innerHTML += `${TiteldimensionsHTMLALB}${subdimensionsHTMLALB}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "TRADE") {
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
          (country, index) => data[index + 1].dimensions[1].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "FINANCE") {
        let countries = ["ALB", "BIH", "KOS", "MNE", "MKD", "SRB"];
        let colors = [
          "91C682",
          "5CACE0",
          "F76C4D",
          "CA8CE0",
          "FF9549",
          "FDEF7A",
        ]; // Farben für jedes Land
        let values = countries.map(
          (country, index) => data[index + 1].dimensions[2].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          // Jeder Country wird seine entsprechende Farbe zugewiesen
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%); background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "TAX") {
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
          (country, index) => data[index + 1].dimensions[3].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "ENTERPRISE") {
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
          (country, index) => data[index + 1].dimensions[4].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "ANTI_CORRUPTION") {
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
          (country, index) => data[index + 1].dimensions[5].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "EDUCATION") {
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
          (country, index) => data[index + 1].dimensions[6].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "EMPLOYMENT") {
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
          (country, index) => data[index + 1].dimensions[7].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "INNOVATION") {
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
          (country, index) => data[index + 1].dimensions[8].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "DIGITAL") {
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
          (country, index) => data[index + 1].dimensions[9].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "TRANSPORT") {
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
          (country, index) => data[index + 1].dimensions[10].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "ENERGY") {
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
          (country, index) => data[index + 1].dimensions[11].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "ENVIRONMENT") {
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
          (country, index) => data[index + 1].dimensions[12].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "AGRICULTURE") {
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
          (country, index) => data[index + 1].dimensions[13].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else if (name === "TOURISM") {
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
          (country, index) => data[index + 1].dimensions[14].scores["2024"]
        );

        if (entry % 3 === 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }

        innerHTML += `<div class='item ${name}' style='height: calc(${value} * 10%);'>`;
        innerHTML += `<div class='title'>${name}</div>`;

        countries.forEach((country, i) => {
          innerHTML += `<div class='inner-item' style='height: calc(${values[i]} * 20%);background-color: ${colors[i]};'></div>`; //${country} ${values[i]}</div>`;
        });

        innerHTML += "</div>";

        if (entry % 3 === 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      } else {
        // Für alle anderen Dimensionen
        if (entry % 3 == 0) {
          innerHTML += "<div class='subgrid'>";
          console.log("schmeiss das subgrid rein");
        }
        innerHTML +=
          "<div class='item " +
          name +
          "' style='height: calc(" +
          value +
          " * 10%);'>";

        // Nur Titel der Dimension, kein value_Dim1_ALB
        innerHTML += "<div class='title'>" + name + "</div>";

        innerHTML += "</div>";

        if (entry % 3 == 2) {
          innerHTML += "</div>";
          console.log("schliesse das subgrid rein");
        }
      }
    }

    gridElem.innerHTML = innerHTML;
  })

  .catch((error) => {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  });
