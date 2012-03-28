package com.citruxengine.view;

interface ISpriteView  {
	
	var x(getX, never):Float;
	var y(getY, never):Float;
	var parallax(getParallax, never):Float;
	var rotation(getRotation, never):Float;
	var group(getGroup, never):Int;
	var visible(getVisible, never):Bool;
	var view(getView, never):Dynamic;
	var animation(getAnimation, never):String;
	var inverted(getInverted, never):Bool;
	var offsetX(getOffsetX, never):Float;
	var offsetY(getOffsetY, never):Float;
	var registration(getRegistration, never):String;

	function getX():Float;
	
	function getY():Float;
	
	function getParallax():Float;
	
	function getRotation():Float;
	
	function getGroup():Int;
	
	function getVisible():Bool;
	
	function getView():Dynamic;
	
	function getAnimation():String;
	
	function getInverted():Bool;
	
	function getOffsetX():Float;
	
	function getOffsetY():Float;
	
	function getRegistration():String;
}