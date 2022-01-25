import SignIn from './signIn';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom'
//import api from '../services/apiServices'



jest.mock('../services/apiServices.js', () => ({
  SignIn: () => ({email: 'Jane@jane.com', password: 'Doe123'})
}));

it('should call SignIn with the correcy credentials', async () => {

  const setIsAuthenticated = jest.fn();
  const credentials = {
    email: 'Jane@jane.com',
    password: 'Doe123'}

render(<Router><SignIn setIsAuthenticated={setIsAuthenticated}/> </Router>); //

const emailInput = screen.getByPlaceholderText(/Email address/);
const passwordInput = screen.getByPlaceholderText(/Password/);
const submitBtn = screen.getByRole('button', {name: /Sign in/i})

// populate input fields
userEvent.type(emailInput, 'test@test.com');
userEvent.type(passwordInput, 'test');

//submit form
await userEvent.click(submitBtn);

expect(setIsAuthenticated).toHaveBeenCalledWith(credentials);

})