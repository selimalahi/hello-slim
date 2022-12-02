import React from "react";
import icon1 from "../../../assets/icon/icon1.png";
import icon2 from "../../../assets/icon/icon2.png";
import icon3 from "../../../assets/icon/icon3.png";
import ChooseUsSingleData from "./ChooseUsSingleData";

const ChooseUs = () => {
  const chooseDatas = [
    {
      id: 1,
      name: "We are Fair and Affordable ",
      description:
        " We guarantee affordable prices than any other dealer and our guarantee to get you assured. ",

      img: icon1,
    },
    {
      id: 2,
      name: "Good Reputation",
      description:
        "We deal with accident free vehicles and who have had a good record on the road for a number of years.",
      img: icon2,
    },
    {
      id: 3,
      name: "Our Experience",
      description:
        "Keeping in mind the customer’s expectations and concerns our expert team gets a right car for you.",
      img: icon3,
    },
  ];
  return (
    <div className="mt-10">
      <div>
        <h3 className="text-xl font-bold uppercase text-center">
          Why Choose Us
        </h3>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            chooseDatas.map(chooseData => <ChooseUsSingleData
            key={chooseData.id}
            chooseData={chooseData}
            ></ChooseUsSingleData>)
        }
      </div>
    </div>
  );
};

export default ChooseUs;
