import React, { useState } from "react";
import styles from "../Styles/Checkout.module.css";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const details = JSON.parse(localStorage.getItem("items"));
  //console.log(details)
  const [coupon, setCoupon] = useState("");
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState(details);
  const [order, setOrder] = useState(false);
  const navigate = useNavigate()

  const totalprice = data.reduce((acc, curr) => acc + curr.prices, 0);
  // console.log(totalprice);
  // console.log(typeof coupon)
  let new_total = totalprice;
  const [pay, setPay] = useState(totalprice);

  const applyCoupon = () => {
    //alert('hi')
    setInput(coupon);

    if (input == "VISHAL_22") {
      alert("PROMO CODE APPLIED SUCCESSFULLY");
      new_total = Number(totalprice) - (Number(totalprice) * 30) / 100;
      setPay(new_total);
      setCoupon("");
      setDisabled(!disabled);
    }
  };
  console.log(order)
  const placeOrderfun = () => {
    setOrder(!order);
    console.log(order)

  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      padding="2rem"
      margin="auto"
      width="50%"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    >
      <div>
       
        <div>
          <div>
            <h4>
              <Text fontSize="2xl" textAlign="center" color="brown">
                E N T E R _ C H E C K O U T_D E T A I L S
              </Text>
            </h4>
            <br />

            <div>
         
              <ul>
                <li>
                  <Text fontSize="2xl">Total (USD)</Text>
                  <strong>$ {pay}</strong>
                </li>
              </ul>

              <div>
                <Input
                  value={coupon}
                  name="coupon"
                  type="text"
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Promo Code: VISHAL_22"
                />
                <Button
                  isDisabled={disabled}
                  color="white"
                  bg="green"
                  onClick={applyCoupon}
                >
                  Redeem
                </Button>
              </div>
            </div>
          </div>
          <div>
            <br />
            <form novalidate="">
              <div>
                <div>
                  <Text fontSize="2xl">First name</Text>
                  <input type="text" placeholder="Enter your first name..!!"  required="" />
                  <div>Valid first name is required.</div>
                </div>

                <div>
                  <Text fontSize="2xl">Last name</Text>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name..!!"
                 
                    required=""
                  />
                  <div>Valid last name is required.</div>
                </div>

                <div>
                  <Text fontSize="2xl">Username</Text>
                  <div>
                    <span>@</span>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div>Your username is required.</div>
                  </div>
                </div>

                <div>
                  <Text fontSize="2xl">
                    Email <span>(Optional)</span>
                  </Text>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div>
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div>
                  <Text fontSize="2xl">Address</Text>
                  <input
                    type="text"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div>Please enter your shipping address.</div>
                </div>

                <div>
                  <Text fontSize="2xl">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </Text>
                  <input
                    type="text"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div>
                  <Text fontSize="2xl">Country</Text>
                  <select id="country" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                    <option>India </option>
                    <option>Nepal</option>
                    <option>China</option>
                  </select>
                  <div>Please select a valid country.</div>
                </div>

                <div>
                  <Text fontSize="2xl">State</Text>
                  <select id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>MP</option>
                    <option>UP</option>
                    <option>RAJASTHAN</option>
                    <option>Chicago</option>
                  </select>
                  <div>Please provide a valid state.</div>
                </div>

                <div>
                  <Text fontSize="2xl">Zip</Text>
                  <input type="text" id="zip" placeholder="" required="" />
                  <div>Zip code required.</div>
                </div>
              </div>

              <hr />

              <div>
                <input type="checkbox" />
                <Text>Shipping address is the same as my billing address</Text>
              </div>

              <div>
                <input type="checkbox" id="save-info" />
                <Text>Save this information htmlFor next time</Text>
              </div>

              <hr />

              <Text fontSize="2xl">Payment</Text>

              <div>
                <div>
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                 
                    required=""
                  />
                  <Text>Credit card</Text>
                </div>
                <div>
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    required=""
               
                  />
                  <Text htmlFor="debit">Debit card</Text>
                </div>
                <div>
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    required=""
                  />
                  <Text htmlFor="paypal">PayPal</Text>
                </div>
              </div>

              <div>
                <div>
                  <Text fontSize="2xl" htmlFor="cc-name">
                    Name on card
                  </Text>
                  <input type="text" id="cc-name" placeholder="" required="" />
                  <small>Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div>
                  <Text
                    fontSize="2xl"
                    htmlFor="cc-number"
                    className="form-Text"
                  >
                    Credit card number
                  </Text>
                  <input type="text" placeholder="" required="" />
                  <div>Credit card number is required</div>
                </div>

                <div>
                  <Text fontSize="2xl">Expiration</Text>
                  <input type="text" placeholder="" required="" />
                  <div>Expiration date required</div>
                </div>

                <div>
                  <Text fontSize="2xl" htmlFor="cc-cvv" className="form-Text">
                    CVV
                  </Text>
                  <input type="text" id="cc-cvv" placeholder="" required="" />
                  <div>Security code required</div>
                </div>
              </div>

              <hr />

              <Button bg="green" color="white" onClick={placeOrderfun}>
                Place Order
              </Button>
              {order && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Order Placed ..!!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              You can track your order on our the give
              link:"https://www.bluedart.com/tracking"
            </AlertDescription>
            <Button bg='green' color='white' onClick={()=> navigate("/")}>Move to Home Page</Button>
          </Alert>
        )}

            </form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Checkout;
