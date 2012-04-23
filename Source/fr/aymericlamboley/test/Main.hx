package fr.aymericlamboley.test;

import com.citruxengine.core.CitruxEngine;

import nme.display.FPS;
import nme.events.Event;
import nme.Lib;

/**
 * @author Aymeric Lamboley
 */
class Main extends CitruxEngine<GameData> {

	public static function main() {
		
		Lib.current.addChild(new Main());		
	}
	
	public function new() {
		
		super ();

		sound.addSound("collect", "Assets/collect.wav");

		gameData = new GameData();

		state = new GameState();

		this.addChild(new FPS(0, 0, 0xFF6600));
	}

}