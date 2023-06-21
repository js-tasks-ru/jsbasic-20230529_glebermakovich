function makeDiagonalRed(table) {
  let cells_1 = table.rows[0].cells[0];
  let cells_2 = table.rows[1].cells[1];
  let cells_3 = table.rows[2].cells[2];
  let cells_4 = table.rows[3].cells[3];
  let cells_5 = table.rows[4].cells[4];
  let arr = [cells_1,cells_2,cells_3,cells_4,cells_5];
  arr.forEach(elem => {
    elem.style.backgroundColor = "red";
  });
}
makeDiagonalRed(table);