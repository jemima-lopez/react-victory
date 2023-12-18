import { useGlobalState } from '../context/GlobalState'

export function Balance() {
    const { transactions } = useGlobalState();

    const amounts = transactions.map((transaction) => transaction.amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='flex justify-between items-center my-2'>
      <h3 className='text-slate-400'>Your Balance</h3>
      <h1 className='text-2x1 font-bold'>${total}</h1>
    </div>
  )
}

export default Balance;