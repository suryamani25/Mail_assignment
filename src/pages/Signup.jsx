import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with Onebox for free"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup