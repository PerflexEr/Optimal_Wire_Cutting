// RodSettings.js
import { makeAutoObservable } from "mobx";

export default class RodSettings {
  constructor() {
    this._rodLength = 0;
    this._rodPrice = {}; 
    makeAutoObservable(this);
  }

  setRodLength(value) {
    this._rodLength = value;
  }

  setRodPrice(length, price) {
    this._rodPrice[length] = price;
  }

  get rodLength() {
    return this._rodLength;
  }

  get rodPrice() {
    return this._rodPrice;
  }
}
