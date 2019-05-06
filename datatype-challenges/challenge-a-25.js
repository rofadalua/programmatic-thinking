// Challenge 25
// Set state.foo equal to 1.
// Do not write 1.

class Obj { 

    state = {
        foo: null
    }

    setState(object){
        this.state.foo = undefined // ?
    }

}

var obj = new Obj

obj.setState({ foo: 1 })