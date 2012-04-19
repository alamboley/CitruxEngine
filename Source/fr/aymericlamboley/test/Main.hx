package fr.aymericlamboley.test;

import com.citruxengine.core.CitruxEngine;

import fr.aymericlamboley.test.GameState;

import nme.display.FPS;
import nme.Lib;

/**
 * @author Aymeric Lamboley
 */
class Main extends CitruxEngine {

	public static function main() {
		
		Lib.current.addChild(new Main());		
	}
	
	public function new() {
		
		super ();

		sound.addSound("collect", "Assets/collect.wav");

		state = new GameState();

		this.addChild(new FPS(0, 0, 0xFF6600));
	}
}