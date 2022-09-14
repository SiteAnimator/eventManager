/*
        @package    SiteAnimator/Modules/EventManager
  
        file:       exampleModule.js
        function:   Generates a HTML element for the content.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( eventManager ){
    
    // create name spaces
    eventManager.content = eventManager.content ? eventManager.content : {};
    eventManager.content.example = eventManager.content.example ? eventManager.content.example : {};
    // create name spaces
    
    // MODULE: exampleModule( html element id: parentId ) void 
    eventManager.content.example.exampleModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'exampleModule';                  // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Content' ),     // string 
            'element'               :   'div',              // html element type 
            'display'               :   'flex',             // css
            'flexWrap'              :   'wrap',             // css
            'justifyContent'        :   'center',           // css
            'margin'                :   '20px auto',        // css
            'maximumWidth'          :   '80%',              // css
            'minimumWidth'          :   '100px',            // css
            'minimumHeight'         :   '200px',            // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.leftPanelOptions = {                           // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'leftPanel' ),     // string 
            'element'               :   'div',              // html element type 
            'padding'               :   '10px',             // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.rightPanelOptions = {                          // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'rightPanel' ),     // string 
            'element'               :   'div',              // html element type 
            'padding'               :   '10px',             // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.eventButton = null;                            // module / null
        self.numberOfSubscriptionButtons = 6;               // integer
        self.subscriptionButtons = [];                      // array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'Example module construct' );
 
            // create html
            self.createHtml();
  
            // create content
            self.createContent();
  
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            eventManager.appendContainer( self.parentId, self.containerOptions );
            
            // add content to container
            eventManager.appendContainer( self.containerOptions['id'], self.contentOptions );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // create left panel
            eventManager.appendContainer( self.contentOptions['id'], self.leftPanelOptions );
            
            // create right panel
            eventManager.appendContainer( self.contentOptions['id'], self.rightPanelOptions );
            
            // create buttons
            self.createButtons();
            
        // DONE FUNCTION: createContent( void ) void
        };
        self.createButtons = function() {
        // FUNCTION: createButtons( void ) void
        
            // create event button
            self.createEventButton();
            
            // create subscription buttons
            self.createSubscriptionButtons();

        // DONE FUNCTION: createButtons( void ) void
        };
        self.createEventButton = function() {
        // FUNCTION: createButtons( void ) void

            // get event button module
            let buttonModule = eventManager.content.example.eventButtonModule;
            
            // create event button
            self.eventButton = new buttonModule( self.leftPanelOptions['id'] );

        // DONE FUNCTION: createEventButton( void ) void
        };
        self.createSubscriptionButtons = function() {
        // FUNCTION: createSubscriptionButtons( void ) void

            // get subscription button module
            let buttonModule = eventManager.content.example.subscriptionButtonModule;
            
            // loop for number of subscription buttons
            for( let i = 0; i < self.numberOfSubscriptionButtons; i++ ){
                
                // create subscription button
                let subscriptionButton = new buttonModule( self.rightPanelOptions['id'] );

                // add to subscription buttons
                self.subscriptionButtons.push( subscriptionButton );

            }
            // loop for number of subscription buttons
            
        // DONE FUNCTION: createSubscriptionButtons( void ) void
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
    // DONE MODULE: exampleModule( html element id: parentId  ) void 
    
})( eventManager );
// done create module function
