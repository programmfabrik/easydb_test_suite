"@fixture 01_Base Config";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["00_Wait_for_server_initialization"] = {
    "1.Wait 8 seconds": function() {
        act.wait(8000);
    }
};

"@test"["01_Click Around"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Anmelden"': function() {
        act.click('[data-qa="base-config-manager-login-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Design"': function() {
        act.click('[data-qa="base-config-manager-css-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Export und OAI/PMH"': function() {
        act.click('[data-qa="base-config-manager-export-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Cloud-Dienstleister"': function() {
        act.click('[data-qa="base-config-manager-cloud_services-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "CMS"': function() {
        act.click('[data-qa="base-config-manager-cms-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Server-Config"': function() {
        act.click('[data-qa="base-config-manager-server-config-tab-button"] .cui-button-center');
    }
};


"@test"["02_Allgemein"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type('[data-qa="base-config-manager-value-multiinput"] [cui-data-field-name="de-DE"] input', "TestCafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Api Calls": function() {
        act.click('[data-qa="base-config-manager-enabled-select"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};





"@test"["03_Hochladen"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Type in input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.type(actionTarget, "50000");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};
