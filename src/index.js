import $ from 'jquery';

export default class ViewStep{
    //const playButton = document.getElementById('play');
    #currentView = 0;
    constructor(idPrefix, start, hideTill=start) {
        this.idPrefix = idPrefix;
        this.#currentView = start;
        for (let i=start+1; i<=hideTill; i++) {
            console.log(this.getNowId(i));
            $(this.getNowId(i)).hide();
        }
    }

    showNext(hideCurrent=true) {
        if (hideCurrent) {
            $(this.getNowId()).hide();
        }
        if ($(this.getNowId(this.#currentView+1))) {
            this.#currentView += 1;
            $(this.getNowId()).show();
        } else {
            return false;
        }
        return true;
    }


    getNowId(viewNum=this.#currentView) {
        return `#${this.idPrefix}-${viewNum}`;
    }


}