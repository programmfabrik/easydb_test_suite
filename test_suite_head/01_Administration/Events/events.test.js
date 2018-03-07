"@fixture Events";
"@page http://10.122.4.25/eventmanager/?login=root&password=admin";

"@test"["02_Choose Event Type"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "- Auswahl -"': function() {
        act.click(":containsExcludeChildren(Auswahl)");
    },
    '3.Click span "API-Call"': function() {
        act.click(":containsExcludeChildren(APICall)");
    },
    "4.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    '5.Click span "Aktualisieren"': function() {
        act.click(":containsExcludeChildren(Aktualisieren)");
    },
    '6.Click span "- Auswahl -"': function() {
        act.click(":containsExcludeChildren(Auswahl)");
    }
};


"@test"["01_Click Everything"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "ID"': function() {
        act.click(":containsExcludeChildren(ID)");
    },
    '3.Click span "Zeitpunkt"': function() {
        act.click(":containsExcludeChildren(Zeitpunkt)");
    },
    '4.Click span "Benutzer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Benutzer)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click span "Typ"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Typ)").eq(1);
        };
        act.click(actionTarget);
    },
    "6.Click <i>": function() {
        act.click('[ez5-loca-key="result.navigation.toolbar.right"] .fa-angle-right');
    },
    "7.Click <i>": function() {
        act.click('[ez5-loca-key="result.navigation.toolbar.first"] .fa-step-backward');
    },
    '8.Click span "Herunterladen als..."': function() {
        act.click(":containsExcludeChildren(Herunterladen als CSV)");
    }
};

"@test"["04_Delete All Events"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },
    '3.Click span "Ereignisse löschen"': function() {
        act.click(":containsExcludeChildren(Ereignisse löschen)");
    },
    '4.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '5.Dblclick span "Aktualisieren"': function() {
        act.dblclick(":containsExcludeChildren(Aktualisieren)");
    }
};

"@test"["03_Delete Single Event"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        act.click('[ez5-loca-key="system.list.manager.button.minus"] .fa-minus');
    },
    '4.Click span "Aktualisieren"': function() {
        act.click(":containsExcludeChildren(Aktualisieren)");
    }
};