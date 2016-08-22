/**
 * Created by Pannala on 8/22/16.
 */
(function() {

    angular.module('plunker', []);

    angular.module('plunker').controller('MainCtrl', MainController);

    function MainController() {
        var mctrl = this;
        mctrl.name = "AngularJS";

        //AJAX CALL
        mctrl.people = [{
            "id": 1,
            "firstName": "PENELOPE",
            "lastName": "GUINESS",
            "email": "PENELOPE.GUINESS@abc.com",
            "city": "Palo Alto",
            "phone": "2830338429",
        }, {
            "id": 2,
            "firstName": "NICK",
            "lastName": "WAHLBERG",
            "email": "NICK.WAHLBERG@abc.com",
            "city": "Richmond",
            "phone": "8386352866",
        }, {
            "id": 3,
            "firstName": "ED",
            "lastName": "CHASE",
            "email": "ED.CHASE@abc.com",
            "city": "Seattle",
            "phone": "4484771904",
        }, {
            "id": 4,
            "firstName": "JENNIFER",
            "lastName": "DAVIS",
            "email": "JENNIFER.DAVIS@abc.com",
            "city": "Chicago",
            "phone": "7058140035",
        }, {
            "id": 5,
            "firstName": "JOHNNY",
            "lastName": "LOLLOBRIGIDA",
            "email": "JOHNNY.LOLLOBRIGIDA@abc.com",
            "city": "Dallas",
            "phone": "1065564866",
        }, {
            "id": 6,
            "firstName": "BETTE",
            "lastName": "NICHOLSON",
            "email": "BETTE.NICHOLSON@abc.com",
            "city": "Salt Lake City",
            "phone": "8604526264",
        }, {
            "id": 7,
            "firstName": "GRACE",
            "lastName": "MOSTEL",
            "email": "GRACE.MOSTEL@abc.com",
            "city": "Columbus",
            "phone": "7165712203",
        }, {
            "id": 8,
            "firstName": "MATTHEW",
            "lastName": "JOHANSSON",
            "email": "MATTHEW.JOHANSSON@abc.com",
            "city": "Denver",
            "phone": "6572822859",
        }, {
            "id": 9,
            "firstName": "JOE",
            "lastName": "SWANK",
            "email": "JOE.SWANK@abc.com",
            "city": "Phoenix",
            "phone": "3806575226",
        }, {
            "id": 10,
            "firstName": "CHRISTIAN",
            "lastName": "GABLE",
            "email": "CHRISTIAN.GABLE@abc.com",
            "city": "Miami",
            "phone": "6488569361",
        }];

        mctrl.addPerson = function() {
            mctrl.newPerson.id = mctrl.people.length + 1;
            mctrl.people.push(mctrl.newPerson);
            console.log(mctrl.people);
            mctrl.newPerson = null;
        };

        mctrl.deletePerson = function(index) {
            mctrl.people.splice(index, 1);
            console.log(mctrl.people);
        };

    }


})();