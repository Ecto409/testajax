// Solution 1: $.ajax() and jsonp:
$.ajax({
  //  type: "GET",
  //  crossDomain: true,
  dataType: "jsonp", // jsonp
  url: 'https://wikidata.org/w/api.php?action=wbgetentities&sites=frwiki&titles=France&languages=zh-hans|zh-hant|fr&props=sitelinks|labels|aliases|descriptions&format=json',
  //  data: data,
  //  success: 1,
}).done(function(data) {
  var items = [];

  $.each(data.entities.Q142.labels.fr, function(key, val) {
    items.push('<li id="' + key + '1">Test 1:' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('#code1');
});

// Solution 2: $.ajax(), json, &calback=?:
$.ajax({
  //  type: "GET",
  //  crossDomain: true,
  dataType: "json", // json
  url: 'https://wikidata.org/w/api.php?action=wbgetentities&sites=frwiki&titles=France&languages=zh-hans|zh-hant|fr&props=sitelinks|labels|aliases|descriptions&format=json&callback=?', // '&callback=?
  //  data: data,
  //  success: 1,
}).done(function(data) {
  var items = [];

  $.each(data.entities.Q142.labels.fr, function(key, val) {
    items.push('<li id="' + key + '2">Test 2:' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('#code2');
});

// Solution 3: $.getJSON() & calback=?:
$.getJSON('https://wikidata.org/w/api.php?action=wbgetentities&sites=frwiki&titles=France&languages=zh-hans|zh-hant|fr&props=sitelinks|labels|aliases|descriptions&format=json&callback=?', function(data) {
  var items = [];

  $.each(data.entities.Q142.labels.fr, function(key, val) {
    items.push('<li id="' + key + '3">Test 3: ' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('#code3');
});
