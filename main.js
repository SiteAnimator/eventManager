/*
    @package    SiteAnimator\Modules\EventManager

    file:       main.js
    function:   This file contains the main application module.  
                handels start after page load
                creates service modules
                
    Last revision: 12-09-2022
 
*/    

// create module function
( function( eventManager ){
    
    // MODULE: mainModule( named array: options ) void 
    eventManager.mainModule = function( options ) {
    
        // PRIVATE:
        
        // MEMBERS
        var self = this;                        // object
        self.moduleName = 'main';               // string
        self.options = options;                 // named array
        self.modules = {};                      // named array
    
        self.start = function() {
        // FUNCTION: start( void ) void

            // create services
            self.createServices();

            // create content
            self.createContent();

        // DONE FUNCTION: start( void ) void
        };
        self.createServices = function() {
        // FUNCTION: createServices( void ) void

            // create debugger module
            self.modules.debugger = new eventManager.service.debuggerModule( self.options['debugOptions'] );

            // create get ui id module
            self.modules.getUiId = new eventManager.service.getUiIdModule( );

            // create html generator module
            self.modules.htmlGenerator = new eventManager.service.htmlGeneratorModule( );

            // create get element module
            self.modules.getElement = new eventManager.service.getElementModule( );
            
            // create event manager module
            self.modules.eventManager = new eventManager.service.eventManagerModule( );

        // DONE FUNCTION: createServices( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // get content module
            let contentModule = eventManager.content.contentModule;

            // create content module
            self.modules.content = new contentModule();

        // DONE FUNCTION: createContent( void ) void
        };

        // PUBLIC
        return {
            
            // FUNCTION: start( void ) void    
            start : function( ){
                
                // call internal
                self.start( );
                
            }
            
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: mainModule( named array: options ) void
    
})( eventManager );
// done create module function
        
