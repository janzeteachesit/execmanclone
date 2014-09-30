function initShowOffBossScreen(bossnumber) {
	console.log("BOSS #" + bossnumber);
	if (!bossnumber) {
		bossnumber = 0;
	}
	this.bossnumber = bossnumber;

	var wastemanFrameSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("wastemanframe")],
		"frames": {
			"width": 24, "height": 24, "count": 2
		},
		"animations": {
			"frame": {
				"frames" : [0],
				"next" : "breathout",
				"speed" : 0.01
			},
			"breathout" : {
				"frames" : [1],
				"next" : "frame",
				"speed" : 0.09
			},
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	});

	var accountingmanFrameSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("accountingmanframe")],
		"frames": {
			"width": 20, "height": 24, "count": 1
		},
		"animations": {
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	});

	var warehousemanFrameSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("warehousemanframe")],
		"frames": {
			"width": 20, "height": 24, "count": 1
		},
		"animations": {
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	});

	var materialmanFrameSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("materialmanframe")],
		"frames": {
			"width": 30, "height": 30, "count": 1
		},
		"animations": {
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	});

	var visionarymanFrameSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("visionarymanframe")],
		"frames": {
			"width": 20, "height": 24, "count": 1
		},
		"animations": {
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	});

	var bossFrame;
	var bossLabel;
	if (bossnumber === 0) {
		bossFrame = new createjs.Sprite(wastemanFrameSpriteSheet, "still");
		bossLabel = new createjs.Text("WASTE MAN", "bold 10px Arial", "#FFF");
	} else if (bossnumber === 1) {
		bossFrame = new createjs.Sprite(accountingmanFrameSpriteSheet, "still");
		bossLabel = new createjs.Text("ACCOUNTING MAN", "bold 10px Arial", "#FFF");
	} else if (bossnumber === 2) {
		bossFrame = new createjs.Sprite(materialmanFrameSpriteSheet, "still");
		bossLabel = new createjs.Text("MATERIAL MAN", "bold 10px Arial", "#FFF");
	} else if (bossnumber === 7) {
		bossFrame = new createjs.Sprite(warehousemanFrameSpriteSheet, "still");
		bossLabel = new createjs.Text("WAREHOUSE MAN", "bold 10px Arial", "#FFF");
	} else if (bossnumber === 8) {
		bossFrame = new createjs.Sprite(visionarymanFrameSpriteSheet, "still");
		bossLabel = new createjs.Text("VISIONARY MAN", "bold 10px Arial", "#FFF");

	}
	showOffBossScreenCounter = 330;
	startgame = false;
	stage = new createjs.Container();
	altstage = new createjs.Container();
	gamestage = new createjs.Stage("gamecanvas");
	gamestage.clear();
	gamestage.snapToPixelEnabled = true;

	var zoomAmount = window.innerHeight / 240;

	gamezoom = zoomAmount;
	gamestage.canvas.height = window.innerHeight / zoomAmount;
	gamestage.canvas.width = gamestage.canvas.height + (gamestage.canvas.height * 1/3.4);
	document.getElementById("gamecanvas").style.zoom = zoomAmount;
	document.getElementById("gamecanvas").style.MozTransform = "scale("+zoomAmount+")";
	gamestage.canvas.style.backgroundColor = "#FFF";
	gamestage.addChild(altstage);
	gamestage.addChild(stage);

	bossFrame.x = gamestage.canvas.width / 2 - bossFrame.spriteSheet._frameWidth / 2;
	bossFrame.y = gamestage.canvas.height / 2 - bossFrame.spriteSheet._frameHeight / 2;
	var bossFrame2 = bossFrame.clone(true);

	stage.y = -gamestage.canvas.height;
	altstage.y = gamestage.canvas.height;

	createjs.Ticker.addEventListener("tick", handleShowOffBossScreenTick);
	createjs.Ticker.setFPS(60);


    var shape = new createjs.Shape();
    shape.graphics.beginFill("#000").drawRect(0, 0, gamestage.canvas.width, gamestage.canvas.height);
	altstage.addChild(shape);

	stage.addChild(bossFrame);
	altstage.addChild(bossFrame2);
	playSound("intro");
}

