import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

jest.mock("react-redux")

function renderApp(path){
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App/>
    </MemoryRouter>
  ),)
}

describe('isLogedIn is false', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      isLogedIn: false
    }))
  })

  it('with path /',()=>{
    const {getByText} = renderApp("/")
    expect(getByText("레스토랑 예약하기")).toBeTruthy()
  })  

})

describe('isLogedIn is true', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      isLogedIn: true
    }))
  })
  it('with path /',()=>{
    const {getByText} = renderApp("/")
    expect(getByText("레스토랑 예약 메뉴")).toBeTruthy()
  })
})