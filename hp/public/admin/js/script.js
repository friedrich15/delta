

function addItem() {
  var name = $("#new-item-name").val();
  $.ajax({
    "type": "POST",
    "url" : "/admin/add_item",
    "data": {"name" : name}
  }).done(function(id){
    // showNewItem(id)
  });
}

function showItem(item) {
  var id = item._id;
  var name = item.name;
  var titleEN = item.titleEN;
  var titleDE = item.titleDE;
  var textEN = item.contentTextEN;
  var textDE = item.contentTextDE;
  var visible = item.visible;

  $("#item-name").attr("name", id);
  $("#item-name").val(name);
  $("#item-title-en").val(titleEN);
  $("#item-title-de").val(titleDE);
  $("#item-text-en").val(textEN);
  $("#item-text-de").val(textDE);
  $("#check-visible").prop("checked", visible);
}

function getItem(id) {
  $.ajax({
    "type": "POST",
    "url" : "/admin/show_item",
    "data": {"id" : id}
  }).done(function(item){
    showItem(item);
  });
}

function saveItem() {
  var visible = $("#check-visible").is(":checked");
  var id = $("#item-name").attr("name");
  var name = $("#item-name").val();
  var titleEN = $("#item-title-en").val();
  var titleDE = $("#item-title-de").val();
  var textEN = $("#item-text-en").val();
  var textDE = $("#item-text-de").val();

  var data = {
    "id": id,
    "name": name,
    "titleEN": titleEN,
    "titleDE": titleDE,
    "textEN": textEN,
    "textDE": textDE,
    "visible": visible
  }

  $.ajax({
    "type": "POST",
    "url": "/admin/save_item",
    "data": data
  }).done(function(){
    console.log(name + " saved!")
  });
}
