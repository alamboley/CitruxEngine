package fr.aymericlamboley.test;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.State;
import com.citruxengine.math.MathVector;
import com.citruxengine.objects.CitruxSprite;
import com.citruxengine.objects.NapePhysicsObject;
import com.citruxengine.physics.Nape;

class GameStateNape extends State<GameData> {

	public function new() {

		super();
	}

	override public function initialize():Void {

		super.initialize();

		var nape:Nape = new Nape("Box2D");
		nape.visible = true;
		add(nape);

		add(new NapePhysicsObject("nape object", {x:200, y:200, width:30, height:60}));

		/*add(new Platform("platform1", {x:498, y:403, width:948, height:20}));
		add(new Platform("platform2", {x:0, y:202, width:20, height:404}));
		add(new Platform("platform3", {x:1278, y:363, width:624, height:20}));
		add(new Platform("platform4", {x:1566, y:165, width:20, height:404}));*/
	}
}