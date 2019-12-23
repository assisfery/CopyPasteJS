var CopyPasteJS = {};

CopyPasteJS.init = function()
{

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

		var copyCallback = this.getAttribute("data-copy-callback");
		if(copyCallback)
			eval(copyCallback);
		//alert(copyOrigin);

	});
}

CopyPasteJS.copyTexts = document.querySelectorAll("[data-copy-text]");

for(var i = 0; i < CopyPasteJS.copyTexts.length; i++)
{
	CopyPasteJS.copyTexts[i].addEventListener("click", function(){

		var copyTxt = this.getAttribute("data-copy-text");
		var copyCallback = this.getAttribute("data-copy-callback");

		CopyPasteJS.copyText(copyTxt, copyCallback);

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

		var pasteCallback = this.getAttribute("data-paste-callback");
		if(pasteCallback)
			eval(pasteCallback);

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

}

// COPY TEXT
CopyPasteJS.copyText = function(txt, callback)
{
	CopyPasteJS.data = txt;

	var element = document.createElement('input');
	element.value = txt;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);

	if(callback)
	{
		if(typeof callback == "string")
			eval(callback);
		else
			callback();
	}
}

// COPY FROM ELEMENT
CopyPasteJS.copyFrom = function(elem, callback)
{
	var element = document.querySelector(elem);
	element.select();
	CopyPasteJS.data = element.value;
	document.execCommand('copy');

	if(callback)
	{
		if(typeof callback == "string")
			eval(callback);
		else
			callback();
	}
}

// PASTE TO ELEMENT
CopyPasteJS.pasteTo = function(elem, callback)
{
	var pasteElement= document.querySelector(elem);
	pasteElement.focus();

	var pastSuccessFully = document.execCommand("paste");

	if(!pastSuccessFully)
	{
		pasteElement.value = CopyPasteJS.data;
	}

	if(callback)
	{
		if(typeof callback == "string")
			eval(callback);
		else
			callback();
	}
}

window.addEventListener('load', function() {
    CopyPasteJS.init();
});