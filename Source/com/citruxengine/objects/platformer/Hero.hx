package com.citruxengine.objects.platformer;

import box2D.common.math.B2Vec2;

import com.citruxengine.objects.PhysicsObject;

import nme.ui.Keyboard;

/**
 * This is a common, simple, yet solid implementation of a side-scrolling Hero. 
 * The hero can run, jump, get hurt, and kill enemies. It dispatches signals
 * when significant events happen. The game state's logic should listen for those signals
 * to perform game state updates (such as increment coin collections).
 * 
 * Don't store data on the hero object that you will need between two or more levels (such
 * as current coin count). The hero should be re-created each time a state is created or reset.
 */	
class Hero extends PhysicsObject {

	public var acceleration(getAcceleration, setAcceleration):Float;
	public var maxVelocity(getMaxVelocity, setMaxVelocity):Float;
	public var jumpHeight(getJumpHeight, setJumpHeight):Float;
	public var jumpAcceleration(getJumpAcceleration, setJumpAcceleration):Float;

	private var _playerMovingHero:Bool;
	private var _controlsEnabled:Bool;

	var _acceleration:Float;
	var _maxVelocity:Float;
	var _jumpHeight:Float;
	var _jumpAcceleration:Float;

	public function new(name:String, params:Dynamic = null) {

		_acceleration = 1;
		_maxVelocity = 8;
		_jumpHeight = 14;
		_jumpAcceleration = 0.9;

		super(name, params);

		_playerMovingHero = false;
		_controlsEnabled = true;
	}

	override public function destroy():Void {

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		var velocity:B2Vec2 = _body.getLinearVelocity();

		if (_controlsEnabled) {
			
			var moveKeyPressed:Bool = false;

			if (_ce.input.isDown(Keyboard.RIGHT))
				velocity.add(new B2Vec2(5, 0));

			if (_ce.input.isDown(Keyboard.LEFT))
				velocity.subtract(new B2Vec2(5, 0));

			if (_ce.input.justPressed(Keyboard.SPACE))
				velocity.y = -_jumpHeight;

			if (_ce.input.isDown(Keyboard.SPACE))
				velocity.y -= _jumpAcceleration;

			//Cap velocities
			if (velocity.x > _maxVelocity)
				velocity.x = _maxVelocity;
			else if (velocity.x < -_maxVelocity)
				velocity.x = -_maxVelocity;

			//update physics with new velocity
			_body.setLinearVelocity(velocity);
		}

		updateAnimation();
	}

	public function updateAnimation():Void {

	}

	override private function createBody():Void {

		super.createBody();

		_body.setFixedRotation(true);
	}

	public function getAcceleration():Float {
		return _acceleration;
	}

	public function setAcceleration(value:Float):Float {
		return _acceleration = value;
	}

	public function getMaxVelocity():Float {
		return _maxVelocity;
	}

	public function setMaxVelocity(value:Float):Float {
		return _maxVelocity = value;
	}

	public function getJumpHeight():Float {
		return _jumpHeight;
	}

	public function setJumpHeight(value:Float):Float {
		return _jumpHeight = value;
	}

	public function getJumpAcceleration():Float {
		return _jumpAcceleration;
	}

	public function setJumpAcceleration(value:Float):Float {
		return _jumpAcceleration = value;
	}
}