$("form").submit(function(e) {
  e.preventDefault();
  var name = $("#name").val(),
    email = $("#email").val(),
    age = $("#age").val();

  var param = { name, email, age };
  param = JSON.stringify(param);

  let href = "/form/" + param;

  // $(this)[0].reset();

  window.location.href = href;
});
