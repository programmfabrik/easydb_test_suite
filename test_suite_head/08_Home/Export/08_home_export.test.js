"@fixture 08_Home_Export";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["01_Upload_for_Export"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".fa.fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "crd72-cafe-racer-crd-bmw-r100-1.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/crd72-cafe-racer-crd-bmw-r100-1.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "crd72-cafe-racer-bmw-r100");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};



"@test"["02_Simple_Export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0)
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Exportieren..."': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Exportieren"': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input.cui-has-focus").find(" > input:nth(0)");
        };
        act.type(actionTarget, "simple export");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};


"@test"["03_Check_Simple_Export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(":attrRegExp(class:/^fa\\s+fa\\-download$/)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "simple export"': function() {
        act.click(":containsExcludeChildren(simple export)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-trash-o").eq(0);
        };
        act.click(actionTarget);
    }
};



"@test"["04_Export_Click_Everything_Except_XML_Profil_and_Transport_Dienst"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Exportieren..."': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Daten"': function() {
        act.click('[data-qa="export-manager-data-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "CSV-Datei erzeugen"': function() {
        act.click(":containsExcludeChildren(CSVDatei erzeugen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "JSON-Datei erzeugen"': function() {
        act.click(":containsExcludeChildren(JSONDatei erzeugen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Eine JSON-Datei..."': function() {
        act.click(":containsExcludeChildren(Eine JSONDatei pro Datensatz)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "XML-Datei erzeugen"': function() {
        act.click(":containsExcludeChildren(XMLDatei erzeugen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Eine XML-Datei pro..."': function() {
        act.click(":containsExcludeChildren(Eine XMLDatei pro Datensatz)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click div": function() {
        act.click('[data-qa="export-manager-url-original-form"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Nein"': function() {
        act.click('[data-qa="export-manager-url-original-form"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Erweitert"': function() {
        act.click('[data-qa="export-manager-advanced-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Unbegrenzt (alles..."': function() {
        act.click(":containsExcludeChildren(Unbegrenzt alles in einem Ordner)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original-Dateiname"': function() {
        act.click(":containsExcludeChildren(OriginalDateiname)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Nur neue und..."': function() {
        act.click(":containsExcludeChildren(Nur neue und veränderte Datensätze exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Exportieren"': function() {
        act.click('[data-qa="export-manager-export-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input.cui-has-focus").find(" > input:nth(0)");
        };
        act.type(actionTarget, "estcafe export");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};

"@test"["05_Export_Tranport_Dienst"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-loca-button.ez5-export-manager-list-tray-button.cui-button-button.cui-button").find(" > div:nth(0)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $('[row="1"] [data-qa="transport-editor-button"] .cui-button-left');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        act.click('[ez5-loca-key="transport.editor.plus.button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Herunterladen"': function() {
        act.click(":containsExcludeChildren(Herunterladen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Herunterladen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Herunterladen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Fertig"': function() {
        act.click('[ez5-loca-key="export.manager.list.button.done"] .cui-button-center');
    }
};

"@test"["06_Export_Xml_Felder_Auswahlen"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click export list": function() {
        act.click('[ez5-loca-key="export.manager.list.button.tray"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click edit 1st": function() {
        act.click('[row="1"] [ez5-loca-key="export.manager.list.top.level.node.button.edit"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Daten"': function() {
        var actionTarget = function() {
            return $('[data-qa="export-manager-data-tab-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Eigene Felder Auswahlen"': function() {
        var actionTarget = function() {
            return $('[data-qa="export-manager-form-select-fields-checkbox"] span');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Eigene Felder Auswahlen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Eigene Felder auswählen)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Felder auswählen"': function() {
        var actionTarget = function() {
            return $('[data-qa="export-manager-form-select-fields-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click checkbox": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(8)
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Fertig"': function() {
        act.click('[title="export.manager.field.selector.button.done"] .cui-button-center span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Speichern"': function() {
        act.click('[title="export.manager.button.update"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Fertig"': function() {
        act.click('[title="export.manager.list.button.done"] .cui-button-center');
    }
};