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


		if(copyElement.tagName && (copyElement.tagName.toLowerCase() == "input" || copyElement.tagName.toLowerCase() == "textarea"))
		{
			CopyPasteJS.data = copyElement.value;
			copyElement.select();
		}
		else
		{
			CopyPasteJS.data = copyElement.innerText;
			CopyPasteJS.selectText(copyOrigin);
		}		

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

	if(element.tagName && (element.tagName.toLowerCase() == "input" || element.tagName.toLowerCase() == "textarea"))
	{
		element.select();
		CopyPasteJS.data = element.value;
	}
	else
	{
		CopyPasteJS.data = element.innerText;
		CopyPasteJS.selectText(elem);
	}
	
	document.execCommand('copy');

	if(callback)
	{
		if(typeof callback == "string")
			eval(callback);
		else
			callback();
	}
}

// COPY FROM ELEMENT
CopyPasteJS.cutFrom = function(elem, callback)
{
	var element = document.querySelector(elem);

	if(element.tagName && (element.tagName.toLowerCase() == "input" || element.tagName.toLowerCase() == "textarea"))
	{
		element.select();
		CopyPasteJS.data = element.value;
	}
	
	document.execCommand('cut');

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

// SELECT TEXT

CopyPasteJS.selectText = function(element)
{
	var text = document.querySelector(element),
		range, selection;

	if (document.body.createTextRange)
	{
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select()
	}

	else if (window.getSelection)
	{
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range)
	}

}

// changed to work as node module
if(typeof window !== 'undefined')
{
	window.addEventListener('load', function() {
	    CopyPasteJS.init();
	});
}
