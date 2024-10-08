import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

const Signup: React.FC= () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
        <div className="invisible lg:visible">
            <Quote />
        </div>
    </div>
  )
}

export default Signup