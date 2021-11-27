import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

  // FORMA MAIS USADA PEGANDO OS DADOS UM POR UM.
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  // const onTitleHandler = event => {
  //   console.log(event.target);
  //   setTitle(event.target.value);
  // };

  // const onAmountHandler = event => {
  //   setAmount(event.target.value);
  // };
  
  // const onDateHandler = event => {
  //   setDate(event.target.value);
  // };

  
  // OUTRA FORMA PEGANDO TODOS OS DADOS NUM ÚNICO OBJETO.
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',

  })


  const onHandleChange = event => {
    console.log(event);
    setForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  };

  const submitHandler = event => {
    console.log("fui submetido");
    event.preventDefault();
    
    const expenseData = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date)
    }

    console.log(expenseData);

    setForm({
      title: '',
      amount: '',
      date: ''
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            // value={title}
            // onChange={onTitleHandler}
            name="title"
            value={form.title}
            onChange={onHandleChange}
          />
           {form.title}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' 
            min='0.01' 
            step='0.01' 
            // value={amount}
            // onChange={onAmountHandler}
            name="amount"
            value={form.amount}
            onChange={onHandleChange}
          />
          {form.amount}
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' 
            min='2019-01-01' 
            max='2022-12-31' 
            // value={date}
            // onChange={onDateHandler}
            name="date"
            value={form.date}
            onChange={onHandleChange}
          />
          {form.date}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;