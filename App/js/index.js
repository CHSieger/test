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
                xui.create("xui.DataBinder")
                .setHost(host,"databinder_1")
                .setName("databinder_1")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_8std")
                .setLeft("1.5238095238095237em")
                .setTop("2.2857142857142856em")
                .setWidth("5.942857142857143em")
                .setCaption("8 Std.")
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_element1",
                        "args" : [
                            {
                                "html" : "<div><span style=\"color: rgb(0, 0, 205); font-family: Consolas, Menlo, &quot;courier new&quot;, monospace; font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><div style=\"\">3-4 Std. --&gt;&nbsp;</div><div style=\"\">5-6 Std. --&gt;&nbsp;</div><div style=\"\">7-8 Std. --&gt;</div><div style=\"\"><br></div><div style=\"\">ESS --&gt; 7.48</div></span></font></div><div><br></div>"
                            },
                            {
                            }
                        ],
                        "method" : "setProperties"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("1.5238095238095237em")
                .setTop("4.571428571428571em")
                .setWidth("15.619047619047619em")
                .setHeight("8.60952380952381em")
                .setVisibility("visible")
                .setHtml("<div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">3-4 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">5-6 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><br></span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">ESS --&gt; 7.48</span></font></div>")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox59")
                .setLeft("6.857142857142857em")
                .setTop("2.2857142857142856em")
                .setWidth("5.180952380952381em")
                .setCaption("6 Std.")
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_element1",
                        "args" : [
                            {
                                "html" : "<div><span style=\"color: rgb(0, 0, 205); font-family: Consolas, Menlo, &quot;courier new&quot;, monospace; font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><div style=\"\">3-4 Std. --&gt;&nbsp;</div><div style=\"\">5-6 Std. --&gt;&nbsp;</div><div style=\"\"><br></div><div style=\"\">ESS --&gt; 7.48</div></span></font></div><div><br></div>"
                            },
                            {
                            }
                        ],
                        "method" : "setProperties"
                    }
                ])
            );
            
            append(
                xui.create("xui.MQTT")
                .setHost(host,"xui_mqtt1")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox4")
                .setClassName("xui-css-vb")
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