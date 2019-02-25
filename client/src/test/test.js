import React from 'react';
import { increasePageNumber } from '../containers/Home';
let assert = require("assert")

describe('Home', function(){
  describe('#increasePageNumber()', function(){
    it('should increment the page number in state', () => {
      const state = {pageNum : 1};
      const newState = increasePageNumber(state);
      assert.equal(newState.pageNum, 2);
    })
  })
})