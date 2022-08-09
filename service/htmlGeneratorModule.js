/*
    @package    SiteAnimator\Modules\EventManager

    file:       htmlGeneratorModule.js
    function:   Generates a HTML string from JSON
                adds the function generateHtml to the app
  
    Last revision: 17-06-2022
 
*/

// create module function
( function( eventManager ){
    
    // create name space
    eventManager.service = eventManager.service ? eventManager.service : {};
    
    // MODULE: htmlGeneratorModule( void ) void 
    eventManager.service.htmlGeneratorModule = function( ) {        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'htmlGeneratorModule';            // string
        self.debugOn = true;                                // boolean
        self.closeElements = [                              // array
            'a',                                            // string
            'div',                                          // string
            'form',                                         // string
            'svg',                                          // string
            'iframe'                                        // string
        ];                                                  // done array
        self.valueProperties = [                            // array
            'id',                                           // string
            'name',                                         // string
            'class',                                        // string
            'type',                                         // string
            'value',                                        // string
            'src',                                          // string
            'href',                                         // string
            'target',                                       // string
            'method',                                       // string
            'action',                                       // string
            'title',                                        // string
            'size',                                         // string
            'cols',                                         // string
            'rows',                                         // string
            'width',                                        // string
            'height',                                       // string
            'maxlength',                                    // string
            'rowspan',                                      // string
            'colspan'                                       // string
        ];                                                  // done array
        self.properties = {                                 // array
            'checked'           :   'checked',              // string
            'multiple'          :   'multiple',             // string
            'readOnly'          :   'readonly',             // string
            'controls'          :   'controls'              // string
        };                                                  // done array
        self.styles = {                                     // named array
            'zIndex'            :   'z-index',              // string
            'position'          :   'position',             // string
            'float'             :   'float',                // string
            'clear'             :   'clear',                // string
            'top'               :   'top',                  // string
            'left'              :   'left',                 // string
            'display'           :   'display',              // string
            'justifyContent'    :   'justify-content',      // string
            'gap'               :   'gap',                  // string
            'borderRadius'      :   'border-radius',        // string
            'alignItems'        :   'align-items',          // string
            'alignContent'      :   'align-content',        // string
            'flexWrap'          :   'flex-wrap',            // string
            'flexDirection'     :   'flex-direction',       // string
            'opacity'           :   'opacity',              // string
            'overflow'          :   'overflow',             // string
            'overflowX'         :   'overflow-x',           // string
            'overflowY'         :   'overflow-y',           // string
            'cursor'            :   'cursor',               // string
            'background'        :   'background',           // string
            'backgroundColor'   :   'background-color',     // string
            'backgroundRepeat'  :   'background-repeat',    // string
            'backgroundPosition':   'background-position',  // string
            'backgroundSize'    :   'background-size',      // string
            'color'             :   'color',                // string
            'minimumWidth'      :   'min-width',            // string
            'maximumWidth'      :   'max-width',            // string
            'minimumHeight'     :   'min-height',           // string
            'maximumHeight'     :   'max-height',           // string
            'styleWidth'        :   'width',                // string
            'styleHeight'       :   'height',               // string
            'fontFamily'        :   'font-family',          // string
            'fontSize'          :   'font-size',            // string
            'lineHeight'        :   'line-height',          // string
            'letterSpacing'     :   'letter-spacing',       // string
            'fontWeight'        :   'font-weight',          // string
            'textAlign'         :   'text-align',           // string
            'textDecoration'    :   'text-decoration',      // string
            'verticalAlign'     :   'vertical-align',       // string
            'margin'            :   'margin',               // string
            'marginTop'         :   'margin-top',           // string
            'marginLeft'        :   'margin-left',          // string
            'marginRight'       :   'margin-right',         // string
            'marginBottom'      :   'margin-bottom',        // string
            'padding'           :   'padding',              // string
            'paddingTop'        :   'padding-top',          // string
            'paddingLeft'       :   'padding-left',         // string
            'paddingRight'      :   'padding-right',        // string
            'paddingBottom'     :   'padding-bottom',       // string
            'imageUrl'          :   'background-image',     // string
            'transformOrigin'   :   'transform-origin',     // string
            'transform'         :   'transform',            // string
            'boxShadow'         :   'box-shadow',           // string
            'textShadow'        :   'text-shadow',          // string
            'pointerEvents'     :   'pointer-events'        // string
        };                                                  // done named array
        self.borders = {                                    // named array
            'border'            :   'border',               // string
            'borderLeft'        :   'border-left',          // string
            'borderRight'       :   'border-right',         // string
            'borderTop'         :   'border-top',           // string
            'borderBottom'      :   'border-bottom'         // string
        };                                                  // done named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void            
            
            // add the extensions to the app
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };        
        self.addApplicationsExtensions = function(){
        // FUNCTION: addApplicationsExtensions( void ) void            
        
            // add generate
            eventManager.generateHtml = self.generate;
        
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };        
        self.generate = function( json ){
        // FUNCTION: generate( named array: json ) string
        
            // create result
            let result = '';
        
            // open element
            result += self.openElement( json );
            
            // add text
            result += self.addText( json );

            // close element
            result += self.closeElement( json );
            
            // return result
            return result;
        
        // DONE FUNCTION: generate( named array: json ) string
        };        
        self.openElement = function( json ){
        // FUNCTION: openElement( named array: json ) string
        
            // create result
            let result = '';
            
            // open element
            result += '<' + json['element'];
            
            // add properties
            result += self.addProperties( json );
            
            // add style
            result += self.addStyle( json );
            
            // close open element
            result += '>';
            
            // return result
            return result;
            
        // DONE FUNCTION: openElement( named array: json ) string
        };        
        self.closeElement = function( json ){
        // FUNCTION: closeElement( named array: json ) string
        
            // create result
            let result = '';
            
            // element in close elements
            if( self.closeElements.indexOf( json['element'] ) >= 0 ){
                
                // close element
                result += '</' + json['element'] + '>';
                
            }
            // element in close elements
            
            // return result
            return result;
            
        // DONE FUNCTION: closeElement( named array: json ) string
        };        
        self.addProperties = function( json ){
        // FUNCTION: addProperties( named array: json ) string
        
            // create result
            let result = '';
            
            // loop over value properties
            $.each( self.valueProperties, function( index, property ) {
                
                // property exists
                if( json[property] !== undefined ){
                    
                    // add property
                    result += ' ' + property + '="' + json[property]; 
                    result += '"';
                    // add property
                    
                }
                // property exists
                
            });
            // loop over value properties

            // loop over properties
            $.each( self.properties, function( index, property ) {
                
                // property exists
                if( json[index] !== undefined ){
                    
                    // add property
                    result += ' ' + property + ' ';
                    
                }
                // property exists                
                
            });
            // loop over properties
                        
            // return result
            return result;
            
        // DONE FUNCTION: addProperties( named array: json ) string
        };        
        self.addStyle = function( json ){
        // FUNCTION: addStyle( named array: json ) string
        
            // create result
            let result = '';
            
            // open style
            result += ' style="';

            // loop over styles
            $.each( self.styles, function( index, style ) {
                
                // style is defined
                if( json[index] !== undefined ){
                    
                    // add style
                    result += style + ' : ' + json[index] + ';';
                    
                }
                // style is defined
                
            });
            // loop over styles
            
            // add border
            result += self.addBorder( json );
            
            // close style
            result += '"';
            
            // return result
            return result;
            
        // DONE FUNCTION: addStyle( named array: json ) string
        };        
        self.addBorder = function( json ){
        // FUNCTION: addBorder( named array: json ) string
            
            // create result
            let result = '';

            // loop over borders
            $.each( self.borders, function( index, border ) {
                
                // border is defined
                if( json[index] !== undefined ){
                    
                    // add border
                    result += border + ':';
                    
                    result += self.getBorderHtml( json );
                    
                }
                // border is defined
                
            });
            // loop over borders
            
            // return result
            return result;
            
        // DONE FUNCTION: addBorder( named array: json ) string
        };        
        self.getBorderHtml = function( json ){
        // FUNCTION: getBorderHtml( named array: json ) string
            
            // create result
            let result = '';

            result += json['borderWidth'];
            result += ' ';
            result += json['borderColor'];
            result += ' ';
            result += json['borderStyle'];
            result += ';';
            
            // return result
            return result;            
            
        // DONE FUNCTION: getBorderHtml( named array: json ) string
        };        
        self.addText = function( json ){
        // FUNCTION: addText( named array: json ) string
        
            // create result
            let result = '';
            
            // has text
            if( json['text'] ){
                
                // add text
                result += json['text'];
                
            }
            // has text
            
            // return result
            return result;
            
        // DONE FUNCTION: addText( named array: json ) string
        };        
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn && eventManager.debug ) {
                
                // debug
                eventManager.debug( self.moduleName + ' ' + message );
                
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
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: htmlGeneratorModule( void ) void 
    
})( eventManager );
// done create module function
