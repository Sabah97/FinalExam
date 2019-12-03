$("form").submit(function(e) {
  e.preventDefault();
  var name = $("#name").val(),
    email = $("#email").val(),
    age = $("#age").val();
  var formData = { name, email, age };
  console.log(formData);
  $.ajax({
    method: "POST",
    url: "/home",
    data: formData
  }).done(res => {
    window.location.reload();
  });
});
