/*!
	jQuery BarryFall plugin
	@name jquery.BarryFall.js
	@author WhenQi.Chen (Barry)
	@version 1.0.1
	@date 24/8/2016
*/

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function ($) {
    var BarryFall,defaultOptions,__bind,__getMinHeightIndex;
    defaultOptions = {
    	picPath:'',
    	minpicPath:'',
    	unitData:[],
    	autoResize:true,
    	imgWidth:0, // img/content width
    	introHeight:0, // intro height
    	innerOffset:0, // padding
    	outerOffset:0, // margin
    	onLayoutChangedFun:undefined, // trigger on layout was changed
    	onUnitClickFun:undefined, // trigger on unit was clicked
    	resizeDelay:50 // millisecond 
    };

    __bind = function(fn, me) {
	    return function() {
	      return fn.apply(me, arguments);
	    };
	};
	__getMinHeightIndex = function(arr,minH){
		for(var i in arr){
	        if(arr[i]==minH){
	            return i;
	        }
	    }
	};
	var $window = $(window);

	// Init BarryFall 
	BarryFall = function(handler,options){
		this.handler = handler;
		if(!this.handler.find('.unitContainer').lendth || this.handler.find('.unitContainer').lendth==0) {
			this.handler.append($('<div>').attr('class','unitContainer'));
		}
		this.container = this.handler.find('.unitContainer');
		this.handlerWidth = this.containerWidth = this.columnNum = this.unitWidth = this.resizeTimer = null;
      	this.unitItems = [];
      	this.columnHeightList = []; 
		$.extend(true, this, defaultOptions, options);

		this.onResize = __bind(this.onResize,this);
		this.layout = __bind(this.layout,this);
		this.layoutItems = __bind(this.layoutItems,this);
		this.appendUnit = __bind(this.appendUnit,this);
		this.positionUnit = __bind(this.positionUnit,this);
		this.bindEvt = __bind(this.bindEvt,this);

		if (this.autoResize) $window.bind('resize.barryFall', this.onResize);
	}

	// Update property
	BarryFall.prototype.update = function(options){
		$.extend(true,this,options);
	};

	// Resize layout
	BarryFall.prototype.onResize = function(){
		clearTimeout(this.resizeTimer);
	    this.resizeTimer = setTimeout(this.layoutItems, this.resizeDelay);
	};

	BarryFall.prototype.layout = function(){
		if(!this.handler.is(':visible')) return;

		this.unitWidth = this.imgWidth + 2 * (this.innerOffset);
		this.columnNum = Math.floor(this.handler.width() / (this.unitWidth + 2 * this.outerOffset));
		this.appendUnit();

		if (this.onLayoutChangedFun !== undefined && typeof this.onLayoutChangedFun === 'function') {
	    	this.onLayoutChangedFun();
	    }	
	};

	BarryFall.prototype.layoutItems = function(){
		this.unitWidth = this.imgWidth + 2 * (this.innerOffset);
		this.columnNum = Math.floor(this.handler.width() / (this.unitWidth + 2 * this.outerOffset));
		this.container.css({
			'position':'relative',
			'width': (this.unitWidth + 2 * this.outerOffset) * this.columnNum,
			'margin':'0 auto'});
		var self = this;
		self.columnHeightList = []; 
		$.each(this.unitItems,function(i,$unitDl){
			self.positionUnit($unitDl,i);
		});

		if (this.onLayoutChangedFun !== undefined && typeof this.onLayoutChangedFun === 'function') {
	    	this.onLayoutChangedFun();
	    }	
	};

	// Append all units to container
	BarryFall.prototype.appendUnit = function(){
		var i=0,self=this,mPath=this.minpicPath,unitData=this.unitData,inOffset=this.innerOffset,imgWidth = this.imgWidth,container = this.container,_imgUrl = [],introHeight = this.introHeight;
		container.css({
			'position':'relative',
			'width': (self.unitWidth + 2 * self.outerOffset) * self.columnNum,
			'margin':'0 auto'});
		for (; i < unitData.length; i++){
			var $unitDl = $('<dl>'),
				$unitDt = $('<dt>'),
				$unitDd = $('<dd>'),
				$unitImg = $('<img>'),
				unitHeight = Math.floor(imgWidth / unitData[i].width * unitData[i].height) + introHeight ;
			$unitDd.html(unitData[i].intro);
			$unitImg.attr('src',mPath+unitData[i].img).css('width',imgWidth);
			$unitDt.css({'width':imgWidth}).append($unitImg);
			$unitDl.css({'width':imgWidth,'height':unitHeight,'padding':inOffset}).append($unitDt).append($unitDd);

			container.append($unitDl);
			self.unitItems.push($unitDl);
			if(i == unitData.length-1) self.positionUnit($unitDl,i,true);
			else self.positionUnit($unitDl,i,false);

			this.bindEvent($unitDl,i);
		}
	};

	// Position all unit
	BarryFall.prototype.positionUnit = function(unit,index,last){
		var _unit = unit,
			unitH = _unit.outerHeight(),
			columnNum = this.columnNum,
			width = this.unitWidth,
			outOffset = this.outerOffset,
			columnHList = this.columnHeightList,
			container = this.container;
		if(index < columnNum){
			_unit.css({
				'position'	: 'absolute',
				'top'		: '0',
				'left'		: (outOffset + ( width + 2 * outOffset ) * index )+'px'
			});
			columnHList[index] = unitH;
		}else{
			var minH = Math.min.apply(null,this.columnHeightList);
			var minHIdx = __getMinHeightIndex(columnHList,minH);
			_unit.css({
				'position'	: 'absolute',
				'top'		: (minH + 2 * outOffset)+'px',
				'left'		: this.unitItems[minHIdx].css('left')
			});
			columnHList[minHIdx] += unit.outerHeight() + 2 * outOffset;
		}

		var _conH = minH+_unit[0].offsetHeight+2*outOffset,conHNow = container.css('height').replace('px','');
		if(_conH>conHNow) container.css('height',_conH+'px');
	};

	// Bind click event to every unit 
	BarryFall.prototype.bindEvent =function($unit,index){
		if (this.onUnitClickFun !== undefined && typeof this.onUnitClickFun === 'function') {
			var self = this;
			$unit.click(function(){
				self.onUnitClickFun(index);
			});
		}
	}

	$.fn.barryFall = function(options) {
	    // Create a barryFall instance if not available
	    if (!$(this)[0].barryFallInstance) {
	      this.barryFallInstance = new BarryFall(this, options || {});
	    } else {
	      this.barryFallInstance.update(options || {});
	    }

	    // Apply layout
	    this.barryFallInstance.layout(true);

	    // Display items (if hidden) and return jQuery object 
	    return this.show();
	};
}));