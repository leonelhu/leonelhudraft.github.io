const pupil = document.getElementsByClassName('pupil')

document.onmousemove = (event) => {
	const x = event.clientX * 100 / window.innerWidth + '%'
	const y = event.clientY * 100 / window.innerHeight + '%'
	
	for(let i=0; i<2; i++){
		pupil[i].style.left = x
		pupil[i].style.top = y
	}
}

$(document).ready(function(){
	$('.face').on("mousedown", function(){
		$(this).addClass('click');
	})
	$('.face').on("mouseup", function(){
		$(this).removeClass('click');
	})
})

function myFunction() {
  var glasses = document.getElementById("glasses");
  if (glasses.style.display === "none") {
    glasses.style.display = "block";
  } else {
    glasses.style.display = "none";
  }
}