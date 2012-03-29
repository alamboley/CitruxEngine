package com.citruxengine.objects.platformer;

import box2D.dynamics.B2Body;

import com.citruxengine.objects.PhysicsObject;

/**
 * A Platform is a rectangular object that is meant to be stood on. It can be given any position, width, height, or rotation to suit your level's needs.
 * You can make your platform a "one-way" or "cloud" platform so that you can jump on from underneath (collision is only applied when coming from above it).
 * 
 * There are two ways of adding graphics for your platform. You can give your platform a graphic just like you would any other object (by passing a graphical
 * class into the view property) or you can leave your platform invisible and line it up with your backgrounds for a more custom look.
 */

class Platform extends PhysicsObject {

	public function new(name:String, params:Dynamic = null) {

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