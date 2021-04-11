// MAPA OPÇÃO 2: https://jsfiddle.net/LucasBassetti/qrd0nvx2/2/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

stateName = new ReactiveVar('&nbsp;')

Template.mapa.onRendered(() => {})

Template.mapa.helpers({
    getStateName() {
        return stateName.get()
    }
})

Template.mapa.events({
    'click .mapsvg-region' (e) {
        e.preventDefault()
        $('.mapsvg-region').css('fill', 'antiquewhite')
            // let timer;
        let _stateName = $(e.target).attr('name')
        $(e.target).css('fill', 'orange')
        console.log(_stateName);
        stateName.set(`<span class="clear">(X)</span> ${_stateName}`)
            // timer = Meteor.setTimeout(function() {
            //     stateName.set('&nbsp;')
            // }, 5000);
    },

    'click .clear' (e) {
        e.preventDefault()
        $('.mapsvg-region').css('fill', 'antiquewhite')
        stateName.set('&nbsp;')
    }
})