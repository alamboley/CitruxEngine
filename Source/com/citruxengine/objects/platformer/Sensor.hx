package com.citruxengine.objects.platformer;

import box2D.dynamics.B2Body;

import com.citruxengine.objects.PhysicsObject;

/**
 * Sensors simply listen for when an object begins and ends contact with them. They dispatch a signal
 * when contact is made or ended, and this signal can be used to perform custom game logic such as
 * triggering a scripted event, ending a level, popping up a dialog box, and virtually anything else.
 * 
 * Remember that signals dispatch events when ANY Box2D object collides with them, so you will want
 * your collision handler to ignore collisions with objects that it is not interested in, or extend
 * the sensor and use maskBits to ignore collisions altogether.  
 */
class Sensor extends PhysicsObject {

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

		_fixtureDef.isSensor = true;
	}

	override private function createFixture():Void {

		super.createFixture();

		//_fixture.m_reportBeginContact = true; -> doesn't exist;
		//_fixture.m_reportEndContact = true; -> doesn't exist;
	}
}