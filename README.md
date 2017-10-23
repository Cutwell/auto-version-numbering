# Version

 - Automatic version numbering for Github project websites.

### Setup
1. Download Version from ```/rel/version.min.js``` and link the script into the ```<head>``` of your HTML file.
 ```html
 <script src="path/to/version.min.js"></script>
 ```

2. Insert a text element into the desired location (where you want the version number to appear), containing the tags ```class='version' name='PROJECT_NAME'``` (replacing PROJECT_NAME with the correct name for your repository).
```html
<p class='version' name='PROJECT_NAME'></p>
```

3. Version requires jQuery to work, so make sure the latest version is also linked into the ```<head>``` of your HTML file.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

4. If multiple elements using the ```.version``` class are found, Version will iterate over all of them.

### Quickstart
 - Download version.min.js
 - Copy the following into ```<head>``` of your HTML file, adjusting the version.min.js path as necessary.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path/to/version.min.js"></script>
```
 - Copy the following into the ```<body>``` of the same HTML file, replacing PROJECT_NAME with the name of the project repository.
```html
<p class='version' name='PROJECT_NAME'></p>
```
