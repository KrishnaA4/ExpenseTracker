import React,{useState}from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_ITEMS=[
  {
    id:'e1',
    Title:'Car Insurance',
    Amount:194.67,
    date:new Date(2021,3,2)
  },
  {
    id:'e2',
    Title:'Hotel Bill',
    Amount:294.67,
    date:new Date(2020,8,20)
  },
  {
    id:'e3',
    Title:'Toilet Paper',
    Amount:104.45,
    date:new Date(2020,1,25)
  },
  {
    id:'e4',
    Title:'Mobile Recharge',
    Amount:300.12,
    date:new Date(2021,5,10)
  }
];

function App(){

  const [expenses,setExpenses] = useState(DUMMY_ITEMS);
  
  const addExpenseHandler = (expense) =>{
    setExpenses((expenses)=>{
      return [expense,...expenses];
    })
  }
  return(
    <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses}/>
    </div>
  );
}

export default App;
