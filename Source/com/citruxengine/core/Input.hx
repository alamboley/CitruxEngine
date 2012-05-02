package com.citruxengine.core;

import nme.events.AccelerometerEvent;
import nme.events.KeyboardEvent;
import nme.events.TouchEvent;
import nme.Lib;
import nme.ui.Acceleration;
import nme.ui.Accelerometer;
import nme.ui.Multitouch;
import nme.ui.MultitouchInputMode;

class Input {

	static inline public var JUST_PRESSED:Int = 0;
	static inline public var DOWN:Int = 1;
	static inline public var JUST_RELEASED:Int = 2;
	static inline public var UP:Int = 3;

	public var enabled(getEnabled, setEnabled):Bool;
	public var jumpTouch(getJumpTouch, null):Bool;
	public var accelerometerXDirection(getAccelerometerXDirection, null):String;

	private var _keys:IntHash<Int>;
	private var _keysReleased:Array<Int>;
	private var _initialized:Bool;

	#if mobile
		private var _acceleration:Acceleration;
	#end

	private var _firstJumpTouch:Bool;

	var _enabled:Bool;
	var _jumpTouch:Bool;
	var _accelerometerXDirection:String;

	public function new() {

		Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;

		_keys = new IntHash<Int>();
		_keysReleased = new Array<Int>();

		_initialized = false;
		_enabled = true;

		_jumpTouch = _firstJumpTouch = false;
	}

	/**
	 * Citrus engine calls this function for you.
	 */
	public function initialize():Void {

		if (_initialized)
			return;

		_initialized = true;

		#if (flash || desktop)
			Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
			Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onKeyUp);

		#elseif mobile
			Lib.current.stage.addEventListener(TouchEvent.TOUCH_BEGIN, _touchBegin);
			Lib.current.stage.addEventListener(TouchEvent.TOUCH_END, _touchEnd);

		#end
	}

	/**
	 * This method should be called AFTER everything has gathered input data from it for this tick.
	 * Implementors, you don't need to call this function. Citrus Engine does it for you.
	 */
	public function update():Void {

		if (!_enabled)
			return;

		#if mobile

			_acceleration =  Accelerometer.get();

			if (_acceleration != null) {

				#if landscape

					if (_acceleration.y > 0.3)
						_accelerometerXDirection = "right";
					else if (_acceleration.y < -0.3)
						_accelerometerXDirection = "left";
					else
						_accelerometerXDirection = "immobile";

				#elseif portrait 

					if (_acceleration.x > 0.3)
						_accelerometerXDirection = "right";
					else if (_acceleration.x < -0.3)
						_accelerometerXDirection = "left";
					else
						_accelerometerXDirection = "immobile";

				#end
			}

		#elseif (flash || desktop)

			for (key in _keys.keys()) {

				if (_keys.get(key) == JUST_PRESSED) {
					_keys.set(key, DOWN);
				}
			}

			_keysReleased = [];

		#end
	}

	/**
	 * @param keyCode a "code" representing a key on the keyboard. Use haXe NME's Keyboard class constants if you please.
	 * @return Says YES! if the key you requested is being pressed. Says no if not.
	 */
	public function isDown(keyCode:Int):Bool {
		return _keys.get(keyCode) == DOWN;
	}

	/**
	 * @param keyCode a "code" representing a key on the keyboard. Use haXe NME's Keyboard class constants if you please.
	 * @return Says YES! if the key you requested was pressed between last tick and this tick. Says no if not.
	 */
	 public function justPressed(keyCode:Int):Bool {
	 	return _keys.get(keyCode) == JUST_PRESSED;
	 }

	 /**
	 * @param keyCode a "code" representing a key on the keyboard. Use haXe NME's Keyboard class constants if you please.
	 * @return Says YES! if the key you requested was released between last keick and this tick. Says no if not.
	 */
	 public function justReleased(keyCode:Int):Bool {
	 	return Lambda.indexOf(_keysReleased, keyCode) != -1;
	 }

	 /**
	  * @return Says Yes if the user just pressed on the phone
	  */
	 public function justJumpTouched():Bool {

		if (_jumpTouch && _firstJumpTouch) {

			_firstJumpTouch = false;
			return true;
		}

		return false;
	}

	/**
	 * @return Says Yes if the user still press on his phone
	 */
	public function getJumpTouch():Bool {
		return _jumpTouch;
	}

	/**
	 * @return a string with the X direction guessed by the accelerometer
	 */
	public function getAccelerometerXDirection():String {
		return _accelerometerXDirection;
	}

	private function _onKeyDown(kEvt:KeyboardEvent):Void {

		if (_keys.get(kEvt.keyCode) == null) {
			_keys.set(kEvt.keyCode, JUST_PRESSED);
		}
			
	}

	private function _onKeyUp(kEvt:KeyboardEvent):Void {

		_keys.remove(kEvt.keyCode);
		_keysReleased.push(kEvt.keyCode);
	}

	private function _touchBegin(tEvt:TouchEvent):Void {
		_firstJumpTouch = _jumpTouch = true;
	}

	private function _touchEnd(tEvt:TouchEvent):Void {
		_firstJumpTouch = _jumpTouch = false;
	}

	/**
	 * Sets and determines whether or not keypresses will be
	 * registered through the Input class. 
	 */
	public function getEnabled():Bool {
		return _enabled;
	}

	public function setEnabled(value:Bool):Bool {

		if (_enabled == value)
			return _enabled;

		_enabled = value;

		if (_enabled) {

			#if (flash || desktop)
				Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
				Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onKeyUp);

			#elseif mobile
				Lib.current.stage.addEventListener(TouchEvent.TOUCH_BEGIN, _touchBegin);
				Lib.current.stage.addEventListener(TouchEvent.TOUCH_END, _touchEnd);
				
			#end

		} else {

			#if (flash || desktop)
				Lib.current.stage.removeEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
				Lib.current.stage.removeEventListener(KeyboardEvent.KEY_UP, _onKeyUp);

			#elseif mobile
				Lib.current.stage.removeEventListener(TouchEvent.TOUCH_BEGIN, _touchBegin);
				Lib.current.stage.removeEventListener(TouchEvent.TOUCH_END, _touchEnd);
				
			#end
		}

		return _enabled;
	}
}