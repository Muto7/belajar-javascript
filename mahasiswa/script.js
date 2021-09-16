function nilai() {
  var mhs = eval(document.getElementById("mahasiswa").value);
  //   var nilai = eval(document.getElementById("nilai").value);

  if (mhs >= "90" && mhs <= "100") {
    alert("A");
  } else if (mhs >= "80" && mhs <= "90") {
    alert("B");
  } else if (mhs >= "70" && mhs <= "80") {
    alert("C");
  } else if (mhs >= "60" && mhs <= "70") {
    alert("D");
  } else {
    alert("tidak ada");
  }
}
