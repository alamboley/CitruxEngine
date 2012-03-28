package nme.installer;


import nme.display.Bitmap;
import nme.display.BitmapData;
import nme.media.Sound;
import nme.net.URLRequest;
import nme.text.Font;
import nme.utils.ByteArray;
import ApplicationMain;


/**
 * ...
 * @author Joshua Granick
 */

class Assets {
	
	
	public static var cachedBitmapData:Hash<BitmapData> = new Hash<BitmapData>();
	
	
	public static function getBitmapData (id:String, useCache:Bool = true):BitmapData {
		
		// Should be bitmapData.clone (), but stopped working in recent Jeash builds
		// Without clone, BitmapData is already cached, so ignoring the hash table for now
		
		switch (id) {
			
			
		}
		
		return null;
		
	}
	
	
	public static function getBytes (id:String):ByteArray {
		
		switch (id) {
			
			//
		}
		
		return null;
		
	}
	
	
	public static function getFont (id:String):Font {
		
		switch (id) {
			
			
		}
		
		return null;
		
	}
	
	
	public static function getSound (id:String):Sound {
		
		switch (id) {
			
			
		}
		
		return null;
		
	}
	
	
	public static function getText (id:String):String {
		
		switch (id) {
			
			
		}
		
		return null;
		
	}
	
	
}