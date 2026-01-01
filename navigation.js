function showRoute() {
  const routeDiv = document.getElementById("route");

  routeDiv.innerHTML = `
    <h3>Navigation Steps</h3>
    <ol>
      <li>Start from Main Gate</li>
      <img src="images/main_gate.jpg" width="300">

      <li>Walk straight to Academic Block</li>
      <img src="images/academic_block.jpg" width="300">

      <li>Proceed through corridor</li>
      <img src="images/corridor.jpg" width="300">

      <li>Reach destination</li>
      <img src="images/lab.jpg" width="300">
    </ol>
  `;
}
