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
                xui.create("xui.UI.Button")
                .setHost(host,"btn_Main")
                .setName("btn")
                .setLeft("3.8095238095238093em")
                .setTop("14.476190476190476em")
                .setWidth("12.114285714285714em")
                .setHeight("5.866666666666666em")
                .setCaption("Text erzeugen!")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "textfeld",
                        "args" : [
                            {
                                "value" : ""
                            },
                            {
                            }
                        ],
                        "method" : "setProperties",
                        "event" : 1,
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail"
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
                .setLeft("1.5238095238095237em")
                .setTop("2.2857142857142856em")
                .setWidth("16.457142857142856em")
                .setHeight("10em")
                .setLabelSize("10em")
                .setLabelCaption("Text zum Kopieren:")
                .setValue("super")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_8std")
                .setLeft("25.904761904761905em")
                .setTop("3.0476190476190474em")
                .setWidth("12em")
                .setCaption("8 Std.")
                .setValue(true)
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_element1",
                        "args" : [
                            {
                                "html" : "<div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">3-4 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">5-6 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">7-8 Std. --&gt;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><br></span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">ESS --&gt; 7.48</span></font></div>"
                            },
                            {
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{true}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "xui_ui_element1",
                        "args" : [
                            {
                                "html" : "<div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">3-4 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">5-6 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><br></span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">ESS --&gt; 7.48</span></font></div>"
                            },
                            {
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{false}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("36.57142857142857em")
                .setTop("3.0476190476190474em")
                .setWidth("15.619047619047619em")
                .setHeight("8.60952380952381em")
                .setVisibility("visible")
                .setHtml("<div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">1-2 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">3-4 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">5-6 Std. --&gt;&nbsp;</span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\"><br></span></font></div><div><font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">ESS --&gt; 7.48</span></font></div>")
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