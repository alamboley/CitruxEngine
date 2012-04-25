package com.citruxengine.core;

import nme.display.Sprite;
import nme.events.Event;
import nme.events.FocusEvent;
import nme.events.KeyboardEvent;
import nme.Lib;
import nme.net.SharedObject;
import nme.text.TextField;
import nme.text.TextFieldType;
import nme.text.TextFormat;
import nme.ui.Keyboard;

class Console extends Sprite {

	public var enabled(getEnabled, setEnabled):Bool;

	private var _commandDelegates:Hash<String->String->String->Void>;
	private var _shared:SharedObject;

	private var _inputField:TextField;

	private var _openKey:Int;
	private var _executeKey:Int;

	private var _showing:Bool;

	var _enabled:Bool;

	public function new() {

		super();

		_shared = SharedObject.getLocal("history");
		_commandDelegates = new Hash<String->String->String->Void>();

		_inputField = cast(addChild(new TextField()), TextField);
		_inputField.type = TextFieldType.INPUT;
		_inputField.addEventListener(FocusEvent.FOCUS_OUT, _onConsoleFocusOut);
		_inputField.defaultTextFormat = new TextFormat("_sans", 14, 0xFFFFFF, false, false, false);

		_openKey = Keyboard.TAB;
		_executeKey = Keyboard.ENTER;

		this.addEventListener(Event.ADDED_TO_STAGE, _onAddedToStage);

		this.visible = _showing = _enabled = false;
	}

	public function addCommand(name:String, func:String->String->String->Void):Void {

		_commandDelegates.set(name, func);
	}

	public function hideConsole():Void {

        if (_showing) {

            _showing = this.visible = false;

            Lib.current.stage.removeEventListener(KeyboardEvent.KEY_UP, _onKeyPressInConsole);
        }
	}

	public function showConsole():Void {
	    
	    if (!_showing) {
	            
            _showing =  this.visible = true;
           
            Lib.current.stage.focus = _inputField;

            Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onKeyPressInConsole);
	    }
	}

	public function toggleConsole():Void {
		_showing ? hideConsole() : showConsole();
	}

	public function clearConsole():Void {
		_inputField.text = "";
	}


	private function _onAddedToStage(evt:Event):Void {

		this.graphics.beginFill(0x000000, 0.8);
		this.graphics.drawRect(0, 0, Lib.current.stage.stageWidth, 30);
		this.graphics.endFill();

		_inputField.width = Lib.current.stage.stageWidth;
		_inputField.y = 4;
		_inputField.x = 4;

		Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onToggleKeyPress);
	}

	private function _onConsoleFocusOut(fEvt:FocusEvent):Void {
	 	hideConsole();
	}

	private function _onToggleKeyPress(kEvt:KeyboardEvent):Void {

		if (cast(kEvt.keyCode, Int) == _openKey)
			toggleConsole();
	}

	private function _onKeyPressInConsole(kEvt:KeyboardEvent):Void {

		if (cast(kEvt.keyCode, Int) == _executeKey) {

			if (_inputField.text == "" || _inputField.text == " ")
				return;

			var args:Array<String> = _inputField.text.split(" ");
			var command:String = args.shift();

			clearConsole();
			hideConsole();

			// TODO :
			var func:String->String->String->Void = Reflect.getProperty(_commandDelegates, "set");			
			func("Box2D", "visible", "false");
			//trace(Reflect.callMethod(this.parent, Reflect.getProperty(_commandDelegates, "set"), ["Box2D", "visible", "false"]));
		}
	}

	/**
	 * Determines whether the console can be used. Set this property to false before releasing your final game. 
	 */
	public function getEnabled():Bool {
		return _enabled;
	}

	public function setEnabled(value:Bool):Bool {

		if (_enabled == value)
			return _enabled;

		_enabled = value;

		if (_enabled) {

			Lib.current.stage.addEventListener(KeyboardEvent.KEY_UP, _onToggleKeyPress);

		} else {

			Lib.current.stage.removeEventListener(KeyboardEvent.KEY_UP, _onToggleKeyPress);
			hideConsole();
		}

		return _enabled;
	}

}