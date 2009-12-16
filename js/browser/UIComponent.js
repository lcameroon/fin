jsio('from common.javascript import Class');
jsio('import common.Publisher');
jsio('import browser.css')

exports = Class(common.Publisher, function(supr) {
	this.getElement = function() {
		if (!this._element) { 
			this._element = document.createElement('div');
			this.createContent();
		}
		return this._element;
	}
	
	this.createContent = function() {} // abstract method
	
	this.addClassName = function(className) { 
		browser.css.addClassName(this.getElement(), className);
	}
	this.removeClassName = function(className) { 
		browser.css.removeClassName(this.getElement(), className);
	}
})
