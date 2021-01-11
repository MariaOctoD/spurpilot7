function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ck9TNH7XoQ":
        Script1();
        break;
      case "5VsMCCpJVE1":
        Script2();
        break;
      case "6Jf5w2higLF":
        Script3();
        break;
      case "6Hp4WlBdcsS":
        Script4();
        break;
      case "6HJtufClrNq":
        Script5();
        break;
      case "65FtP0WGLLv":
        Script6();
        break;
      case "5dB0uT1e4P8":
        Script7();
        break;
      case "5nob6PjgM97":
        Script8();
        break;
      case "6qqBwcDF5qv":
        Script9();
        break;
      case "5b1CM4oMJuD":
        Script10();
        break;
      case "6oTB334A0Qz":
        Script11();
        break;
      case "6HtdFAaEcNN":
        Script12();
        break;
      case "6BEikJ9081P":
        Script13();
        break;
      case "6qV2E2M5Wkl":
        Script14();
        break;
      case "6IUv3vjwJBP":
        Script15();
        break;
      case "60a7t076ZDJ":
        Script16();
        break;
      case "6aobdIRQzLR":
        Script17();
        break;
      case "5bvZBGT4pEZ":
        Script18();
        break;
      case "6pya5d3A28b":
        Script19();
        break;
      case "6emfpyQjg2B":
        Script20();
        break;
      case "6I8XvBbCVIs":
        Script21();
        break;
      case "5iN9RcqHKex":
        Script22();
        break;
      case "6VeAoqsdh58":
        Script23();
        break;
      case "6LmTD3iBZjW":
        Script24();
        break;
      case "6Vj2zNX47oy":
        Script25();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"FirstName": player.GetVar("FirstName")
, "LastName": player.GetVar("LastName")
, "Email": player.GetVar("Email")

},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script2()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Organization": player.GetVar("Organization")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script3()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Location": player.GetVar("Location")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script4()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OrganizationType": player.GetVar("OrganizationType")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script5()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Affiliation": player.GetVar("Affiliation")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script6()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OrganizationSize": player.GetVar("OrganizationSize")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script7()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OverseasExpenditures": player.GetVar("OverseasExpenditures")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script8()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "GACeligibility": player.GetVar("GACeligibility")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script9()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Gender": player.GetVar("Gender")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script10()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Age": player.GetVar("Age")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script11()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Language": player.GetVar("Language")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script12()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Accessibility": player.GetVar("Accessibility")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script13()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "FirstTime": player.GetVar("FirstTime")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script14()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Consent": player.GetVar("Consent")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script15()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbzJrxLAqvsPWvZir7JQT0XMJBy5v8FOPO1Y2VwTF4GUP5t2jyoG/exec",

type: "POST",

data: {"Email": player.GetVar("Email"),
"FirstName": player.GetVar("FirstName")
, "LastName": player.GetVar("LastName")
, "Address": player.GetVar("Address")
, "Organization": player.GetVar("Organization")
, "Completion": player.GetVar("Completion")
, "Number": player.GetVar("Number")},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script16()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script17()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script18()
{
  window.print();
}

function Script19()
{
  window.print();
}

function Script20()
{
  window.print();
}

function Script21()
{
  window.print();
}

function Script22()
{
  window.print();
}

function Script23()
{
  window.print();
}

function Script24()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script25()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

