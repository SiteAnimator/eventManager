/*
        @package    SiteAnimator/Modules/EventManager
  
        file:       introModule.js
        function:   Creates the HTML for the intro.
  
        Last revision: 16-06-2022
 
*/

// create module function
( function( eventManager ){
    
    // create name space
    eventManager.content = eventManager.content ? eventManager.content : {};
    
    // MODULE: introModule( html element id: parentId ) void 
    eventManager.content.introModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'introModule';                    // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :   eventManager.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.titleOptions = {                               // named array 
            'id'                    :   eventManager.getUiId( self.moduleName + 'Title' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This is a demonstration of Javascript application build with modules.',  // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'darkGoldenRod',    // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        self.introOptions = {                               // named array 
            'id'                    :   eventManager.getUiId( self.moduleName + 'Intro' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'The application demonstrates the use of an event manager module<br>' +
                                        'that adds an event subscription service.<br>' +
                                        'Modules can subscribe, unsubscribe and call custom events. ',  // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'darkGoldenRod',    // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'intro module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            $( '#' + self.parentId ).append( eventManager.generateHtml( self.containerOptions ) );
            
            // add title to container
            $( '#' + self.containerOptions['id'] ).append( eventManager.generateHtml( self.titleOptions ) );
        
            // add intro to container
            $( '#' + self.containerOptions['id'] ).append( eventManager.generateHtml( self.introOptions ) );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // debug
                eventManager.debug( self.moduleName + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: introModule( html element id: parentId ) void 
    
})( eventManager );
// done create module function
