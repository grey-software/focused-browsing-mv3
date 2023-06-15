// A wrapper class with an easier API to set and clear window intervals
export default class IntervalBot {

    intervalId = 0
    
    start(callback: () => void) {
        console.log("starting")
        if (this.intervalId) window.clearInterval(this.intervalId)
        this.intervalId = window.setInterval(() => { callback() }, 250)
    }

    stop() {
        window.clearInterval(this.intervalId)
    }
    
}