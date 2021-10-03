import $ from 'jquery';

export default class ViewStep{
    //const playButton = document.getElementById('play');
    #currentView = 0;
    constructor(prefix, start, hideTotal=0, initFunc={}, fade=0) {
        this.prefix = prefix;
        this.#currentView = start;
        this.initFunc = initFunc;
        this.fade = fade;
        for (let i=1; i<=hideTotal; i++) {
            if(i == start || !$(this.getNowId)) continue;
            console.log(this.getNowId(i));
            this.vhide(this.getNowId(i));
            //$(this.getNowId(i)).hide();
        }
    }

    showNext(hideCurrent=true, init=true, max=Infinity) {
        let wait = 0;
        if (this.#currentView >= max) return false;
        if (hideCurrent) {
            this.vhide(this.getNowId());
            wait = this.fade;
            //$(this.getNowId()).hide();
        }
        if ($(this.getNowId(this.#currentView+1))) {
            this.#currentView += 1;
            setTimeout(() => {
                this.vshow(this.getNowId());
            }, wait);
            //$(this.getNowId()).show();
            if (init && this.#currentView in this.initFunc) {
                this.initFunc[this.#currentView]();
            }
        } else {
            return false;
        }
        return true;
    }

    showPrev(hideCurrent=true, init=false) {
        let wait = 0;
        if (hideCurrent) {
            vhide(this.getNowId());
            wait = this.fade;
            //$(this.getNowId()).hide();
        }
        if ($(this.getNowId(this.#currentView-1))) {
            this.#currentView -= 1;
            setTimeout(()=>{
                this.vshow(this.getNowId());
            }, wait);
            //$(this.getNowId()).show();
            if (init && this.#currentView in this.initFunc) {
                this.initFunc[this.#currentView]();
            }
        } else {
            return false;
        }
        return true;
    }


    getNowId(viewNum=this.#currentView) {
        return `${this.prefix}-${viewNum}`;
    }

    getNowView() {
        return this.#currentView;
    }

    vshow(el) {
        // if (this.fade == 0) {
        //     $(el).show();
        // } else {
        $(el).fadeIn(this.fade);
        // }
    }

    vhide(el) {
        //if (this.fade == 0) {
        //    $(el).hide();
        //} else {
            $(el).fadeOut(this.fade);
        //}
    }

}