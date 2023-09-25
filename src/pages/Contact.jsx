export default function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otherField, setOtherField] = useState('');



  return (
    <div>

      <h1>Contact Page</h1>
      <label htmlFor="">Name:</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </div>
        <label htmlFor="">E-mail Address:</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Please enter your e-mail address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
        </div>
      </div>
      <label htmlFor="">Message:</label>
      <div class="input-group">
        <div class="input-group-prepend">

        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
        <button>Submit</button>
    </div>
  );
}
