
##  CopyPasteJS

This a small JS library to execute clipboard functions in a fast and easy way.

See the demo here: [https://assisfery.github.io/CopyPasteJS/index.html](https://assisfery.github.io/CopyPasteJS/index.html)


### Get Start
Just import the  **src/CopyPasteJS.js**  file in end of your document.
```
<script src="src/CopyPasteJS.js"></script>
```

### Copy Text - From Input Element
To copy data from a input element just add  **data-copy-origin="#element"**  attribute to the button.
```
<button class="btn btn-success" data-copy-origin="#txtCopy">Copy</button>
```

### Copy Text - From Nowhere
To copy text to clipboard  **data-copy-text="text"**  attribute to the button.
```
<button class="btn btn-success" data-copy-text="Some text">Copy</button>
```

### Paste Text
To paste data to a input element just add  **data-paste-target="#element"**  attribute to the button.
```
<button class="btn btn-success" data-paste-target="#txtPaste">Paste</button>
```

### Cut Text
To cut data from a input element just add  **data-cut-origin="#element"**  attribute to the button.
```
<button class="btn btn-success" data-cut-origin="#txtCut">Cut</button>
```

### Copy and Paste Text
To copy and paste data from a input element to another just add  **data-copy-origin="#element"**  and  **data-paste-target="#element"**  attributes to the button.
```
<button class="btn btn-success"
data-copy-origin="#txtCopy2"
data-paste-target="#txtPaste2">Copy and Paste</button>
```

### Copy Callback function
After data is been copied if you want to execute a function just add  **data-copy-callback="jscode()"**  attribute to the button.
```
<button class="btn btn-success" data-copy-origin="#txtCopy3" data-copy-callback="alert('copied')">Copy and Callback</button>
```

### Paste Callback function
After data is been pasted if you want to execute a function just add  **data-paste-callback="jscode()"**  attribute to the button.
```
<button class="btn btn-success" data-paste-target="#txtPaste3" data-paste-callback="alert('pasted')">Paste and Callback</button>
```