package fr.aymericlamboley.test;

import com.citruxengine.core.CitruxEngine;

import fr.aymericlamboley.test.GameState;

import nme.display.StageAlign;
import nme.display.StageScaleMode;
import nme.Lib;

/**
 * @author Aymeric Lamboley
 */
class Main extends CitruxEngine {

	public static function main() {
		
		Lib.current.addChild (new Main());		
	}
	
	public function new() {
		
		super ();

		Lib.current.stage.scaleMode = StageScaleMode.NO_SCALE;
		Lib.current.stage.align = StageAlign.TOP_LEFT;

		state = new GameState();
	}
	
}