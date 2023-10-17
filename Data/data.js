import { useState } from "react";

export default function Data() {
  const [data, setData] = useState([{
    "fullname": "",
    "birthdate": "",
    "location": "",
    "phonenumber": "",
    "username": "",
    "email": "",
    "password": "",
    "confirmpassword": "",
  }, 
  {
    "formData": {}
  }]);

  function setDataCallback(newData) {
    setData(newData);
  }

  return (
    <View>
      ...
    </View>
  );
}