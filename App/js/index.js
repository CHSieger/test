// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"knopf")
                .setName("btn")
                .setLeft("15.238095238095237em")
                .setTop("25.142857142857142em")
                .setWidth("12.114285714285714em")
                .setHeight("5.866666666666666em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "textfeld",
                        "args" : [
                            "{page.textfeld.setUIValue()}",
                            undefined,
                            undefined,
                            "hallo test"
                        ],
                        "method" : "setUIValue",
                        "redirection" : "other:callback:call",
                        "event" : 1
                    },
                    "_knopf_onclick"
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"textfeld")
                .setName("textfeld")
                .setDataField("hallo")
                .setReadonly(true)
                .setLeft("28.19047619047619em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _knopf_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});