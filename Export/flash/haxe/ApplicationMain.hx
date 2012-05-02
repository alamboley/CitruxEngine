import fr.aymericlamboley.test.Main;
import nme.Assets;
import nme.events.Event;


class ApplicationMain {
	
	static var mPreloader:NMEPreloader;

	public static function main () {
		
		var call_real = true;
		
		
		var loaded:Int = nme.Lib.current.loaderInfo.bytesLoaded;
		var total:Int = nme.Lib.current.loaderInfo.bytesTotal;
		
		if (loaded < total || true) /* Always wait for event */ {
			
			call_real = false;
			mPreloader = new NMEPreloader();
			nme.Lib.current.addChild(mPreloader);
			mPreloader.onInit();
			mPreloader.onUpdate(loaded,total);
			nme.Lib.current.addEventListener (nme.events.Event.ENTER_FRAME, onEnter);
			
		}
		
		
		if (call_real)
			begin ();
	}
	
	private static function begin () {
		
		var hasMain = false;
		
		for (methodName in Type.getClassFields(fr.aymericlamboley.test.Main))
		{
			if (methodName == "main")
			{
				hasMain = true;
				break;
			}
		}
		
		if (hasMain)
		{
			Reflect.callMethod (fr.aymericlamboley.test.Main, Reflect.field (fr.aymericlamboley.test.Main, "main"), []);
		}
		else
		{
			nme.Lib.current.addChild(cast (Type.createInstance(fr.aymericlamboley.test.Main, []), nme.display.DisplayObject));	
		}
		
	}

	static function onEnter (_) {
		
		var loaded:Int = nme.Lib.current.loaderInfo.bytesLoaded;
		var total:Int = nme.Lib.current.loaderInfo.bytesTotal;
		mPreloader.onUpdate(loaded,total);
		
		if (loaded >= total) {
			
			nme.Lib.current.removeEventListener(nme.events.Event.ENTER_FRAME, onEnter);
			mPreloader.addEventListener (Event.COMPLETE, preloader_onComplete);
			mPreloader.onLoaded();
			
		}
		
	}

	public static function getAsset (inName:String):Dynamic {
		
		
		if (inName=="Assets/background.jpg")
			 
            return Assets.getBitmapData ("Assets/background.jpg");
         
		
		if (inName=="Assets/baddy.png")
			 
            return Assets.getBitmapData ("Assets/baddy.png");
         
		
		if (inName=="Assets/baddy.xml")
			 
            return Assets.getBytes ("Assets/baddy.xml");
         
		
		if (inName=="Assets/collect.wav")
			 
            return Assets.getSound ("Assets/collect.wav");
         
		
		if (inName=="Assets/crate.png")
			 
            return Assets.getBitmapData ("Assets/crate.png");
         
		
		if (inName=="Assets/hero.png")
			 
            return Assets.getBitmapData ("Assets/hero.png");
         
		
		if (inName=="Assets/hero.xml")
			 
            return Assets.getBytes ("Assets/hero.xml");
         
		
		if (inName=="Assets/jewel.png")
			 
            return Assets.getBitmapData ("Assets/jewel.png");
         
		
		if (inName=="Assets/LevelA1.swc")
			 
            return Assets.getBytes ("Assets/LevelA1.swc");
         
		
		if (inName=="Assets/LevelA1.swf")
			 
            return Assets.getBytes ("Assets/LevelA1.swf");
         
		
		
		return null;
		
	}
	
	
	private static function preloader_onComplete (event:Event):Void {
		
		mPreloader.removeEventListener (Event.COMPLETE, preloader_onComplete);
		
		nme.Lib.current.removeChild(mPreloader);
		mPreloader = null;
		
		begin ();
		
	}
	
}



	
		class NME_assets_background_jpg extends nme.display.BitmapData { public function new () { super (0, 0); } }
	

	
		class NME_assets_baddy_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
	

	
		class NME_assets_baddy_xml extends nme.utils.ByteArray { }
	

	
		class NME_assets_collect_wav extends nme.media.Sound { }
	

	
		class NME_assets_crate_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
	

	
		class NME_assets_hero_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
	

	
		class NME_assets_hero_xml extends nme.utils.ByteArray { }
	

	
		class NME_assets_jewel_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
	

	
		class NME_assets_levela1_swc extends nme.utils.ByteArray { }
	

	
		class NME_assets_levela1_swf extends nme.utils.ByteArray { }
	
