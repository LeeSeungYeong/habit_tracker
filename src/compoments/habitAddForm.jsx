import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); //페이지 리프레시 방지
    const name = inputRef.current.value
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form className="habit-add" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="name"
        type="text"
        placeholder="Habit"></input>
      <button className="add-btn">Add</button>
    </form>
  );

});

export default HabitAddForm;