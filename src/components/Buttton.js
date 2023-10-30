const Buttton = (props) => {
  return (
    <button className="bg-indigo-600 hover:bg-indigo-500 text-indigo-50 py-2 px-6 rounded duration-300">
      {props.text}
    </button>
  );
};

export default Buttton;
