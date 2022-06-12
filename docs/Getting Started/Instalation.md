# Getting Started
GADA SDK usage Documentation. **Documentation**.

Get started with **GADA**, login and obtain your personal `API keys` from the Gada secured [dashboard](https://dashboard.gadalabs.com). e.g :

### API Keys
```json
Private Key: 216KD5BFUYM4GL6P
Public Key: 0MF8BE84EFDUISHG
```
### Base URL
```
https://api.gadalabs.com
```

### Making a request
<!--
- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies. -->

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

```
