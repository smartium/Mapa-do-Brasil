// MAPA OPÇÃO 2: https://jsfiddle.net/LucasBassetti/qrd0nvx2/2/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

stateName = new ReactiveVar()

Template.mapa.onRendered(() => {})

Template.mapa.helpers({
    getStateName() {
        return stateName.get()
    }
})

Template.mapa.events({
    'click .mapsvg-region' (e) {
        e.preventDefault()
        let _stateName = $(e.target).attr('name')
        console.log(_stateName);
        stateName.set(_stateName)
        Meteor.setTimeout(function() {
            stateName.set('')
        }, 5000);
    }
})