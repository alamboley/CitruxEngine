package com.citruxengine.core;

import com.citruxengine.core.State;

import nme.display.Sprite;
import nme.events.Event;

/**
 * @author Aymeric Lamboley
 */
class CitruxEngine extends Sprite {

	static private var _instance:CitruxEngine;

	public var state(getState, setState):State;

	var _state:State;
	var _newState:State;
	var _stateDisplayIndex:Int;

	var _startTime:Float;
	var _gameTime:Float;
	
	public function new() {
		
		super ();

		_instance = this;

		_stateDisplayIndex = 0;

		_startTime = Date.now().getTime();
		_gameTime = _startTime;

		this.addEventListener(Event.ENTER_FRAME, _handleEnterFrame);
	}

	static public function getInstance():CitruxEngine {

		return _instance;
	}

	private function _handleEnterFrame(evt:Event):Void {

		if (_newState != null) {

			if (_state != null) {

				_state.destroy();
			}

			_state = _newState;
			_newState = null;

			this.addChildAt(_state, _stateDisplayIndex);

			_state.initialize();
		}

		if (_state != null) {

			var nowTime:Float = Date.now().getTime();
			var timeSinceLastFrame:Float = nowTime - _gameTime;
			var timeDelta:Float = timeSinceLastFrame * 0.001;
			_gameTime = nowTime;

			_state.update(timeDelta);
		}
	}

	public function getState():State {

		if (_newState != null)
			return _newState;
		else
			return _state;
	}
	
	public function setState(value:State):State {
		return _newState = value;
	}
	
}