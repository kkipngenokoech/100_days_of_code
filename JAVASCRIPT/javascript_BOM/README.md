javascript browser object method is used to interact with the browser.
the browser object is window:
    `window.alert("welcome to multiverse")` but it can be rewritten as `alert("welcome to Multiverse")`
windows has the following childs:
    1. document
    2. history
    3. screen
    4. navigator
    5. location.
## window object
it represents a window in a browser. An object of window is created automatically by the browser.
#### windows object methods
1. [alert()](./src/alert.js)
    displays the alert box containing messages with ok button.
2. [confirm()](./src/confirm.js)
    displays the confirm dialog box, containing message with ok and cancel button
3. [prompt()](./src/prompt.js)
    displays a dialog for user to enter an input.
4. [open()](./src/open.js)
    opens a new window.
5. [timeout()](./src/timeout.js)
    performs an action after specified time(milliseconds) like calling a function, evaluating an expression or e.t.c

#### javascript history object.
it represents an array of urls visited by the user.
by using this object you can load previous, forward or any other particular page.
history has only one property.
1. length - returns the length of the history urls.

history object has three methods:
1. forward() - load the next page
    `history.forward()`
2. back() - loads the previous page
    `history.back()`
3. go() - loads a given page number
    `history.go()`

#### [javascript navigator object.](./src/navigator.js)
it is used for browser detection
this includes: the appName, AppCodeName, UserAgent
this object can be accessed by window.navigator
#### javascript navigator object properties
1. appName : returns the name
2. appVersion : returns the version 
3. appCodeName : returns the code name
4. cookieEnabled : returns true if cookies are enabled else false
5. userAgent : returns the user agent
6. language : returns the language (supported in Netscape and firefox only)
7. userLanguage : returns the user language (supported by IE only)
8. plugins : returns plugins(supported in Netscape  and firefox only)
9. systemLanguage : returns the system language. (supported by IE only)
10. mimeTypes : returns the array of mime types. (supported in Netscape  and firefox only)
11. platform : returns the platform (win32..)
12. online : returns true if browser is online else false.

#### javascript methods
1. javaEnabled() - check if java is enabled
2. taintEnabled() - check if taint is enabled