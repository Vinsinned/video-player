import './App.css';

function App() {
  var mq = window.matchMedia("(max-width: 570px)");
  if (mq.matches) {
    console.log('less')
    // window width is at less than 570px
  }
  else {
    console.log('more')
    // window width is greater than 570px
  }

  document.querySelector(".mq-value").innerText = mq.matches;

  return (
    <div>
    </div>
  );
}

export default App;
