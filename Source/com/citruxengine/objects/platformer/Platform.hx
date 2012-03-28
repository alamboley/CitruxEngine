package com.citruxengine.objects.platformer;

import box2D.dynamics.B2Body;

import com.citruxengine.objects.PhysicsObject;

class Platform extends PhysicsObject {

	private var _oneWay:Bool;

	public function new(name:String, params:Dynamic = null) {

		_oneWay = false;

		super(name, params);
	}

	override public function destroy():Void {

		super.destroy();
	}

	override private function defineBody():Void {

		super.defineBody();

		_bodyDef.type = B2Body.b2_staticBody;
	}

	override private function defineFixture():Void {

		super.defineFixture();

		_fixtureDef.restitution = 0;
	}

	override private function createFixture():Void {

		super.createFixture();
	}
}