class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.initial = config.initial;
        this.states = config.states; 
    }    
        
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.initial;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        var flag = true;
        
        for (var key in this.states) {
            if (key == state) {
                this.initial = state;
                flag = false;
            }
        }
        if (flag) {
            return new Error("State isn't exist");
        } 
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}
var config = {
    initial: 'normal',
    states: {
        normal: {
            transitions: {
                study: 'busy',
            }
        },
        busy: {
            transitions: {
                get_tired: 'sleeping',
                get_hungry: 'hungry',
            }
        },
        hungry: {
            transitions: {
                eat: 'normal'
            },
        },
        sleeping: {
            transitions: {
                get_hungry: 'hungry',
                get_up: 'normal',
            },
        },
    }
};
       
module.exports = FSM;

/** @Created by Uladzimir Halushka **/
