import type { NextPage } from "next"
import { Label } from "../components/Label"

const Home: NextPage = () => {
  return <Label text="Hello, World!" />
}

// page componentはdefaultでexportする
export default Home
