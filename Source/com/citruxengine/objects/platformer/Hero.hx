package com.citruxengine.objects.platformer;

import box2D.common.math.B2Vec2;
import box2D.dynamics.contacts.B2Contact;

import com.citruxengine.objects.PhysicsObject;

import hxs.Signal;

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
	public var controlsEnabled(getControlsEnabled, setControlsEnabled):Bool;
	public var friction(getFriction, setFriction):Float;

	//events
    /**
     * Dispatched whenever the hero jumps. 
     */
    public var onJump:Signal;

     /**
     * Dispatched whenever the hero gives damage to an enemy. 
     */             
    public var onGiveDamage:Signal;
    
    /**
     * Dispatched whenever the hero takes damage from an enemy. 
     */             
    public var onTakeDamage:Signal;
    
    /**
     * Dispatched whenever the hero's animation changes. 
     */             
    public var onAnimationChange:Signal;

	private var _playerMovingHero:Bool;

	var _acceleration:Float;
	var _maxVelocity:Float;
	var _jumpHeight:Float;
	var _jumpAcceleration:Float;
	var _controlsEnabled:Bool;
	var _friction:Float;

	public function new(name:String, params:Dynamic = null) {

		_acceleration = 1;
		_maxVelocity = 8;
		_jumpHeight = 14;
		_jumpAcceleration = 0.9;
		_friction = 0.75;
		_controlsEnabled = true;

		super(name, params);

		onJump = new Signal();
		onGiveDamage = new Signal();
		onTakeDamage = new Signal();
		onAnimationChange = new Signal();

		_playerMovingHero = false;
	}

	override public function destroy():Void {

		onJump.removeAll();
		onGiveDamage.removeAll();
		onTakeDamage.removeAll();
		onAnimationChange.removeAll();

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		var velocity:B2Vec2 = _body.getLinearVelocity();

		if (_controlsEnabled) {
			
			var moveKeyPressed:Bool = false;

			if (_ce.input.isDown(Keyboard.RIGHT) || _ce.input.accelerometerXDirection == "right") {
				_animation = "walk";
				velocity.add(new B2Vec2(3, 0));
				moveKeyPressed = true;
			}

			if (_ce.input.isDown(Keyboard.LEFT) || _ce.input.accelerometerXDirection == "left") {
				_animation = "walk";
				velocity.subtract(new B2Vec2(3, 0));
				moveKeyPressed = true;
			}

			//If player just started moving the hero this tick.
			if (moveKeyPressed && !_playerMovingHero) {

				_playerMovingHero = true;

				//Take away friction so he can accelerate.
				_fixture.setFriction(0);

			} else if (!moveKeyPressed && _playerMovingHero) {

				//Player just stopped moving the hero this tick.
				_playerMovingHero = false;

				//Add friction so that he stops running
				_fixture.setFriction(_friction);
			}

			if (_ce.input.justPressed(Keyboard.SPACE) || _ce.input.justJumpTouched()) {
				_animation = "jump";
				velocity.y = -_jumpHeight;
				onJump.dispatch();
			}
				

			if (_ce.input.isDown(Keyboard.SPACE) || _ce.input.jumpTouch)
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

	override public function handleBeginContact(contact:B2Contact):Void {

		//trace('start' + Date.now().getSeconds());
	}

	override public function handleEndContact(contact:B2Contact):Void {

		//trace('end');
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

	/**
	 * Whether or not the player can move and jump with the hero. 
	 */
	public function getControlsEnabled():Bool {
		return _controlsEnabled;
	}

	public function setControlsEnabled(value:Bool):Bool {

		_controlsEnabled = value;

		if (!_controlsEnabled)
			_fixture.setFriction(_friction);

		return _controlsEnabled;
	}

	/**
	 * This is the amount of friction that the hero will have. Its value is multiplied against the
	 * friction value of other physics objects.
	 */
	public function getFriction():Float {
		return _friction;
	}

	public function setFriction(value:Float):Float {

		_friction = value;

		if (_fixture != null)
			_fixture.setFriction(_friction);

		return _friction;
	}
}