function renderPlanTile(locals) {
var jade_debug = [{ lineno: 1, filename: "plan-tile.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (buttonText, description, features, flagText, price, subTitle, tcode, title, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 1, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "plan-tile.jade" });
title = title || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "plan-tile.jade" });
subTitle = subTitle || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "plan-tile.jade" });
description = description || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "plan-tile.jade" });
features = features || [];
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "plan-tile.jade" });
price = price || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "plan-tile.jade" });
flagText = flagText || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "plan-tile.jade" });
tcode = tcode || "";
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "plan-tile.jade" });
buttonText = buttonText || "Add to Cart";
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "plan-tile.jade" });
buf.push("\n<atlantis:webstash type=\"css\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 15, filename: "plan-tile.jade" });
buf.push("\n  <style>");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("\n    ");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push(".pro-plans { margin-top: 0; }");
jade_debug.shift();
buf.push("\n    ");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </style>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("\n</atlantis:webstash>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "plan-tile.jade" });
buf.push("\n<div class=\"pro-plan-wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 18, filename: "plan-tile.jade" });
if ( (flagText))
{
jade_debug.unshift({ lineno: 19, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 19, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-flag\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = flagText) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 22, filename: "plan-tile.jade" });
if ( (title))
{
jade_debug.unshift({ lineno: 23, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 23, filename: "plan-tile.jade" });
buf.push("\n  <h2 class=\"plan-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = title) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 26, filename: "plan-tile.jade" });
if ( (subTitle))
{
jade_debug.unshift({ lineno: 27, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 27, filename: "plan-tile.jade" });
buf.push("\n  <h5 class=\"plan-subtitle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = subTitle) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h5>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 30, filename: "plan-tile.jade" });
if ( (description))
{
jade_debug.unshift({ lineno: 31, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 31, filename: "plan-tile.jade" });
buf.push("\n  <p class=\"plan-text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = description) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 34, filename: "plan-tile.jade" });
if ( (price))
{
jade_debug.unshift({ lineno: 35, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 35, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-price-wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("<strong>Starting at</strong><br><span class=\"plan-price text-warning\">" + (((jade_interp = price) == null ? '' : jade_interp)) + "</span><span class=\"plan-duration text-warning\">/mo</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "plan-tile.jade" });
buf.push("");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 44, filename: "plan-tile.jade" });
if ( (buttonText))
{
jade_debug.unshift({ lineno: 45, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 45, filename: "plan-tile.jade" });
buf.push("\n  <button" + (jade.attr("data-tcode", "" + (tcode) + "", true, false)) + " data-index=\"1\" class=\"btn btn-warning btn-plan btn-lg btn-block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = buttonText) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 47, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 49, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "plan-tile.jade" });
// iterate features
;(function(){
  var $$obj = features;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var feature = $$obj[index];

jade_debug.unshift({ lineno: 49, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 51, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "plan-tile.jade" });
if ( (index < 3))
{
jade_debug.unshift({ lineno: 52, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 52, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push(" ");
jade_debug.shift();
jade_debug.unshift({ lineno: 53, filename: "plan-tile.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = feature) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 55, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 55, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = feature) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var feature = $$obj[index];

jade_debug.unshift({ lineno: 49, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 51, filename: "plan-tile.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "plan-tile.jade" });
if ( (index < 3))
{
jade_debug.unshift({ lineno: 52, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 52, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push(" ");
jade_debug.shift();
jade_debug.unshift({ lineno: 53, filename: "plan-tile.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = feature) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 55, filename: "plan-tile.jade" });
jade_debug.unshift({ lineno: 55, filename: "plan-tile.jade" });
buf.push("\n  <div class=\"plan-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = feature) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"buttonText" in locals_for_with?locals_for_with.buttonText:typeof buttonText!=="undefined"?buttonText:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"features" in locals_for_with?locals_for_with.features:typeof features!=="undefined"?features:undefined,"flagText" in locals_for_with?locals_for_with.flagText:typeof flagText!=="undefined"?flagText:undefined,"price" in locals_for_with?locals_for_with.price:typeof price!=="undefined"?price:undefined,"subTitle" in locals_for_with?locals_for_with.subTitle:typeof subTitle!=="undefined"?subTitle:undefined,"tcode" in locals_for_with?locals_for_with.tcode:typeof tcode!=="undefined"?tcode:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//- here are the fields that can be set on inheriting classes\r\n- title = title || \"\";\r\n- subTitle = subTitle || \"\";\r\n- description = description || \"\";\r\n- features = features || [];\r\n- price = price || \"\";\r\n- flagText = flagText || \"\";\r\n- tcode = tcode || \"\";\r\n- buttonText = buttonText || \"Add to Cart\";\r\n\r\nblock vars\r\n\r\natlantis:webstash(type=\"css\")\r\n  block styles\r\n    style.\r\n      .pro-plans { margin-top: 0; }\r\n\r\n.pro-plan-wrap\r\n  block flag\r\n    if (flagText)\r\n      div.plan-flag !{flagText}\r\n\r\n  block title\r\n    if (title)\r\n      h2.plan-title !{title}\r\n\r\n  block subTitle\r\n    if (subTitle)\r\n      h5.plan-subtitle !{subTitle}\r\n\r\n  block description\r\n    if (description)\r\n      p.plan-text !{description}\r\n\r\n  block price\r\n    if (price)\r\n      .plan-price-wrap <strong>Starting at</strong><br><span class=\"plan-price text-warning\">!{price}</span><span class=\"plan-duration text-warning\">/mo</span>\r\n\r\n  //- block disclaimers\r\n  //-   if (plan.planDisclaimers)\r\n  //-    .plan-disclaimers !{plan.planDisclaimers}\r\n\r\n  block selectList\r\n\r\n  block button\r\n    if (buttonText)\r\n      button.btn.btn-warning.btn-plan.btn-lg.btn-block(data-tcode=\"#{tcode}\" data-index=\"1\") !{buttonText}\r\n\r\n  block features\r\n    //- Feature list\r\n    each feature, index in features\r\n      //- Text at the bottom that can have multiple \"rows\"\r\n      if (index < 3)\r\n        .plan-item \r\n          strong !{feature}\r\n      else\r\n        .plan-item !{feature}\r\n");
}
}