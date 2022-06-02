import { useRecoilState } from "recoil"
import {counterState} from "../atom"

function CounterRecoil() {
    const [counter, setCounter] = useRecoilState(counterState)

    const counterIncrease = () => setCounter((prev) => prev + 1)

  return (
    <div style={{display: "flex", marginLeft: "40%", marginTop:"5%"}}>
        <button style={{marginRight: "10px"}} onClick={counterIncrease}>Increase By 1</button>
        <p>{counter}</p>
    </div>
  )
}

export default CounterRecoil