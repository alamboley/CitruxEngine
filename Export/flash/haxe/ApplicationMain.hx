import fr.aymericlamboley.test.Main;
import nme.Assets;
import nme.events.Event;


class ApplicationMain {
	
	static var mPreloader:NMEPreloader;

	public static function main () {
		
		var call_real = true;
		
		
		var loaded:Int = nme.Lib.current.loaderInfo.bytesLoaded;
		var total:Int = nme.Lib.current.loaderInfo.bytesTotal;
		
		nme.Lib.current.stage.align = nme.display.StageAlign.TOP_LEFT;
		nme.Lib.current.stage.scaleMode = nme.display.StageScaleMode.NO_SCALE;
		
		if (loaded < total || true) /* Always wait for event */ {
			
			call_real = false;
			mPreloader = new NMEPreloader();
			nme.Lib.current.addChild(mPreloader);
			mPreloader.onInit();
			mPreloader.onUpdate(loaded,total);
			nme.Lib.current.addEventListener (nme.events.Event.ENTER_FRAME, onEnter);
			
		}
		
		
		
		haxe.Log.trace = flashTrace; // null
		

		if (call_real)
			begin ();
	}

	
	private static function flashTrace( v : Dynamic, ?pos : haxe.PosInfos ) {
		var className = pos.className.substr(pos.className.lastIndexOf('.') + 1);
		var message = className+"::"+pos.methodName+":"+pos.lineNumber+": " + v;

        if (flash.external.ExternalInterface.available)
			flash.external.ExternalInterface.call("console.log", message);
		else untyped flash.Boot.__trace(v, pos);
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
         
		
		if (inName=="Assets/baddySparrow.png")
			 
            return Assets.getBitmapData ("Assets/baddySparrow.png");
         
		
		if (inName=="Assets/baddySparrow.xml")
			 
			 return Assets.getText ("Assets/baddySparrow.xml");
         
		
		if (inName=="Assets/baddySpriteLoq.png")
			 
            return Assets.getBitmapData ("Assets/baddySpriteLoq.png");
         
		
		if (inName=="Assets/baddySpriteLoq.xml")
			 
			 return Assets.getText ("Assets/baddySpriteLoq.xml");
         
		
		if (inName=="Assets/collect.wav")
			 
            return Assets.getSound ("Assets/collect.wav");
         
		
		if (inName=="Assets/crate.png")
			 
            return Assets.getBitmapData ("Assets/crate.png");
         
		
		if (inName=="Assets/heroSparrow.png")
			 
            return Assets.getBitmapData ("Assets/heroSparrow.png");
         
		
		if (inName=="Assets/heroSparrow.xml")
			 
			 return Assets.getText ("Assets/heroSparrow.xml");
         
		
		if (inName=="Assets/heroSpriteLoq.png")
			 
            return Assets.getBitmapData ("Assets/heroSpriteLoq.png");
         
		
		if (inName=="Assets/heroSpriteLoq.xml")
			 
			 return Assets.getText ("Assets/heroSpriteLoq.xml");
         
		
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
class NME_assets_baddysparrow_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_baddysparrow_xml extends nme.utils.ByteArray { }
class NME_assets_baddyspriteloq_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_baddyspriteloq_xml extends nme.utils.ByteArray { }
class NME_assets_collect_wav extends nme.media.Sound { }
class NME_assets_crate_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_herosparrow_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_herosparrow_xml extends nme.utils.ByteArray { }
class NME_assets_herospriteloq_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_herospriteloq_xml extends nme.utils.ByteArray { }
class NME_assets_jewel_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_levela1_swc extends nme.utils.ByteArray { }
class NME_assets_levela1_swf extends nme.utils.ByteArray { }

