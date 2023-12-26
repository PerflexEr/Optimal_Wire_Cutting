import { makeAutoObservable } from "mobx";

export default class RodSettings {
  constructor() {
    this._rodLength = 0;
    this._rodPrice = {}; 
    this._decisionTree = null; 
    makeAutoObservable(this);
  }

  setRodLength(value) {
    this._rodLength = value;
  }

  setRodPrice(length, price) {
    this._rodPrice[length] = price;
  }

  setDecisionTree(tree) { 
    this._decisionTree = tree;
  }

  get rodLength() {
    return this._rodLength;
  }

  get rodPrice() {
    return this._rodPrice;
  }

  get decisionTree() {
    return this._decisionTree;
  }
}
