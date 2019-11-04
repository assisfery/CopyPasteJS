var CopyPasteJS = {};

// COPY FROM ORIGIN
CopyPasteJS.copys = document.querySelectorAll("[data-copy-origin]");

for(var i = 0; i < CopyPasteJS.copys.length; i++)
{
	CopyPasteJS.copys[i].addEventListener("click", function(){

		var copyOrigin = this.getAttribute("data-copy-origin");
		var copyElement= document.querySelector(copyOrigin);

		CopyPasteJS.data = copyElement.value;

		copyElement.select();
		document.execCommand("copy");


		//alert(copyOrigin);

	});
}

// PASTE TO TARGET
CopyPasteJS.pastes = document.querySelectorAll("[data-paste-target]");

for(var i = 0; i < CopyPasteJS.pastes.length; i++)
{
	CopyPasteJS.pastes[i].addEventListener("click", function(){

		var pasteTarget = this.getAttribute("data-paste-target");
		var pasteElement= document.querySelector(pasteTarget);

		pasteElement.focus();

		var pastSuccessFully = document.execCommand("paste");

		if(!pastSuccessFully)
		{
			pasteElement.value = CopyPasteJS.data;
		}

		//alert(pasteTarget);

	});
}

// CUT FROM ORIGIN
CopyPasteJS.cuts = document.querySelectorAll("[data-cut-origin]");

for(var i = 0; i < CopyPasteJS.cuts.length; i++)
{
	CopyPasteJS.cuts[i].addEventListener("click", function(){

		var cutOrigin = this.getAttribute("data-cut-origin");
		var cutElement= document.querySelector(cutOrigin);

		CopyPasteJS.data = cutElement.value;

		cutElement.select();
		document.execCommand("cut");

		//alert(cutOrigin);

	});
}
