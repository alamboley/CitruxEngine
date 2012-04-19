package com.citruxengine.objects.platformer;

import box2D.dynamics.B2Body;
import box2D.dynamics.contacts.B2Contact;

import com.citruxengine.objects.PhysicsObject;

import hxs.Signal1;

/**
 * Sensors simply listen for when an object begins and ends contact with them. They dispatch a signal
 * when contact is made or ended, and this signal can be used to perform custom game logic such as
 * triggering a scripted event, ending a level, popping up a dialog box, and virtually anything else.
 * 
 * Remember that signals dispatch events when ANY Box2D object collides with them, so you will want
 * your collision handler to ignore collisions with objects that it is not interested in, or extend
 * the sensor and use maskBits to ignore collisions altogether.
 *
 * Events
 * onBeginContact - Dispatches on first contact with the sensor.
 * onEndContact - Dispatches when the object leaves the sensor.
 */
class Sensor extends PhysicsObject {

	/**
     * Dispatches on first contact with the sensor.
     */
    public var onBeginContact:Signal1<B2Contact>;

    /**
     * Dispatches when the object leaves the sensor.
     */
    public var onEndContact:Signal1<B2Contact>;

	public function new(name:String, params:Dynamic = null) {
		
		super(name, params);

		onBeginContact = new Signal1();
		onEndContact = new Signal1();
	}

	override public function destroy():Void {

		onBeginContact.removeAll();
		onEndContact.removeAll();

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

	override public function handleBeginContact(contact:B2Contact):Void {

		onBeginContact.dispatch(contact);
	}

	override public function handleEndContact(contact:B2Contact):Void {

		onEndContact.dispatch(contact);
	}
}