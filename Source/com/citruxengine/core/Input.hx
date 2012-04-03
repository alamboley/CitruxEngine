package com.citruxengine.core;

import nme.events.KeyboardEvent;
import nme.Lib;

class Input {

	static inline public var JUST_PRESSED:Int = 0;
	static inline public var DOWN:Int = 1;
	static inline public var JUST_RELEASED:Int = 2;
	static inline public var UP:Int = 3;

	public var enabled(getEnabled, setEnabled):Bool;

	private var _keys:IntHash<Int>;
	private var _keysReleased:Array<Int>;
	private var _initialized:Bool;

	var _enabled:Bool;

	public function new() {

		_keys = new IntHash<Int>();
		_keysReleased = new Array<Int>();

		_initialized = false;
		_enabled = true;
	}

	/**
	 * Citrus engine calls this function for you.
	 */
	public function initialize():Void {

		if (_initialized)
			return;

		_initialized = true;


		Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
		Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onKeyUp);
	}

	/**
	 * This method should be called AFTER everything has gathered input data from it for this tick.
	 * Implementors, you don't need to call this function. Citrus Engine does it for you.
	 */
	public function update():Void {

		if (!_enabled)
			return;

		for (value in _keys) {

			var key:Int = _keys.keys().next();

			if (_keys.get(key) == JUST_PRESSED) {
				_keys.set(key, DOWN);
			}
		}

		_keysReleased = [];
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

	private function _onKeyDown(kEvt:KeyboardEvent):Void {

		if (_keys.get(kEvt.keyCode) == null) {
			_keys.set(kEvt.keyCode, JUST_PRESSED);
		}
			
	}

	private function _onKeyUp(kEvt:KeyboardEvent):Void {

		_keys.remove(kEvt.keyCode);
		_keysReleased.push(kEvt.keyCode);
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
			Lib.current.stage.addEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
			Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onKeyUp);
		} else {
			Lib.current.stage.removeEventListener(KeyboardEvent.KEY_DOWN, _onKeyDown);
			Lib.current.stage.removeEventListener(KeyboardEvent.KEY_UP, _onKeyUp);
		}

		return _enabled;
	}
}