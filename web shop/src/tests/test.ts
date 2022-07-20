import "jest-canvas-mock";
import { doc } from "prettier";
import resetBtns from './reset-btns';
import sorting from './sort';
import resetStorage from './reset-local-storage';
import filters from './filter';


test("It should create Listener on reset btn", () => {
  const instanceMock = jest.spyOn(resetBtns, "resetFunc");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    resetBtns.createResetBtn();
  expect(document.addEventListener).toBeCalledWith(
    "click",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});

test("It should create Listener for sorting", () => {
  document.body.innerHTML = '<select name="sort" id="sort" class="sort-input"><option value="none">none</option><option value="year-lowest">year-lowest</option><option value="year-highest">year-highest</option><option value="name-a">name-a</option><option value="name-z">name-z</option></select>'
  const instanceMock = jest.spyOn(sorting, "checkSorting");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    sorting.cardsSort();
  expect(document.addEventListener).toBeCalledWith(
    "click",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});

test("It should create Listener for clear LocalStorage btn", () => {
  document.body.innerHTML = '<select name="sort" id="sort" class="sort-input"><option value="none">none</option><option value="year-lowest">year-lowest</option><option value="year-highest">year-highest</option><option value="name-a">name-a</option><option value="name-z">name-z</option></select>'
  const instanceMock = jest.spyOn(resetStorage, "clearStorage");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    resetStorage.addListener();
  expect(document.addEventListener).toBeCalledWith(
    "click",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});

test("It should create Listener for popular filter", () => {
  document.body.innerHTML = '<select name="sort" id="sort" class="sort-input"><option value="none">none</option><option value="year-lowest">year-lowest</option><option value="year-highest">year-highest</option><option value="name-a">name-a</option><option value="name-z">name-z</option></select>'
  const instanceMock = jest.spyOn(filters.popularFilter, "popularFilter");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    filters.popularFilter.addListener();
  expect(document.addEventListener).toBeCalledWith(
    "change",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});

test("It should create Listener for producer filter", () => {
  const instanceMock = jest.spyOn(filters.companyFilter, "producerFilter");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    filters.companyFilter.addListener();
  expect(document.addEventListener).toBeCalledWith(
    "change",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});


test("It should create Listener for color filter", () => {
  const instanceMock = jest.spyOn(filters.colorFilter, "colorFilter");
  document.addEventListener = jest
    .fn()
    .mockImplementationOnce((event, callback) => {
      callback();
    });
    filters.colorFilter.addListener();
  expect(document.addEventListener).toBeCalledWith(
    "change",
    expect.any(Function)
  );
  expect(instanceMock).toBeCalledTimes(1);
});