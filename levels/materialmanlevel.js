var materialmanHalfwayPoint = 0;
var materialmanBossPoint = 0;
var materialmanmaps = [];

materialmanmaps[0] = { "height":15, "layers":[ { "data":[257, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 257, 258, 258, 257, 257, 258, 257, 258, 258, 257, 258, 258, 257, 258, 258, 258, 258, 258, 258, 321, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 321, 322, 322, 321, 321, 322, 321, 322, 322, 321, 322, 322, 321, 322, 322, 322, 322, 322, 322, 385, 386, 386, 386, 386, 386, 386, 386, 386, 386, 386, 385, 386, 386, 385, 385, 386, 385, 386, 386, 385, 386, 386, 385, 386, 386, 386, 386, 386, 386, 449, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 449, 450, 450, 449, 449, 450, 449, 450, 450, 449, 450, 450, 449, 450, 450, 450, 450, 450, 450, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 524, 514, 514, 513, 513, 514, 513, 514, 514, 513, 514, 514, 513, 514, 514, 514, 514, 514, 514, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 588, 578, 578, 577, 577, 578, 577, 578, 578, 577, 578, 578, 577, 578, 578, 578, 578, 578, 578, 513, 513, 513, 513, 513, 513, 513, 513, 513, 513, 513, 513, 513, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 577, 577, 577, 577, 578, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 577, 577, 577, 577, 577, 643, 643, 643, 643, 643, 643, 643, 643, 643, 644, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 707, 707, 707, 707, 707, 707, 707, 707, 707, 643, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 838, 839, 707, 707, 771, 771, 771, 771, 771, 771, 771, 771, 771, 707, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 902, 903, 771, 771, 643, 835, 835, 835, 835, 835, 835, 835, 835, 771, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 707, 707, 707, 707, 707, 707, 707, 707, 707, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835], "height":15, "name":"background", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 711, 711, 711, 711, 711, 711, 712, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 288, 418, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"collision", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"death", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"enemies", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 418, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 1096, 1097, 418, 1097, 1096, 1097, 1096, 1097, 1096, 1097], "height":15, "name":"foreground", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }], "orientation":"orthogonal", "properties": { "backgroundColor":"000000", "nextMapDirection":"down", "stitchx":"0" }, "tileheight":16, "tilesets":[ { "firstgid":1, "image":"..\/images\/map3.png", "imageheight":1024, "imagewidth":1024, "margin":0, "name":"map2", "properties": { }, "spacing":0, "tileheight":16, "tilewidth":16 }], "tilewidth":16, "version":1, "width":30 };
materialmanmaps[1] = { "height":15, "layers":[ { "data":[643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 643, 644, 645, 709, 709, 709, 709, 709, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 708, 709, 773, 773, 773, 773, 773, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 771, 772, 773, 837, 837, 837, 837, 837, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 835, 836, 837, 835, 835, 835, 835, 835, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 332, 332, 332, 332, 332, 332, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 321, 321, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268], "height":15, "name":"background", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 984, 985, 984, 985, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 715, 716, 715, 716, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 984, 985, 984, 985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 715, 716, 715, 716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 984, 985, 984, 985, 0, 0, 0, 0, 0, 160, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 715, 716, 715, 716, 0, 0, 0, 0, 0, 224, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 288, 418, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"collision", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"death", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"enemies", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }, { "data":[1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 482, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 984, 985, 984, 985, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 0, 0, 0, 0, 1091, 1092, 1091, 1092, 1091, 1092, 482, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092], "height":15, "name":"foreground", "opacity":1, "type":"tilelayer", "visible":true, "width":30, "x":0, "y":0 }], "orientation":"orthogonal", "properties": { "backgroundColor":"000000", "nextMapDirection":"down", "stitchx":"0" }, "tileheight":16, "tilesets":[ { "firstgid":1, "image":"..\/images\/map3.png", "imageheight":1024, "imagewidth":1024, "margin":0, "name":"map2", "properties": { }, "spacing":0, "tileheight":16, "tilewidth":16 }], "tilewidth":16, "version":1, "width":30 };
materialmanmaps[2] = { "height":15, "layers":[ { "data":[257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 321, 322, 323, 324, 325, 326, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2133, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 997, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 997, 1347, 1347, 1155, 1155, 1156, 1157, 1158, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1347, 1155, 1156, 1157, 1158, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1155, 1155, 1155, 1156, 1157, 1158, 1159, 1160, 997, 1156, 1157, 1158, 1159, 1160, 1221, 1222, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1411, 1155, 1155, 1155, 1156, 1411, 1155, 1155, 1155, 1156, 1157, 1411, 1411, 1411, 1155, 1155, 1155, 1156, 1159, 1160, 1221, 1222, 1159, 1160, 1159, 1160, 1157, 1158, 1159, 1160, 1156, 1157, 1158, 1159, 1160, 1157, 1158, 1159, 1160, 1220, 1221, 1222, 1223, 1224, 997, 1220, 1221, 1222, 1223, 1224, 1285, 1286, 1159, 1160, 1159, 1160, 1157, 1158, 1159, 1160, 1157, 1158, 1159, 1160, 1220, 1157, 1158, 1159, 1160, 1220, 1221, 1159, 1160, 1157, 1158, 1159, 1160, 1220, 1223, 1224, 1285, 1286, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1156, 1157, 1158, 1159, 1160, 1221, 1222, 1223, 1224, 1284, 1285, 1286, 1287, 1288, 997, 1284, 1285, 1286, 1287, 1288, 1349, 1350, 1155, 1155, 1155, 1155, 1155, 1155, 1159, 1160, 1221, 1222, 1223, 1224, 1284, 1221, 1222, 1223, 1224, 1284, 1285, 1159, 1160, 1221, 1222, 1223, 1224, 1284, 1287, 1288, 1349, 1350, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1061, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1219, 1219, 1219, 1219, 1219, 1219, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1155, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1283, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1117, 1117, 1117, 1117, 1219, 1219, 1219, 1219, 1219, 1283, 1283, 1283, 1283, 1283, 1283, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 1219, 2134, 2134, 2134, 2134, 2133, 2134, 2133, 2134, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2132, 2133, 2134, 2133, 1117, 1117, 1117, 1117, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2133, 2134, 2133, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2132, 2134, 2134, 2134, 2134, 2134, 2134, 2133, 2134, 2132, 2134, 2134, 2134, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 1117, 1117, 1117, 1117, 2134, 2134, 2134, 2133, 2134, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2132, 2134, 2133, 2134], "height":15, "name":"background", "opacity":1, "type":"tilelayer", "visible":true, "width":60, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1172, 1173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1108, 1109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 288, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1172, 1173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1205, 1206, 1205, 1206, 1205, 1206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 352, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1108, 1109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1269, 1270, 1269, 1270, 1269, 1270, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 416, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1172, 1173, 668, 668, 668, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1333, 1334, 1333, 1334, 1333, 1334, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 480, 482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1108, 1109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 984, 985, 984, 985, 986, 987, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 271, 272, 1172, 1173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 335, 336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 398, 399, 400, 1236, 1237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 398, 399, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 1323, 1324, 545, 545, 545, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 418, 1387, 1388, 1389, 0, 0, 334, 335, 336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 335, 336, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 1453, 0, 0, 398, 399, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1027, 1028, 0, 0, 0, 544, 545, 1388, 1389, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2075, 398, 399, 400, 354, 545, 545, 355, 545, 1389, 0, 1074, 418, 0, 0, 0, 0, 0, 2003, 2004, 2003, 2004, 2003, 2004, 2003, 2004, 2003, 2004, 2003, 2004, 2003, 2004, 2003, 2004, 1889, 2004, 2003, 2003, 1889, 0, 0, 0, 0, 0, 2003, 1453, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 418, 2003, 2003, 2003, 2003, 1453, 2003, 2003, 418, 2003, 2003, 2003, 2003, 2003, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 418, 0, 0, 354, 1323, 546, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 482, 0, 0, 418, 1387, 1388, 1389, 0, 482, 0, 0, 0, 0, 0], "height":15, "name":"collision", "opacity":1, "type":"tilelayer", "visible":true, "width":60, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1890, 1892, 1124, 1125, 1126, 1127, 1128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2067, 0, 0, 0, 0, 1192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"death", "opacity":1, "type":"tilelayer", "visible":true, "width":60, "x":0, "y":0 }, { "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "height":15, "name":"enemies", "opacity":1, "type":"tilelayer", "visible":true, "width":60, "x":0, "y":0 }, { "data":[1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 1092, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 1092, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 418, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1091, 1092, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 0, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 0, 1092, 1091, 1092, 1091, 1092, 1091, 1092, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1679, 1680, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1743, 1744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 485, 0, 0], "height":15, "name":"foreground", "opacity":1, "type":"tilelayer", "visible":true, "width":60, "x":0, "y":0 }], "orientation":"orthogonal", "properties": { "backgroundColor":"000000", "nextMapDirection":"down", "stitchx":"0" }, "tileheight":16, "tilesets":[ { "firstgid":1, "image":"..\/images\/map3.png", "imageheight":1024, "imagewidth":1024, "margin":0, "name":"map2", "properties": { }, "spacing":0, "tileheight":16, "tilewidth":16 }], "tilewidth":16, "version":1, "width":60 };