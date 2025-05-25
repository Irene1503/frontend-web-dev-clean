function Buttons({ btnName, btnColor }) {

    function clickEvent() {
        console.log('hello')

    }
return (
  <button onClick={clickEvent} type="button" className={`btn m-2 ${btnColor}`}>
    {btnName}
   </button>
);
}

export default Buttons;