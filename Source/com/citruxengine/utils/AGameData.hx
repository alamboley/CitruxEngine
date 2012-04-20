package com.citruxengine.utils;

import hxs.Signal2;

/**
 * This is an (optional) abstract class to store your game's data such as lives, score, levels...
 * You should extend this class & instantiate it into your main class using the gameData variable.
 * You can dispatch a signal, dataChanged, if you update one of your data.
 * For more information, watch the example below. 
 */
class AGameData implements Dynamic<Dynamic> {

	public var dataChanged:Signal2<String, Dynamic>;

	private var _lives:Int;
	private var _score:Int;
	private var _timeLeft:Int;

	private var _levels:Array<Dynamic>;

	public function new() {

		dataChanged = new Signal2();

		_lives = 3;
		_score = 0;
		_timeLeft = 30000;
	}

	public function destroy():Void {

		dataChanged.removeAll();
	}

	public function getLives():Int {
		return _lives;
	}

	public function setLives(value:Int):Int {

		dataChanged.dispatch("lives", value);

		return _lives = value;
	}

	public function getScore():Int {
		return _score;
	}

	public function setScore(value:Int):Int {

		dataChanged.dispatch("score", value);

		return _score = value;
	}

	public function getTimeLeft():Int {
		return _timeLeft;
	}

	public function setTimeLeft(value:Int) {

		dataChanged.dispatch("timeLeft", value);

		return _timeLeft = value;
	}

}