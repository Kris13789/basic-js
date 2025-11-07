const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this; // chainable
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = []; // reset the chain
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this; // chainable
  },

  reverseChain() {
    this.chain.reverse();
    return this; // chainable
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // clear the chain after finishing
    return result;
  },
};

module.exports = {
  chainMaker,
};
