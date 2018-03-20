"@fixture Werkzeuge";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["Migration_Export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },
    '3.Click span "Export"': function() {
        act.click('[title="base.migration.choice.download"] .cui-button-center');
    }
};

"@test"["Migration_Import"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },
    '3.Click span "Import"': function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },
    '4.Upload "testing-a11b776d-06a6-4e55-a569-86d252d756ff-config-dump (1).json" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/testing-a11b776d-06a6-4e55-a569-86d252d756ff-config-dump (1).json");
    },
    '5.Click span "Fertig"': function() {
        act.click(":containsExcludeChildren(Fertig)");
    }
};

"@test"["Migration_Import_wrong_datatype"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },
    '3.Click span "Import"': function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },
    '4.Upload "25_09_2017_Ironwood_Customs_BME_K100_cafe_racer_05.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/25_09_2017_Ironwood_Customs_BME_K100_cafe_racer_05.jpg");
    },
    '5.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    "6.Click <svg>": function() {
        act.click('[aria-label="Schließen"] .cui-button-visual');
    }
};

