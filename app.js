/**
 * Created by Alexandre M.-Lemay on 2014-09-20.
 */
(function () {
    var app = angular.module('smCameron', []);
    var tab = 1;

    app.controller("NavController", function() {

        this.isSet = function(checkTab) {
            return tab === checkTab;
        };
        this.dropSet = function(min,max) {
            var state = false;
            if(tab >= min && tab <= max){
                state = true;
            }
            return state;
        };
        this.setTab = function(setTab) {
            tab = setTab;
        };

        this.classS = function(tabID) {
            if(tab === tabID){
                return "showAJS";
            }
            else {
                return "hiddenAJS";
            }
        };
        this.sectionName = function() {
            if(tab === 1) { return "Tableau de bord"; }
            else if(tab === 2) { return "Inventaire"; }
            else if(tab === 3) { return "Cr\xE9ation d'un employ\xE9"; }
            else if(tab === 4) { return "Afficher les employ\xE9s"; }
            else if(tab === 5) { return "Employ\xE9s"; }
            else if(tab === 6) { return "Calendrier"; }
        };
    });
})();