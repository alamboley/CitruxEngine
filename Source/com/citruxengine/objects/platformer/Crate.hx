package com.citruxengine.objects.platformer;

import com.citruxengine.objects.PhysicsObject;

/**
 * A very simple physics object. I just needed to add bullet mode and zero restitution
 * to make it more stable, otherwise it gets very jittery. 
 */
class Crate extends PhysicsObject {

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