import { useState } from 'react';
import { interval } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

export const people = [
  { name: 'Max', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleh', age: 20 },
];

function Test() {
  const [value, setValue] = useState('');
  const handleBtn = (e) => {
    e.target.disabled = true;
    let i = 0;
    const canDrink = [];

    const intervalId = setInterval(() => {
      if (people[i]) {
        if (people[i].age >= 18) {
          canDrink.push(people[i].name);
        }
        setValue(canDrink.join(', '));
        i += 1;
      } else {
        clearInterval(intervalId);
        e.target.disabled = false;
      }
    }, 1000);
  };

  const handleRxjsBtn = (e) => {
    e.target.disabled = true;
    interval(1000)
      .pipe(
        take(people.length),
        filter((v) => {
          console.log('v', v);
          return people[v].age >= 18;
        }),
        map((v) => people[v].name),
        scan((acc, v) => acc.concat(v), []),
      )
      .subscribe(
        (res) => {
          setValue(res.join(', '));
        },
        null,
        () => (e.target.disabled = false),
      );
  };

  return (
    <div>
      <button onClick={handleBtn}>Показать с интервалом</button>
      <button onClick={handleRxjsBtn}>Показать с RxJS</button>
      <div>{value}</div>
      <hr />
    </div>
  );
}
export default Test;
