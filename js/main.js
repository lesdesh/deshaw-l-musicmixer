(() => {

	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),	
		dropZones = document.querySelectorAll(".drop-zone");
		

	const puzzlePaths = ["topLeft","topRight", "bottomLeft", "bottomRight"];

 
	
	function changeImgSet() {
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`

		puzzlePaths.forEach((img, index) => {
		   puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
		   console.log(Object.values(puzzlePaths));
		   
		});

	}

	
	function dragStarted(event) {
		console.log("started dragging");
		event.dataTransfer.setData("currentItem", event.target.id)
	}
	
	function allowDragOver(event) {
		event.preventDefault();
		console.log("dragged over");
	}
	function reset(event) {
		event.ondragend();
		let reset = event.dataTransfer.getData("item")
		this.removeChild(document.querySelector(`#${reset}`));
		
	}

	

	function allowDrop(event) {
		event.preventDefault();
		console.log("Dropped");

		let droppedEl = event.dataTransfer.getData("currentItem");
		this.appendChild(document.querySelector(`#${droppedEl}`));
		console.log(droppedEl);
	}
	
	

	dropZones.forEach(zone => zone.addEventListener("dropped", reset));

	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeImgSet));


	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	
        (() => {
          let audioEl = document.querySelector("audio"),
              trackimg = document.querySelectorAll(".puzzle-image");

              function loadTrack() {
                  let currentTrack = `audio/${this.dataset.trackref}.mp3`;

                  audioEl.src = currentTrack;
                  audioEl.load();
              }

          trackimg.forEach(thumb => thumb.addEventListener("dragend", loadTrack))

          

        function removePlayingClass(event) {
            if (event.propertyName === 'transform')  {
                this.classList.remove('playing');
            }
        }


       






        })()
	});
})();
