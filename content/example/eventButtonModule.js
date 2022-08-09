/*
        @package    SiteAnimator/Modules/EventManager
  
        file:       eventButtonModule.js
        function:   Generates a button to call an event.
  
        Last revision: 04-08-2022
 
*/

// create module function
( function( eventManager ){
        
    // MODULE: eventButtonModule( html element id: parentId ) void 
    eventManager.content.example.eventButtonModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'eventButtonModule';              // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.buttonOptions = {                              // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Button' ),     // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'call event',       // string 
            'padding'               :   '6px 12px',         // css
            'backgroundColor'       :   'teal',             // css
            'border'                :   'true',             // boolean
            'borderColor'           :   'black',            // css
            'borderWidth'           :   '1px',              // css
            'borderStyle'           :   'solid',            // css
            'borderRadius'          :   '4px',              // css
            'colors' : {                                    // named array
                'color'             :   'white',            // color
                'highlight'         :   'blue',             // color
                'background' : {                            // named array
                    'color'         :   'teal',             // color
                    'highlight'     :   'white'             // color
                },                                          // done named array
                'border' : {                                // named array    
                    'color'         :   'teal',             // color
                    'highlight'     :   'red'               // color
                }                                           // done named array
            },                                              // done named array
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'Event button module construct' );
 
            // create html
            self.createHtml();
  
            // create button
            self.createButton();
  
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            $( '#' + self.parentId ).append( eventManager.generateHtml( self.containerOptions ) );
            
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createButton = function() {
        // FUNCTION: createButton( void ) void

            // get button module
            let buttonModule = eventManager.service.buttonModule;
            
            // create callbacks
            let callbacks = {
                'mouseOver'     :   self.mouseOver,
                'mouseOut'      :   self.mouseOut,
                'click'         :   self.click
            };
            // create callbacks
            
            // add button
            self.modules['button'] = new buttonModule( self.containerOptions['id'],
                                                       self.buttonOptions,
                                                       callbacks );
            // add button

        // DONE FUNCTION: createButton( void ) void
        };
        self.mouseOver = function( event, options ) {
        // FUNCTION: mouseOver( event: event, named array: options ) void

        // DONE FUNCTION: mouseOver( event: event, named array: options ) void
        };
        self.mouseOut = function( event, options ) {
        // FUNCTION: mouseOut( event: event, named array: options ) void

        // DONE FUNCTION: mouseOut( event: event, named array: options ) void
        };
        self.click = function( event, options ) {
        // FUNCTION: click( event: event, named array: options ) void

            // call global event
            eventManager.callEvent( 'eventButtonClick' );

        // DONE FUNCTION: click( event: event, named array: options ) void
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
    // DONE MODULE: eventButtonModule( html element id: parentId  ) void 
    
})( eventManager );
// done create module function
