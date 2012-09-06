package com.citruxengine.objects.platformer.box2d;

import com.citruxengine.objects.Box2DPhysicsObject;

/**
 * A very simple physics object. I just needed to add bullet mode and zero restitution
 * to make it more stable, otherwise it gets very jittery. 
 */
class Crate extends Box2DPhysicsObject {

	public function new(name:String, params:Dynamic = null) {

		super(name, params);
	}

	override private function defineBody():Void {

		super.defineBody();

		_bodyDef.bullet = true;
	}

	override private function defineFixture():Void {

		super.defineFixture();

		_fixtureDef.density = 0.1;
		_fixtureDef.restitution = 0;
	}
}