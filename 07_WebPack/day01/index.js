import $ from "jquery";  // 引入JS资源
import "./index.less";   // 引入less资源

$("#title").click(() => {
  $("body").css("backgroundCOlor", "hotpink");
});