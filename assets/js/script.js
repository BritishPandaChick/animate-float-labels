//breakdown the labels into single character spans
$(".flp label").each(function(){
  var sop = '<span class="ch">'; //span opening
  var scl = '</span>'; //span closing
  //split the label into single letters and inject span tags around them
  $(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
});
