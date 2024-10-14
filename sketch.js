let values = [
  { name: "A", value: 5 },
  { name: "B", value: 3 },
  { name: "C", value: 1.5 },
  { name: "D", value: 1 },
  { name: "E", value: 0.9 },
  { name: "F", value: 1 },
  { name: "G", value: 0.7 },
  { name: "H", value: 0.6 },
  { name: "I", value: 3.6 },
  { name: "J", value: 2.1 },
  { name: "K", value: 1.1 },
  { name: "L", value: 1 },
  { name: "M", value: 4 },
  { name: "N", value: 3 },
  { name: "O", value: 3.5 },
];

let colors;
//asdf

let myData;

function preload() {
  myData = loadJSON("compiled_data.json");
}
// Load the JSON and create an object.
let myValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // WB6 average score laden

  for (let entry in myData[0].dimensions) {
    let value = myData[0].dimensions[entry].scores["2024"];
    myValues.push({ name: myData[0].dimensions[entry].key, value: value });
  }
  console.log(myValues);
  colors = [
    color(66, 135, 245),
    color(240, 98, 146),
    color(123, 237, 159),
    color(255, 159, 67),
    color(84, 160, 255),
    color(253, 203, 110),
    color(165, 94, 234),
    color(250, 130, 49),
    color(75, 123, 236),
    color(255, 234, 167),
    color(63, 81, 181),
    color(0, 184, 148),
    color(253, 121, 168),
    color(45, 52, 54),
    color(224, 86, 253),
  ];

  noLoop();
}

function draw() {
  background(255);

  let root = squarifiedTreemap(myValues, width, height);
  for (let i = 0; i < root.length; i++) {
    let rectData = root[i];
    fill(colors[i % colors.length]);
    stroke(255);
    rect(rectData.x, rectData.y, rectData.w, rectData.h, 20);

    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(
      rectData.name,
      rectData.x + rectData.w / 2,
      rectData.y + rectData.h / 2
    );
  }
}

function squarifiedTreemap(data, width, height) {
  let totalValue = data.reduce((sum, d) => sum + d.value, 0);
  let rectangles = [];

  let x = 0,
    y = 0;
  let remainingWidth = width,
    remainingHeight = height;

  let currentRow = [];
  let rowWidth = 0;

  for (let i = 0; i < data.length; i++) {
    let d = data[i];
    let area = (d.value / totalValue) * (width * height);

    currentRow.push(d);

    // Berechne die aspect ratio der aktuellen Reihe
    let rowArea = currentRow.reduce(
      (sum, item) => sum + (item.value / totalValue) * (width * height),
      0
    );

    let rowHeight = rowArea / remainingWidth;
    let worstAspectRatio = getWorstAspectRatio(
      currentRow,
      rowHeight,
      remainingWidth,
      totalValue
    );

    if (
      i === data.length - 1 ||
      getWorstAspectRatio(
        [...currentRow, data[i + 1]],
        rowHeight,
        remainingWidth,
        totalValue
      ) > worstAspectRatio
    ) {
      // Berechne die Rechtecke für die aktuelle Reihe
      let currentX = x,
        currentY = y;
      for (let j = 0; j < currentRow.length; j++) {
        let rectWidth =
          ((currentRow[j].value / totalValue) * (width * height)) / rowHeight;
        rectangles.push({
          name: currentRow[j].name,
          x: currentX,
          y: currentY,
          w: rectWidth,
          h: rowHeight,
        });
        currentX += rectWidth;
      }

      // Update x, y Positionen
      y += rowHeight;
      x = 0;
      remainingHeight -= rowHeight;
      currentRow = [];
    }
  }

  return rectangles;
}

// Berechne die schlechteste Aspect Ratio (Breite / Höhe) für die aktuelle Reihe
function getWorstAspectRatio(row, rowHeight, remainingWidth, totalValue) {
  let worstAspectRatio = 0;
  for (let i = 0; i < row.length; i++) {
    let rectWidth =
      ((row[i].value / totalValue) * (width * height)) / rowHeight;
    let aspectRatio = max(rectWidth / rowHeight, rowHeight / rectWidth);
    worstAspectRatio = max(worstAspectRatio, aspectRatio);
  }
  return worstAspectRatio;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
