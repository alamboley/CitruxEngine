package nme.installer;


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
	
	private static var initialized:Bool = false;
	private static var resourceClasses:Hash <Dynamic> = new Hash <Dynamic> ();
	private static var resourceTypes:Hash <String> = new Hash <String> ();
	
	
	private static function initialize ():Void {
		
		if (!initialized) {
			
			resourceClasses.set ("Assets/background.jpg", NME_assets_background_jpg);
			resourceTypes.set ("Assets/background.jpg", "image");
			resourceClasses.set ("Assets/baddy.png", NME_assets_baddy_png);
			resourceTypes.set ("Assets/baddy.png", "image");
			resourceClasses.set ("Assets/baddy.xml", NME_assets_baddy_xml);
			resourceTypes.set ("Assets/baddy.xml", "text");
			resourceClasses.set ("Assets/collect.wav", NME_assets_collect_wav);
			resourceTypes.set ("Assets/collect.wav", "sound");
			resourceClasses.set ("Assets/crate.png", NME_assets_crate_png);
			resourceTypes.set ("Assets/crate.png", "image");
			resourceClasses.set ("Assets/hero.png", NME_assets_hero_png);
			resourceTypes.set ("Assets/hero.png", "image");
			resourceClasses.set ("Assets/hero.xml", NME_assets_hero_xml);
			resourceTypes.set ("Assets/hero.xml", "text");
			resourceClasses.set ("Assets/jewel.png", NME_assets_jewel_png);
			resourceTypes.set ("Assets/jewel.png", "image");
			resourceClasses.set ("Assets/LevelA1.swc", NME_assets_levela1_swc);
			resourceTypes.set ("Assets/LevelA1.swc", "binary");
			resourceClasses.set ("Assets/LevelA1.swf", NME_assets_levela1_swf);
			resourceTypes.set ("Assets/LevelA1.swf", "binary");
			
			initialized = true;
			
		}
		
	}
	
	
	public static function getBitmapData (id:String, useCache:Bool = true):BitmapData {
		
		initialize ();
		
		if (resourceTypes.exists (id) && resourceTypes.get (id) == "image") {
			
			if (useCache && cachedBitmapData.exists (id)) {
				
				return cachedBitmapData.get (id);
				
			} else {
				
				var data = cast (Type.createInstance (resourceClasses.get (id), []), BitmapData);
				
				if (useCache) {
					
					cachedBitmapData.set (id, data);
					
				}
				
				return data;
				
			}
			
		} else {
			
			trace ("[nme.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
			
			return null;
			
		}
		
	}
	
	
	public static function getBytes (id:String):ByteArray {
		
		initialize ();
		
		if (resourceClasses.exists (id)) {
			
			return Type.createInstance (resourceClasses.get (id), []);
			
		} else {
			
			trace ("[nme.Assets] There is no ByteArray asset with an ID of \"" + id + "\"");
			
			return null;
			
		}
		
	}
	
	
	public static function getFont (id:String):Font {
		
		initialize ();
		
		if (resourceTypes.exists (id) && resourceTypes.get (id) == "font") {
			
			return cast (Type.createInstance (resourceClasses.get (id), []), Font);
			
		} else {
			
			trace ("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"");
			
			return null;
			
		}
		
	}
	
	
	public static function getSound (id:String):Sound {
		
		initialize ();
		
		if (resourceTypes.exists (id)) {
			
			if (resourceTypes.get (id) == "sound" || resourceTypes.get (id) == "music") {
				
				return cast (Type.createInstance (resourceClasses.get (id), []), Sound);
				
			}
			
		}
		
		trace ("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"");
		
		return null;
		
	}
	
	
	public static function getText (id:String):String {
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
	}
	
	
}