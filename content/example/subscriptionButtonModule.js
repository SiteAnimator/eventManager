/*
        @package    SiteAnimator/Modules/EventManager
  
        file:       subscriptionButtonModule.js
        function:   Generates a button to subscribe to an event or
                    unsubscribe from an event.
  
        Last revision: 04-08-2022
 
*/

// create module function
( function( eventManager ){
    
    // create name spaces
    eventManager.content = eventManager.content ? eventManager.content : {};
    eventManager.content.example = eventManager.content.example ? eventManager.content.example : {};
    // create name spaces
    
    // MODULE: subscriptionButtonModule( html element id: parentId ) void 
    eventManager.content.example.subscriptionButtonModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'subscriptionButtonModule';       // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent'       // css
        };                                                  // done named array  
        self.buttonOptions = {                              // named array 
            'id'                    :    eventManager.getUiId( self.moduleName + 'Button' ),     // string 
            'element'               :   'div',              // html element type 
            'padding'               :   '6px 12px',         // css
            'marginBottom'          :   '12px',             // css
            'backgroundColor'       :   'teal',             // css
            'border'                :   'true',             // boolean
            'borderWidth'           :   '1px',              // css
            'borderStyle'           :   'solid',            // css
            'borderRadius'          :   '4px',              // css
            'state' : {                                     // named array
                'active'                    : false         // boolean
            },                                              // done named array
            'states' : {                                    // named array
                'active' : {                                // named array
                    'text'                  :   'Active',   // string 
                    'colors' : {                            // named array
                        'color'             :   'white',    // color
                        'highlight'         :   'blue',     // color
                        'background' : {                    // named array
                            'color'         :   'teal',     // color
                            'highlight'     :   'white'     // color
                        },                                  // done named array
                        'border' : {                        // named array    
                            'color'         :   'teal',     // color
                            'highlight'     :   'red'       // color
                        }                                   // done named array
                    }                                       // done named array
                },                                          // done named array
                'inActive' : {                              // named array
                    'text'                  :   'Inactive', // string 
                    'colors' : {                            // named array
                        'color'             :   'silver',   // color
                        'highlight'         :   'blue',     // color
                        'background' : {                    // named array
                            'color'         :   'grey',     // color
                            'highlight'     :   'white'     // color
                        },                                  // done named array
                        'border' : {                        // named array    
                            'color'         :   'grey',     // color
                            'highlight'     :   'red'       // color
                        }                                   // done named array
                    }                                       // done named array
                }                                           // done named array
            }                                               // done named array
        };                                                  // done named array  
        self.eventOptions = {                               // named array 
            'timer'                         :   null,       // timer / null
            'delay'                         :   200,        // integer
            'repeated'                      :   0,          // integer
            'repeat'                        :   5,          // integer
            'state' : {                                     // named array
                'isPlaying'                 :   false,      // boolean
                'highlighted'               :   false       // boolean
            },                                              // done named array
            'states' : {                                    // named array
                'highlight' : {                             // named array
                    'text'                  :   'Called',   // string 
                    'colors' : {                            // named array
                        'color'             :   'silver',   // color
                        'highlight'         :   'silver',   // color
                        'background' : {                    // named array
                            'color'         :   'red',      // color
                            'highlight'     :   'red'       // color
                        },                                  // done named array
                        'border' : {                        // named array    
                            'color'         :   'white',    // color
                            'highlight'     :   'white'     // color
                        }                                   // done named array
                    }                                       // done named array
                }                                           // done named array
            }                                               // done named array
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'Subscription button module construct' );
 
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

            // get active state
            let activeState = self.buttonOptions['state']['active'];

            // set text
            self.buttonOptions['text'] = activeState ? 
                                         self.buttonOptions['states']['active']['text'] :
                                         self.buttonOptions['states']['inActive']['text'];
            // set text
                                                 
            // set colors
            self.buttonOptions['colors'] = activeState ? 
                                           self.buttonOptions['states']['active']['colors'] :
                                           self.buttonOptions['states']['inActive']['colors'];
            // set colors
            
            // add button
            self.modules['button'] = new buttonModule( self.containerOptions['id'],
                                                       self.buttonOptions,
                                                       callbacks );
            // add button

        // DONE FUNCTION: createButton( void ) void
        };
        self.showState = function() {
        // FUNCTION: showState( void ) void

            // get active state
            let activeState = self.buttonOptions['state']['active'];

            // get text
            let text = activeState ? 
                       self.buttonOptions['states']['active']['text'] :
                       self.buttonOptions['states']['inActive']['text'];
            // set text
                       
            // set text
            $( '#' + self.buttonOptions['id'] ).html( text );
            
            // set colors
            self.buttonOptions['colors'] = activeState ? 
                                           self.buttonOptions['states']['active']['colors'] :
                                           self.buttonOptions['states']['inActive']['colors'];
            // set colors

            // refresh button
            self.modules['button'].refresh();

        // DONE FUNCTION: showState( void ) void
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

            // is active
            if( self.buttonOptions['state']['active'] ){
                 
                 // remove subscription
                 self.removeSubscription();
                 
            }
            // is active

            // ! active
            if( !self.buttonOptions['state']['active'] ){
                
                 // add subscription
                 self.addSubscription();
                 
            }
            // ! active

            // change active
            self.buttonOptions['state']['active'] = !self.buttonOptions['state']['active'];
            
            // show state
            self.showState();

        // DONE FUNCTION: click( event: event, named array: options ) void
        };
        self.addSubscription = function() {
        // FUNCTION: addSubscription( void ) void

            // create subscription
            eventManager.subscribeToEvent( 'eventButtonClick', self.eventCalled );

        // DONE FUNCTION: addSubscription( void ) void
        };
        self.removeSubscription = function() {
        // FUNCTION: removeSubscription( void ) void

            // remove subscription
            eventManager.unSubscribeFromEvent( 'eventButtonClick', self.eventCalled );

        // DONE FUNCTION: removeSubscription( void ) void
        };
        self.eventCalled = function() {
        // FUNCTION: eventCalled( void ) void

            // reset repeat
            self.eventOptions['repeated'] = 0;
                
            // event is playing
            if( self.eventOptions['state']['isPlaying'] ){

                // done
                return;
                
            }
            // event is playing
            
            // set playing
            self.eventOptions['state']['isPlaying'] = true;
            
            // highlight
            self.highlight();
            
            // repeat
            self.repeat();
            
        // DONE FUNCTION: eventCalled( void ) void
        };
        self.play = function() {
        // FUNCTION: play( void ) void

            // ! highlighted
            if( !self.eventOptions['state']['isHighlighted'] ){

                // highlight
                self.highlight();
                
            }
            // ! highlighted
            
            // is highlighted
            if( self.eventOptions['state']['isHighlighted'] ){

                // reset
                self.reset();
                
            }
            // is highlighted
            
            // set highlighted
            self.eventOptions['state']['isHighlighted'] = !self.eventOptions['state']['isHighlighted'];
                
            // repeat
            self.repeat();
                
        // DONE FUNCTION: play( void ) void
        };
        self.highlight = function() {
        // FUNCTION: highlight( void ) void

            // get text
            let text = self.eventOptions['states']['highlight']['text'];
                       
            // set text
            $( '#' + self.buttonOptions['id'] ).html( text );
            
            // set colors
            self.buttonOptions['colors'] = self.eventOptions['states']['highlight']['colors'];

            // refresh button
            self.modules['button'].refresh();

        // DONE FUNCTION: highlight( void ) void
        };
        self.reset = function() {
        // FUNCTION: reset( void ) void

            // show state
            self.showState();

            // update repeated
            self.eventOptions['repeated']++;
                
        // DONE FUNCTION: reset( void ) void
        };
        self.repeat = function() {
        // FUNCTION: repeat( void ) void

            // repeated >= repeat
            if( self.eventOptions['repeated'] >= self.eventOptions['repeat'] ){

                // reset is playing
                self.eventOptions['state']['isPlaying'] = false;
                
                // done
                return;
                
            }
            // repeated >= repeat

            // get delay
            let delay = self.eventOptions['delay'];

            // create timer
            self.eventOptions['timer'] = setTimeout( function () { self.play(); }, delay  );

        // DONE FUNCTION: repeat( void ) void
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
    // DONE MODULE: subscriptionButtonModule( html element id: parentId  ) void 
    
})( eventManager );
// done create module function
