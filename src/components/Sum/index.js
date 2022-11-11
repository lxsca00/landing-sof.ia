import style from "./Sum.module.css"

const Sum = ({firstNum, setFirstNum, secondNum, setSecondNum}) => {
  return (
    <div className={style.containerSecond}>
      <input
        placeholder="Num"
        value={firstNum}
        onChange={(e) => setFirstNum(e.target.value)}
      ></input>
      <p>+</p>
      <input
        placeholder="Num"
        value={secondNum}
        onChange={(e) => setSecondNum(e.target.value)}
      ></input>
    </div>
  );
};

export {Sum}
