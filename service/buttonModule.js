/*
    @package    SiteAnimator\Modules\EventManager

    file:       buttonModule.js
    function:   creates a HTML element and handels the events
                handles state changes

    Last revision: 09-08-2022
 
*/    

// create module function
( function( eventManager ){
        
    // MODULE: buttonModule( html element id: parentId, 
    //                       named array: options,
    //                       named array: callbacks  ) named array
        
    // create name space
    eventManager.service = eventManager.service ? eventManager.service : {};
    
    eventManager.service.buttonModule = function( parentId, 
                                                  options, 
                                                  callbacks ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'buttonModule';                       // string
        self.parentId = parentId;                           // html element id
        self.options = options;                             // named array
        self.callbacks = callbacks;                         // function
        self.enabled = true;                                // boolean
        self.mouseIsOver = false;                           // boolean
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // add html
            self.addHtml();
            
            // add events
            self.addEvents();
            
            // event subscription
            self.addEventSubscriptions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addEventSubscriptions = function(){
        // FUNCTION: layoutChange( void ) void
        
            // subscribe to disable ui events
            eventManager.subscribeToEvent( 'disableUiEvents', self.disable );
            
            // subscribe to enable ui events
            eventManager.subscribeToEvent( 'enableUiEvents', self.enable );
            
        // DONE FUNCTION: layoutChange( void ]) void
        };
        self.removeEventSubscriptions = function(){
        // FUNCTION: removeEventSubscriptions( void ) void
        
            // unsubscribe from disable ui events
            eventManager.unSubscribeFromEvent( 'disableUiEvents', self.disable );
            
            // unsubscribe from enable ui events
            eventManager.unSubscribeFromEvent( 'enableUiEvents', self.enable );
            
        // DONE FUNCTION: removeEventSubscriptions( void ]) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
            
            // debug info
            self.debug( 'addHtml' );

            // add container to parent
            $( '#' + self.parentId ).append( eventManager.generateHtml( self.options ) );

        // DONE FUNCTION: addHtml( void ) void
        };
        self.removeHtml = function() {
        // FUNCTION: removeHtml( void ) void
            
            // debug info
            self.debug( 'removeHtml' );

            // remove container
            $( '#' + self.options['id'] ).remove();
            
        // DONE FUNCTION: removeHtml( void ) void
        };
        self.addEvents = function() {
        // FUNCTION: addEvents( void ) void
         
            // debug info
            self.debug( 'addEvents: ' + self.options['id']);
        
            // add basic
            self.addBasicEvents();

            // add key events
            self.addKeyEvents();

        // DONE FUNCTION: addEvents( void ) void
        };            
        self.addBasicEvents = function() {
        // FUNCTION: addBasicEvents( void ) void
            
            // mouse over callback exists
            if( self.callbacks['mouseOver'] !== undefined ){
            
                // add mouse over
                $( '#' + self.options['id'] ).mouseover( function( event ){ self.mouseOver( event ); }); 
                
            }
            // mouse over callback exists
            
            // mouse out callback exists
            if( self.callbacks['mouseOut'] !== undefined ){
            
                // add mouse out
                $( '#' + self.options['id'] ).mouseout( function( event ){ self.mouseOut(event ); }); 
                
            }
            // mouse out callback exists
            
            // click callback exists
            if( self.callbacks['click'] !== undefined ){
            
                // add click
                $( '#' + self.options['id'] ).click( function( event ){ self.click( event ); });  
                
            }
            // click callback exists

        // DONE FUNCTION: addBasicEvents( void ) void
        };            
        self.addKeyEvents = function() {
        // FUNCTION: addKeyUp( void ) void
            
            // key up callback exists
            if( self.callbacks['keyUp'] !== undefined ){

                // add key up 
                $( '#' + self.options['id'] ).keyup( function( ){ self.keyUp( event ); });
                
            }
            // key up callback exists
            
            // key down callback exists
            if( self.callbacks['keyDown'] !== undefined ){

                // add key down
                $( '#' + self.options['id'] ).keydown( function( ){ self.keyDown( event ); });
                
            }
            // key down callback exists
            
        // DONE FUNCTION: addKeyEvents( void ) void
        };            
        self.removeEvents = function() {
        // FUNCTION: removeEvents( void ) void
        
            // remove button events
            $( '#' + self.options['id'] ).off( );
            
        // DONE FUNCTION: removeEvents( void ) void
        };            
        self.mouseOver = function( event ){
        // FUNCTION: mouseOver( event: event ) void
        
            // ! enabled
            if( !self.enabled ){

                // done
                return;
                
            }
            // ! enabled
        
            // debug info
            self.debug( 'mouseOver' + self.options['id'] );
            
            // remember mouse over
            self.mouseIsOver = true;
            
            // highlight
            self.highlight();
            
            // call callback
            self.callbacks['mouseOver']( event, self.options  );
                
        // DONE FUNCTION: mouseOver( event: event ) void
        };
        self.mouseOut = function( ){
        // FUNCTION: mouseOut( event: event ) void
        
            // ! enabled
            if( !self.enabled ){

                // done
                return;
                
            }
            // ! enabled
        
            // debug info
            self.debug( 'mouseOut' );
            
            // remember mouse out
            self.mouseIsOver = false;
            
            // reset
            self.reset();
            
            // call callback
            self.callbacks['mouseOut']( event, self.options );
                
        // DONE FUNCTION: mouseOut( event: event ) void
        };
        self.highlight = function( ){
        // FUNCTION: highlight( void ) void

            // has images and highlight image
            if( self.options['images'] !== undefined &&
                self.options['images']['highlight'] !== undefined    ){
                
                // mouse over -> highlight image
                $( '#' + self.options['id'] ).css( 'background-image', self.options['images']['highlight'] );
                
            }
            // has images and highlight image

            // has colors
            if( self.options['colors'] !== undefined ){
                
                //  get colors
                let colors = self.options['colors']; 
                
                // has highlight color
                if( colors['highlight'] !== undefined ){
                
                    // set color highlight 
                    $( '#' + self.options['id'] ).css( 'color', colors['highlight'] );
                
                }
                // has highlight color

                // has background colors and background highlight color
                if( colors['background'] !== undefined &&
                    colors['background']['highlight'] !== undefined ){
                
                    // set background color highlight 
                    $( '#' + self.options['id'] ).css( 'background-color', colors['background']['highlight'] );
                
                }
                // has background colors and background highlight color

                // has border colors and border highlight color
                if( colors['border'] !== undefined &&
                    colors['border']['highlight'] !== undefined ){
                
                    // set border color highlight 
                    $( '#' + self.options['id'] ).css( 'border-color', colors['border']['highlight'] );
                
                }
                // has border colors and border highlight color

            }
            // has colors
            
        // DONE FUNCTION: highlight( void ) void
        };
        self.showDisabled = function( ){
        // FUNCTION: showDisabled( void ) void

            // has images and disabled image
            if( self.options['images'] !== undefined &&
                self.options['images']['disabled'] !== undefined ){
                
                // set disabled image
                $( '#' + self.options['id'] ).css( 'background-image', self.options['images']['disabled'] );
                
            }
            // has images and disabled image

            // has colors
            if( self.options['colors'] !== undefined ){
                
                //  get colors
                let colors = self.options['colors']; 
                
                // has disabled color
                if( colors['disabled'] !== undefined ){
                
                    // set color disabled 
                    $( '#' + self.options['id'] ).css( 'color', colors['disabled'] );
                
                }
                // has disabled color

                // has background colors and background disabled color
                if( colors['background'] !== undefined &&
                    colors['background']['disabled'] !== undefined ){
                
                    // set background color disabled 
                    $( '#' + self.options['id'] ).css( 'background-color', colors['background']['disabled'] );
                
                }
                // has background colors and background disabled color

                // has border colors and border disabled color
                if( colors['border'] !== undefined &&
                    colors['border']['disabled'] !== undefined ){
                
                    // set border color disabled 
                    $( '#' + self.options['id'] ).css( 'border-color', colors['border']['disabled'] );
                
                }
                // has border colors and border disabled color

            }
            // has colors

        // DONE FUNCTION: showDisabled( void ) void
        };
        self.reset = function( ){
        // FUNCTION: reset( void ) void
        
            // has images and image 
            if( self.options['images'] !== undefined &&
                self.options['images']['image'] !== undefined ){
                
                // set image url 
                $( '#' + self.options['id'] ).css( 'background-image', self.options['images']['image'] );
                
            }
            // has images and image 
            
            // has colors
            if( self.options['colors'] !== undefined ){
                
                //  get colors
                let colors = self.options['colors']; 
                
                // has color
                if( colors['color'] !== undefined ){
                
                    // set color
                    $( '#' + self.options['id'] ).css( 'color', colors['color'] );
                
                }
                // has color

                // has background colors and background color
                if( colors['background'] !== undefined &&
                    colors['background']['color'] !== undefined ){
                
                    // set background color
                    $( '#' + self.options['id'] ).css( 'background-color', colors['background']['color'] );
                
                }
                // has background colors and background color

                // has border colors and border color
                if( colors['border'] !== undefined &&
                    colors['border']['color'] !== undefined ){
                
                    // set border color
                    $( '#' + self.options['id'] ).css( 'border-color', colors['border']['color'] );
                
                }
                // has border colors and border color

            }
            // has colors

        // DONE FUNCTION: reset( void ) void
        };
        self.click = function( event ){
        // FUNCTION: click( event: event ) void
        
            // ! enabled
            if( !self.enabled ){

                // done
                return;
                
            }
            // ! enabled
        
            // debug info
            self.debug( 'Click' + self.options['id'] );
            
            // callback exists
            if( self.callbacks['click'] !== undefined ){
            
                // call callback
                self.callbacks['click']( event, self.options );
                
            }
            // callback exists
                        
        // DONE FUNCTION: click( event: event ) void
        };
        self.keyUp = function( event ){
        // FUNCTION: keyUp( event: event ) void
                        
            // ! enabled
            if( !self.enabled ){

                // done
                return;
                
            }
            // ! enabled
        
            // call callback
            self.callbacks['keyUp']( event, self.options );
                
        // DONE FUNCTION: keyUp( event: event ) void
        };
        self.keyDown = function( event ){
        // FUNCTION: keyDown( event: event ) void
                        
            // ! enabled
            if( !self.enabled ){

                // done
                return;
                
            }
            // ! enabled
        
            // call callback
            self.callbacks['keyDown']( event, self.options );
                
        // DONE FUNCTION: keyDown( event: event ) void
        };
        self.refresh = function( ){
        // FUNCTION: refresh( void ) void
        
            // debug info
            self.debug( 'refresh' );

            // mouse is over / else
            if( self.mouseIsOver ){
            
                // highlight
                self.highlight();
                
            }
            else {
                
                // reset
                self.reset();
                
            }
            // mouse is over / else
            
        // DONE FUNCTION: refresh( void ) void
        };
        self.refreshEvents = function( ){
        // FUNCTION: refreshEvents( void ) void
        
            // remove events
            self.removeEvents();
        
            // add events
            self.addEvents();
        
        // DONE FUNCTION: refreshEvents( void ) void
        };
        self.disable = function() {
        // FUNCTION: disable( void ) void
            
            // debug info
            self.debug( 'disable' );

            // disable
            self.enabled = false;

            // show disabled
            self.showDisabled();

        // DONE FUNCTION: disable( void ) void
        };
        self.enable = function() {
        // FUNCTION: enable( void ) void
            
            // debug info
            self.debug( 'enable' );

            // disable
            self.enabled = true;

            // reset
            self.reset();

        // DONE FUNCTION: enable( void ) void
        };
        self.setColors = function( colors ){
        // FUNCTION: setColors( named array: colors  ) void
        
            // debug info
            self.debug( 'setColors' );
            
            // set colors
            self.options['colors'] = colors;
            
            // refresh
            self.refresh();

        // DONE FUNCTION: setColors( named array: colors ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // remove event subscriptions
            self.removeEventSubscriptions();
            
            // remove events
            self.removeEvents();
            
            // remove html
            self.removeHtml();
            
            // unset options
            self.options = null;
            
            // unset callbacks
            self.callbacks = null;
        
        // DONE FUNCTION: destruct( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // call global debug
                eventManager.debug( self.MODULE + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
            
            // FUNCTION: getContainerId( void ) html element id
            getContainerId : function( ){
                
                // return id
                return self.options['id'];
                
            },
            // FUNCTION: getOptions( void ) named array
            getOptions : function( ){
                
                // return options
                return self.options;
                
            },
            // FUNCTION: getOptions( named array: colors ) void
            setColors : function( colors ){
                
                // call internal
                self.setColors( colors );
                
            },
            // FUNCTION: refresh( void ) void    
            refresh : function( ){
                
                // call internal
                self.refresh( );
                
            },
            // FUNCTION: refreshEvents( void ) void    
            refreshEvents : function( ){
                
                // call internal
                self.refreshEvents( );
                
            },
            // FUNCTION: disable( void ) void    
            disable : function( ){
                
                // call internal
                self.disable( );
                
            },
            // FUNCTION: enable( void ) void    
            enable : function( ){
                
                // call internal
                self.enable( );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: buttonModule( html element id: parentId, 
    //                            named array: options,
    //                            named array: callbacks  ) named array
    
})( eventManager );
// done create module function


