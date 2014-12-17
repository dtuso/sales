Two types of artifacts will be added under this 'src' folder:
* Templates - layout and module templates that essentially act as "abstract" classes from which specific pages/modules will be instantiated.  Functionally equivalent to combining the current 'layouts' and 'modules' folders.  See the 'templates' folder for examples.
* Sales - logical organization of pages comprising the Sales site, plus their dependencies (e.g. images, CSS, JS, documentation, tests).  These will generally be instances of pages that derive from page templates.  A 'shared' subfolder exists to house any instances that can/should be shared across pages.

