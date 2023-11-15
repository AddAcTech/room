const socket = io();
socket.on("temp", (data) => {
  console.log(data);
  let temp = document.getElementById("temperature");
  temp.innerHTML = `${data} °C`;
  let icon = getElementById("icon");
  // if (data <= 28) {
  //   icon.innerHTML = "Normal";
  // } else if (data > 28) {
  //   icon.innerHTML = "Soleado";
  // }
});
