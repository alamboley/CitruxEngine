package fr.aymericlamboley.test;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.State;
import com.citruxengine.math.MathVector;
import com.citruxengine.objects.CitruxSprite;
import com.citruxengine.objects.NapePhysicsObject;
import com.citruxengine.objects.platformer.nape.Platform;
import com.citruxengine.physics.Nape;

import fr.aymericlamboley.test.ShopsWoman;

import nape.callbacks.CbEvent;
import nape.callbacks.CbType;
import nape.callbacks.InteractionCallback;
import nape.callbacks.InteractionListener;
import nape.callbacks.InteractionType;
import nape.geom.Vec2;

class GameStateNape extends State<GameData> {

	public function new() {

		super();
	}

	override public function initialize():Void {

		super.initialize();

		var napePhysics:Nape = new Nape("Nape", {gravity:new Vec2()});
		napePhysics.visible = true;
		add(napePhysics);

		napePhysics.space.listeners.add(new InteractionListener(CbEvent.BEGIN, InteractionType.COLLISION, ShopsWoman.SHOPSWOMAN, CbType.ANY_BODY, napePhysics.contactListener.onInteractionBegin));
		napePhysics.space.listeners.add(new InteractionListener(CbEvent.END, InteractionType.COLLISION, ShopsWoman.SHOPSWOMAN, CbType.ANY_BODY, napePhysics.contactListener.onInteractionEnd));


		var shopsWoman:ShopsWoman = new ShopsWoman("shopsWoman", {x:300, y:30});
		add(shopsWoman);

		var block:Block = new Block("block", {x:150, y:30});
		add(block);
	}
}