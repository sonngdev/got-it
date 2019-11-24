class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Originator {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  save() {
    return new Memento(this.state);
  }

  restore(memento) {
    this.setState(memento.getState());
  }
}

class CareTaker {
  constructor() {
    this.pastStates = [];
    this.futureStates = [];
    this.originator = new Originator();
  }

  setState(state) {
    this.originator.setState(state);
  }

  save() {
    this.futureStates = [];
    this.pastStates.push(this.originator.save());
  }

  getState() {
    return this.originator.getState();
  }

  // travel to the past
  undo() {
    const now = this.originator.save();
    this.futureStates.push(now);

    let past = this.pastStates.pop();

    if (now.getState() === past.getState()) {
      past = this.pastStates.pop();
    }
    this.originator.restore(past)
  }

  // travel to the future
  redo() {
    const now = this.originator.save();
    this.pastStates.push(now);

    let future = this.futureStates.pop();
    if (now.getState() === future.getState()) {
      future = this.futureStates.pop();
    }
    this.originator.restore(future);
  }
}

const caretaker = new CareTaker();
caretaker.setState('First');
caretaker.setState('Second');
caretaker.save();

caretaker.setState('Third');
caretaker.save();

caretaker.setState('Fourth');
caretaker.save();

caretaker.undo();
console.log(caretaker.getState()); // Third

caretaker.undo();
console.log(caretaker.getState()); // Second

caretaker.redo();
console.log(caretaker.getState()); // Third

caretaker.redo();
console.log(caretaker.getState()); // Fourth