var bossShowOffScreenShape;
var bossShowOffScreenShape2;
function handleShowOffBossScreenTick(event) {

	document.getElementById("gamecanvas").removeEventListener('touchstart', function () {}, false);
	document.getElementById("gamecanvas").removeEventListener('click', function () {}, false);
	if (showOffBossScreenCounter < 0) {
		initVars();

		if (bossnumber === 0) {
			maps = wastemanmaps;
			playSoundLoop("wastemansong");
		} else if (bossnumber === 1) {
			maps = accountingmanmaps;
			playSoundLoop("accountingmansong");
		} else if (bossnumber === 2) {
			maps = materialmanmaps;
			playSoundLoop("materialmansong");
		} else if (bossnumber === 7) {
			maps = warehousemanmaps;
			playSoundLoop("warehousemansong");
		} else if (bossnumber === 8) {
			maps = visionarymanmaps;
			playSoundLoop("visionarymansong");
		}
		startlevel = true;
		event.remove();
		return;
	} else if (showOffBossScreenCounter > 210) {
		stage.y += gamestage.canvas.height / 120;
		altstage.y -= gamestage.canvas.height / 120;
	} else if (showOffBossScreenCounter === 170) {
		var bossLabel;
		if (this.bossnumber === 0) {
			bossLabel = new createjs.Text("WASTE MAN", "bold 10px Arial", "#FFF");
		} else if (this.bossnumber === 1) {
			bossLabel = new createjs.Text("ACCOUNTING MAN", "bold 10px Arial", "#FFF");
		} else if (this.bossnumber === 2) {
			bossLabel = new createjs.Text("MATERIAL MAN", "bold 10px Arial", "#FFF");
		} else if (this.bossnumber === 7) {
			bossLabel = new createjs.Text("WAREHOUSE MAN", "bold 10px Arial", "#FFF");
		} else if (this.bossnumber === 8) {
			bossLabel = new createjs.Text("VISIONARY MAN", "bold 10px Arial", "#FFF");
		}
		bossLabel.y = gamestage.canvas.height / 2 + 20;
		bossLabel.x = gamestage.canvas.width / 2 - 30;
		gamestage.addChild(bossLabel);
	} else if (showOffBossScreenCounter === 150) {
		var wastemanFrameSpriteSheet = new createjs.SpriteSheet({
			"images": [loader.getResult("wastemanframe")],
			"frames": {
				"width": 24, "height": 24, "count": 2
			},
			"animations": {
				"frame": {
					"frames" : [0],
					"next" : "breathout",
					"speed" : 0.01
				},
				"breathout" : {
					"frames" : [1],
					"next" : "frame",
					"speed" : 0.09
				},
				"still": {
					"frames" : [0],
					"next" : "still"
				}
			}
		});

		var accountingmanSpriteSheet = new createjs.SpriteSheet({
			"images": [loader.getResult("accountingmanframe")],
			"frames": {
				"width": 20, "height": 24, "count": 1
			},
			"animations": {
				"still": {
					"frames" : [0],
					"next" : "still"
				}
			}
		});

		var warehousemanSpriteSheet = new createjs.SpriteSheet({
			"images": [loader.getResult("warehousemanframe")],
			"frames": {
				"width": 20, "height": 24, "count": 1
			},
			"animations": {
				"still": {
					"frames" : [0],
					"next" : "still"
				}
			}
		});

		var materialmanFrameSpriteSheet = new createjs.SpriteSheet({
			"images": [loader.getResult("materialmanframe")],
			"frames": {
				"width": 30, "height": 30, "count": 1
			},
			"animations": {
				"still": {
					"frames" : [0],
					"next" : "still"
				}
			}
		});

		var visionarymanFrameSpriteSheet = new createjs.SpriteSheet({
			"images": [loader.getResult("visionarymanframe")],
			"frames": {
				"width": 20, "height": 24, "count": 1
			},
			"animations": {
				"still": {
					"frames" : [0],
					"next" : "still"
				}
			}
		});

		var bossFrame;

		if (this.bossnumber === 0) {
			bossFrame = new createjs.Sprite(wastemanFrameSpriteSheet, "still");
		} else if (this.bossnumber === 1) {
			bossFrame = new createjs.Sprite(accountingmanSpriteSheet, "still");
		} else if (this.bossnumber === 2) {
			bossFrame = new createjs.Sprite(materialmanFrameSpriteSheet, "still");
		} else if (this.bossnumber === 7) {
			bossFrame = new createjs.Sprite(warehousemanSpriteSheet, "still");
		} else if (this.bossnumber === 8) {
			bossFrame = new createjs.Sprite(visionarymanFrameSpriteSheet, "still");
		}
		bossFrame.x = gamestage.canvas.width / 2 - bossFrame.spriteSheet._frameWidth / 2;
		bossFrame.y = gamestage.canvas.height / 2 - bossFrame.spriteSheet._frameHeight / 2;
	    bossShowOffScreenShape = new createjs.Shape();
	    bossShowOffScreenShape.graphics.beginFill("#0000FF").drawRect(0, gamestage.canvas.height / 2 - 50, gamestage.canvas.width, 100);
	    bossShowOffScreenShape.x = -gamestage.canvas.width;
	    bossShowOffScreenShape.y = gamestage.canvas.height / 200 - 100;
	    stage.addChild(bossShowOffScreenShape);
		stage.addChild(bossFrame);
	} else if (showOffBossScreenCounter > 110 && showOffBossScreenCounter < 130) {
		bossShowOffScreenShape.x += gamestage.canvas._frameWidth / 20;
	} else if (showOffBossScreenCounter === 110) {
	    bossShowOffScreenShape2 = new createjs.Shape();
	    bossShowOffScreenShape2.graphics.beginFill("#FFF").drawRect(0, 0, gamestage.canvas.width, gamestage.canvas.height);
	    bossShowOffScreenShape2.x = 0;
	    altstage.addChild(bossShowOffScreenShape2);
	} else if (showOffBossScreenCounter === 105) {
	    altstage.removeChild(bossShowOffScreenShape2);
	    bossShowOffScreenShape = new createjs.Shape();
	    bossShowOffScreenShape.graphics.beginFill("#000").drawRect(0, 0, gamestage.canvas.width, gamestage.canvas.height);
	    bossShowOffScreenShape.x = 0;
	    altstage.addChild(bossShowOffScreenShape);
	} else if (showOffBossScreenCounter === 100) {
	    bossShowOffScreenShape2 = new createjs.Shape();
	    bossShowOffScreenShape2.graphics.beginFill("#FFF").drawRect(0, 0, gamestage.canvas.width, gamestage.canvas.height);
	    bossShowOffScreenShape2.x = 0;
	    altstage.addChild(bossShowOffScreenShape2);
	} else if (showOffBossScreenCounter === 95) {
	    altstage.removeChild(bossShowOffScreenShape2);
	    bossShowOffScreenShape = new createjs.Shape();
	    bossShowOffScreenShape.graphics.beginFill("#000").drawRect(0, 0, gamestage.canvas.width, gamestage.canvas.height);
	    bossShowOffScreenShape.x = 0;
	    altstage.addChild(bossShowOffScreenShape);
	}
	showOffBossScreenCounter--;
	gamestage.update();
}
