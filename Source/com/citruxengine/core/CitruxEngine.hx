package com.citruxengine.core;

import com.citruxengine.core.CitruxObject;
import com.citruxengine.core.Console;
import com.citruxengine.core.Input;
import com.citruxengine.core.SoundManager;
import com.citruxengine.core.State;

import nme.display.Sprite;
import nme.display.StageAlign;
import nme.display.StageScaleMode;
import nme.events.Event;
import nme.Lib;

/**
 * CitruxEngine is the top-most class in the library. When you start your project, you should make your
 * document class extend this class.
 * 
 * <p>CitruxEngine is a singleton so that you can grab a reference to it anywhere, anytime. Don't abuse this power,
 * but use it wisely. With it, you can quickly grab a reference to the manager classes such as current State, Input and SoundManager.</p>
 */	
class CitruxEngine<T> extends Sprite {

	static private var _instance:CitruxEngine<Dynamic>;

	public var state(getState, setState):State<T>;
	public var playing(getPlaying, setPlaying):Bool;
	public var gameData(getGameData, setGameData):T;
	public var input(getInput, never):Input;
	public var sound(getSound, never):SoundManager;
	public var console(getConsole, never):Console;

	var _state:State<T>;
	var _newState:State<T>;
	var _stateDisplayIndex:Int;

	var _playing:Bool;

	var _gameData:T;
	var _input:Input;
	var _sound:SoundManager;
	var _console:Console;

	var _startTime:Float;
	var _gameTime:Float;
	
	/**
	 * Extend your document class with CitruxEngine and don't forget to call super() !
	 */
	public function new() {
		
		super();

		_instance = this;

		_stateDisplayIndex = 0;

		_playing = true;

		_startTime = Date.now().getTime();
		_gameTime = _startTime;

		//Set up input
		_input = new Input();

		//Set up sound manager
		_sound = new SoundManager();

		//Set up console
		_console = new Console();
		_console.addCommand("set", _handleConsoleSetCommand);
		this.addChild(_console);

		this.addEventListener(Event.ENTER_FRAME, _handleEnterFrame);
		this.addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);
	}

	static public function getInstance():CitruxEngine<Dynamic> {

		return _instance;
	}

	/**
	 * This is the game loop. It switches states if necessary, then calls update on the current state.
	 */
	private function _handleEnterFrame(evt:Event):Void {

		//Change states if it has been requested
		if (_newState != null) {

			if (_state != null)
				_state.destroy();

			_state = _newState;
			_newState = null;

			this.addChildAt(_state, _stateDisplayIndex);

			_state.initialize();
		}

		//Update the state
		if (_state != null && _playing) {

			var nowTime:Float = Date.now().getTime();
			var timeSinceLastFrame:Float = nowTime - _gameTime;
			var timeDelta:Float = timeSinceLastFrame * 0.001;
			_gameTime = nowTime;

			_state.update(timeDelta);
		}
	}

	/**
	 * A reference to the active game state. Acutally, that's not entirely true. If you've recently changed states and a tick
	 * hasn't occured yet, then this will reference your new state; this is because actual state-changes only happen pre-tick.
	 * That way you don't end up changing states in the middle of a state's tick, effectively fucking stuff up. 
	 */	
	public function getState():State<T> {
		return (_newState != null) ? _newState : _state;
	}
	
	/**
	 * We only ACTUALLY change states on enter frame so that we don't risk changing states in the middle of a state update.
	 * However, if you use the state getter, it will grab the new one for you, so everything should work out just fine.
	 */	
	public function setState(value:State<T>):State<T> {
		return _newState = value;
	}

	/**
	 * Runs and pauses the game loop. Assign this to false to pause the game and stop the
	 * <code>update()</code> methods from being called. 
	 */	
	public function getPlaying():Bool {
		return _playing;
	}

	public function setPlaying(value:Bool):Bool {

		_playing = value;

		if (_playing)
			_gameTime = Date.now().getTime();

		return _playing;
	}

	/**
	 * A reference to the Abstract GameData instance. Use it if you want.
	 * It's a dynamic class, so you don't have problem to access informations in its extended class.
	 */
	public function getGameData():T {
		return _gameData;
	}

	/**
	 * You may use a class to store your game's data, there is already an abstract class for that :
	 */
	public function setGameData(value:T):T {
		return _gameData = value;
	}

	/**
	 * You can get to my Input manager object from this reference so that you can see which keys are pressed and stuff. 
	 */		
	public function getInput():Input {
		return _input;
	}

	/**
	 * A reference to the SoundManager instance. Use it if you want.
	 */
	public function getSound():SoundManager {
		return _sound;
	}

	/**
	 * A reference to the console, so that you can add your own console commands. See the class documentation for more info.
	 * The console can be opened by pressing the tilde key (It looks like this: "~" right below the escape key).
	 * There is one console command built-in by default, but you can add more by using the addCommand() method.
	 * 
	 * <p>To try it out, try using the "set" command to change a property on a CitrusObject. You can toggle Box2D's
	 * debug draw visibility like this "set Box2D visible false". If your Box2D CitrusObject instance is not named
	 * "Box2D", use the name you gave it instead.</p>
	 */
	public function getConsole():Console {
		return _console;
	}

	/**
	 * Set up things that need the stage access.
	 */
	private function _handleAddedToStage(evt:Event):Void {

	 	this.removeEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

	 	Lib.current.stage.scaleMode = StageScaleMode.NO_SCALE;
		Lib.current.stage.align = StageAlign.TOP_LEFT;
		Lib.current.stage.addEventListener(Event.DEACTIVATE, _handleStageDeactivated);

		_input.initialize();
	}

	private function _handleStageDeactivated(evt:Event):Void {

		if (_playing) {

	 		_playing = false;
	 		Lib.current.stage.addEventListener(Event.ACTIVATE, _handleStageActivated);
	 	}
	}

	private function _handleStageActivated(evt:Event):Void {

	 	_playing = true;
	 	Lib.current.stage.removeEventListener(Event.ACTIVATE, _handleStageActivated);
	}

	private function _handleConsoleSetCommand(objectName:String, paramName:String, paramValue:String):Void {
		trace('function set exec');
	 	var object:CitruxObject = _state.getObjectByName(objectName);

		if (object == null) {

			trace("Warning: There is no object named " + objectName);
	 		return;
	 	}

	 	var value:Dynamic = paramValue;

	 	if (Reflect.hasField(object, paramName)) {
	 		Reflect.setField(object, paramName, value);
	 	} else {
	 		trace("Warning: " + objectName + " has no parameter named " + paramName + ".");
	 	}
	}
}