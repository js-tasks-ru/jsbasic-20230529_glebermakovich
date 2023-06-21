function highlight(table) {
  let tr = table.querySelectorAll("tr");
  let td = table.querySelectorAll("td");
  td.forEach(element => {
    if(element.dataset.available = true){
      tr.classList.add("available");
    }else{
      tr.classList.add("unavailable");
    };
  })
}
