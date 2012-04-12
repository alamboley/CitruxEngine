package com.citruxengine.physics;

import box2D.collision.B2Manifold;
import box2D.dynamics.B2ContactListener;
import box2D.dynamics.B2ContactImpulse;
import box2D.dynamics.contacts.B2Contact;

class ContactListener extends B2ContactListener {

	public function new() {

		super();
	}

	override public function beginContact(contact:B2Contact):Void {
		
		contact.m_fixtureA.getBody().getUserData().handleBeginContact(contact);
		contact.m_fixtureB.getBody().getUserData().handleBeginContact(contact);
	}

	override public function endContact(contact:B2Contact):Void {

		contact.m_fixtureA.getBody().getUserData().handleEndContact(contact);
		contact.m_fixtureB.getBody().getUserData().handleEndContact(contact);
	}

	override public function preSolve(contact:B2Contact, oldManifold:B2Manifold):Void {

	}

	override public function postSolve(contact:B2Contact, impulse:B2ContactImpulse):Void {

	}
}