let gameBoard = document.querySelector(".drop-board"),
	dropZones = document.querySelectorAll(".drop-zone");

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);

        