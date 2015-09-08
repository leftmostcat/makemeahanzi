Glyphs = new Mongo.Collection('glyphs');

Glyphs.get_svg_path = function(glyph) {
  var terms = [];
  for (var i = 0; i < glyph.path.length; i++) {
    var segment = glyph.path[i];
    terms.push(segment.type);
    if (segment.x1 !== undefined) {
      terms.push(segment.x1);
      terms.push(segment.y1);
    }
    terms.push(segment.x);
    terms.push(segment.y);
  }
  return terms.join(' ');
}