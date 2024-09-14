function submit(elemet){
	let input=elemet.previousElementSibling;
	input=input.value;
	let div=document.querySelector('.izlaz');
	
	div.innerHTML+=`<div class="wrapper">
			<p>${input}</p>
			<button onclick="none(this)">Ponisti</button>
		</div>`
}

function none(elemet){
	let div=elemet.closest('div');
	
	div.remove();

}
