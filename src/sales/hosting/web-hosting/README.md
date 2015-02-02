This folder should be used for web-hosting page specific assets only.  This would generally include only images and page-specific jade modules.

Rather than put a page-specific .css (or .less) or .js (or coffeescript) file here, consider embedding it directly in the page if it's not too long.  If embedding it in the page truly makes the code less readable, use Jade includes and filters, like this:

(for CSS):
```
body style
  include ./web-hosting/web-hosting.css
```

(for Less):
```
body style
  include:less ./web-hosting/web-hosting.css
```

