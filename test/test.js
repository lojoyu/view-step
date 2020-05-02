import ViewStep from '../src/index';
import $ from 'jquery';

let vs = new ViewStep('step', 1, 3);
$('#btn').click(function() {
    vs.showNext();
})
$('#btn2').click(function() {
    vs.showNext(false);
})
