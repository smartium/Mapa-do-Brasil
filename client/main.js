// MAPA OPÇÃO 2: https://jsfiddle.net/LucasBassetti/qrd0nvx2/2/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min'

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
        $('.mapsvg-region').css('fill', 'antiquewhite')
        let _stateName = $(e.target).attr('name')
        $(e.target).css('fill', 'orange')
        console.log(_stateName);
        stateName.set(_stateName)
        $('.state-name-h').show()
    },

    'click .clear' (e) {
        e.preventDefault()
        $('.mapsvg-region').css('fill', 'antiquewhite')
        $('.state-name-h').hide()
    }
})