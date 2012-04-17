package fr.aymericlamboley.test;

import box2D.dynamics.contacts.B2Contact;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.State;
import com.citruxengine.math.MathVector;
import com.citruxengine.objects.CitruxSprite;
import com.citruxengine.objects.PhysicsObject;
import com.citruxengine.objects.platformer.Baddy;
import com.citruxengine.objects.platformer.Coin;
import com.citruxengine.objects.platformer.Hero;
import com.citruxengine.objects.platformer.MovingPlatform;
import com.citruxengine.objects.platformer.Platform;
import com.citruxengine.objects.platformer.Sensor;
import com.citruxengine.physics.Box2D;

import nme.geom.Rectangle;

class GameState extends State {

	public function new() {

		super();
	}

	override public function initialize():Void {

		super.initialize();

		var box2d:Box2D = new Box2D("Box2D");
		box2d.visible = true;
		add(box2d);

		var background:CitruxSprite = new CitruxSprite("background", {x:0, y:0, view:"Assets/background.jpg"});
		add(background);

		var physicsObject:PhysicsObject = new PhysicsObject("physicsObject", {x:250, y:200, width:30, height:30});
		//var physicsObject:PhysicsObject = new PhysicsObject("physicsObject", {x:100, y:20});
		//var physicsObject:PhysicsObject = new PhysicsObject("physicsObject", {x:100, y:20, radius:20});
		add(physicsObject);

		var baddy:Baddy = new Baddy("baddy", {x:540, y:200, width:30, height:60});
		add(baddy);

		var movingPlatform:MovingPlatform = new MovingPlatform("movingPlatform", {x:430, y:120, width:120, height:20, endX:430, startY:20, endY:300});
		add(movingPlatform);

		add(new Platform("platform1", {x:260, y:450, width:500, height:30}));
		add(new Platform("platform2", {x:700, y:380, width:500, height:30}));
		add(new Platform("platform3", {x:850, y:550, width:500, height:30, rotation:20}));

		var hero:Hero = new Hero("hero", {x:100, y:20, width:30, height:60});
		add(hero);

		var coin:Coin = new Coin("Coin", {x:Std.random(400), y:Std.random(300) + 100, radius:30, view:"Assets/jewel.png"});
		add(coin);
		coin.onBeginContact.add(_recoltCoin);
		
		view.setupCamera(hero, new MathVector(320, 240), new Rectangle(0, 0, 1550, 0), new MathVector(.25, .05));
	}

	private function _recoltCoin(ctc:B2Contact):Void {

		var hero:Hero = Std.is(ctc.m_fixtureA.getBody().getUserData(), Hero) ? ctc.m_fixtureA.getBody().getUserData() : Std.is(ctc.m_fixtureB.getBody().getUserData(), Hero) ? ctc.m_fixtureB.getBody().getUserData() : null;
		
		if (hero != null)
			remove(Std.is(ctc.m_fixtureA.getBody().getUserData(), Coin) ? ctc.m_fixtureA.getBody().getUserData() : ctc.m_fixtureB.getBody().getUserData());
	}
}