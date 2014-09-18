Original use for this offers/default.aspx page was using CDS placeholders and TMS.
TMS no longer has the same abilities of using conditional and using placeholders inside TMS.
The following two folders are no longer being used by offers/default.aspx page.
 - offers/default/campaign
 - offers/default/segments

 Instead of using CDS placeholders, the reusable segments will be used with the build process and swig. Each version of the page/campaign will need to be rendered with swig/gulp and will be its own CDS/TMS document.