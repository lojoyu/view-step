import ViewStep from '../src/index';
import $ from 'jquery';

let vs = new ViewStep('.step', 1, 3, {}, 1000);
$('#btn').click(function() {
    vs.showNext();
})
$('#btn2').click(function() {
    vs.showNext(false);
})

$('#btn3').click(function() {
    vs.showPrev();
})
