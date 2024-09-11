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
                .setMultiLines(false)
                .setValue("super")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_Montag")
                .setLeft("25.904761904761905em")
                .setTop("3.0476190476190474em")
                .setWidth("12em")
                .setCaption("Montag")
                .setValue(true)
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "textfeld",
                        "args" : [
                            "{page.textfeld.setUIValue()}",
                            undefined,
                            undefined,
                            "6 Stunden:  1-2 Std. -->  3-4 Std. -->  5-6 Std. -->   ESS --> 7.48"
                        ],
                        "method" : "setUIValue",
                        "redirection" : "other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_Dienstag")
                .setLeft("25.904761904761905em")
                .setTop("4.571428571428571em")
                .setWidth("12em")
                .setCaption("Dienstag")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_Mittwoch")
                .setLeft("25.904761904761905em")
                .setTop("6.095238095238095em")
                .setWidth("12em")
                .setCaption("Mittwoch")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_Donnerstag")
                .setLeft("25.904761904761905em")
                .setTop("7.619047619047619em")
                .setWidth("12em")
                .setCaption("Donnerstag")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"chkBox_Freitag")
                .setLeft("25.904761904761905em")
                .setTop("9.142857142857142em")
                .setWidth("12em")
                .setCaption("Freitag")
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("22.857142857142858em")
                .setTop("26.666666666666668em")
                .setWidth("18.666666666666668em")
                .setHeight("9.371428571428572em")
                .setVisibility("visible")
                .setHtml("<font color=\"#0000cd\" face=\"Consolas, Menlo, courier new, monospace\"><span style=\"font-size: 15px;\">khghjjvvfkhz</span></font>")
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